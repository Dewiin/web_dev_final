import { useEffect, useState } from 'react'
import './App.css'
import { NoteForm } from './components/NoteForm'
import { NotesList } from './components/NotesList'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { AuthForm } from './components/AuthForm';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  return (
    <>
      {user ? (
        <>
          <p className='title-card'>Notes</p>
          <NotesList user={user} />
          <NoteForm user={user} />
        </>
      ) : (
        <AuthForm />
      )}
    </>
  )
}

export default App
