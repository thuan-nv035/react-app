import React, {useEffect, useState} from 'react';
import {getStorage, uploadBytes, ref, getDownloadURL} from "firebase/storage";
import {db} from "../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore";

const GalleryImage = () => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);
    const storage = getStorage();

    const onChangeFile = (evt) => {
        setFile(evt.target.files[0]);//lay file từ input
    };

    const uploadFile = async (evt) => {
        const storage = getStorage();//base storage //unix
        const fileName = `images/${Date.now()}image.png`;
        const myRef = ref(storage, fileName);//tao ref
        try {
            await uploadBytes(myRef, file, fileName);
            //lưu lại file vào firestore
            const collectionRef = collection(db, 'images');

            const pathRef = ref(storage, fileName);
            const url = await  getDownloadURL(pathRef);
            await addDoc(collectionRef, {
                url: url
            });
        } catch (e) {

        }
    }

    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, 'images');
            const collectionSnapShot = await getDocs(collectionRef);
            const urls = [];
            collectionSnapShot.forEach(doc => {
                const {url} = doc.data();
                urls.push(url);
            });
            setFiles(urls);
            console.log(urls);
        })()
    }, []);
    return (
        <div>
            <input type="file" onChange={onChangeFile}/>
            <button onClick={uploadFile}>Upload</button>
            {files.map(url => <img key={url} src={url} alt=""/>)}
        </div>
    );
};

export default GalleryImage;