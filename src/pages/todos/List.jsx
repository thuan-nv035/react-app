import React, {useEffect} from 'react';
import {db} from "../../firebase";
import {collection, getDocs} from 'firebase/firestore'
import { Link } from 'react-router-dom';

const List = () => {
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, 'todos');
            const collectionSnapShot = await getDocs(collectionRef);
            const localTodos = [];
            collectionSnapShot.forEach(doc => {
                localTodos.push({id:doc.id,message:doc.data().message});
            });
            setTodos(localTodos);
        })();
    },[]);
    return (
        <div>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo.message}
                    <Link to = {`/edit?id=${todo.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;