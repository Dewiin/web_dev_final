import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';

export function NotesList( {user} ) {
    const [notes, setNotes] = useState([]);

    async function fetchNotes() {
        try {
            const snapshot = await getDocs(collection(db, "users", user.uid, "notes"));
            setNotes(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        }
        catch (error) {
            console.error("Error fetching notes: ", error);
        }
    };

    useEffect(() => {
        fetchNotes();
    });

    async function handleUpdate(originalContent, id) {
        const newContent = prompt("Edit content:", originalContent);
        try {
            await updateDoc(doc(db, "users", user.uid, "notes", id), {content: newContent});
            fetchNotes();
        }
        catch (error) {
            console.error("Error updating note: ", error);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteDoc(doc(db, "users", user.uid, "notes", id));
            fetchNotes();
        }
        catch (error) {
            console.error("Error deleting note: ", error);
        }
    }

    return (
        <div className='notes-view'>
            {notes.map(doc => (
                <div key={doc.id}>
                    <p>{doc.content}</p>
                    <button onClick={() => handleUpdate(doc.content, doc.id)}>Edit</button>
                    <button onClick={() => handleDelete(doc.id)}>Delete</button>
                </div>
            ))
            }
        </div>
    )
}