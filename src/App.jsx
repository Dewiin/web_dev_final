import './App.css'
import { NoteForm } from './components/NoteForm'
import { NotesList } from './components/NotesList'

function App() {

  return (
    <>
      <p className='title-card'>Notes</p>
      <NotesList />
      <NoteForm />
    </>
  )
}

export default App
