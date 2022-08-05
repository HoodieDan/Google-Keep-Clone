import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { db } from "./firebase"
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"

function App() {
  let [items, setItems] = useState([]);
  const notesRef = collection(db, "notes")

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNotes();
    // eslint-disable-next-line
  }, [items]);

  const addNote = async (note) => {
    await addDoc((notesRef), {
      ...note
    });
    // console.log("Document written with ID: ", docRef.id);  
  }

  const deleteNote = async (id) => {
    await deleteDoc(doc(notesRef, id));
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addNote} />
      <div className="cont">
        <div className="row container">
          {items.map((noteItem, index) => {
            return (
              <Note key={index} id={noteItem.id} title={noteItem.title} content={noteItem.content} deleteItem={deleteNote} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
