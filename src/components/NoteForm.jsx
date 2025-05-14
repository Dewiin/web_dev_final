import { useState } from "react"
import { db } from '../firebase.js';
import { collection, addDoc } from 'firebase/firestore';


export function NoteForm() {
    const [note, setNote] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if(!note.trim()) {
            return;
        }

        try { 
            await addDoc(collection(db, "notes"), {
                content: note
            })
            console.log("Successfully added note: ", note);
            setNote("");
        }
        catch (error) {
            console.error("Error adding note: ", error);
        }
    }; 

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
            value={note}
            onChange={(e) => {setNote(e.target.value)}}
            placeholder="Write a note..."
            />   
            <button type="submit">Add Note</button>
        </form>
    )
}