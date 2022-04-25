import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebase';
const Add = () => {
    const [message, setMessage] = useState('')
    const addNote = async () => {
        if(!message) {
            alert("nhap vao ban ey")
            return
        }
        const collectionRef = collection(db,'todos')
        await addDoc(collectionRef, {
            message
        })
        setMessage('')
    }
    return (
        <div>
            <h1>Add todo</h1>
            <input type="text" 
                onChange={(e)=> setMessage(e.target.value)}
                value = {message}
            />
            <button onClick={addNote}>Add Note</button>
        </div>
    );
};

export default Add;

