import React, { useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  limit,
  orderBy,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const List = () => {
  const [todos, setTodos] = React.useState([]);
  let unsub = null;
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "todos");

      // lay ve snapshot 1 lan
      // const collectionSnapShot = await getDocs(collectionRef);

      // subscribe vao observable cua database
      // observable / pub-sub
      const collectionQuery = query(collectionRef, limit(3), orderBy('message','desc'));
      unsub = onSnapshot(collectionQuery, (snapshot) => {
        console.log("co su thay doi du lieu");
        const localTodos = [];
        snapshot.forEach((doc) => {
          localTodos.push({
            id: doc.id,
            message: doc.data().message,
          });
        });
        setTodos(localTodos);
      });
      // const localTodos = [];
      // collectionSnapShot.forEach(doc => {
      //     localTodos.push({id: doc.id, message: doc.data().message});
      // });
    })();
  }, []);

  const deleteNote = async (id) => {
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  };
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.message}
            <Link to={`/edit?id=${todo.id}`}>Edit</Link>
            <button onClick={() => deleteNote(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
