import { useState } from "react"
import { auth, db } from '../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import { signOut } from "firebase/auth";

export function NoteForm( {user} ) {
    const [note, setNote] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if(!note.trim()) {
            return;
        }

        try { 
            await addDoc(collection(db, "users", user.uid, "notes"), {
                content: note
            })
            console.log("Successfully added note: ", note);
            setNote("");
        }
        catch (error) {
            console.error("Error adding note: ", error);
        }
    }; 

    function handleLogout() {
        signOut(auth)
        .then(() => {
            console.log("User has succesfully logged out.");
        })
        .catch((error) => {
            console.error("User failed to log out", error);
        });
    }

    return (
        <div className="notes-form">
            <form onSubmit={e => handleSubmit(e)}>
                <input
                value={note}
                onChange={(e) => {setNote(e.target.value)}}
                placeholder="Write a note..."
                />   
                <button type="submit">Add Note</button>
            </form>
            <p className="logout" onClick={handleLogout} >Log Out</p>
        </div>
    )
}