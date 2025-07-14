import { useState } from "react";
export default function App() {
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState([]);
  const handleNote = () => {
    setNotes([...notes, currentNote]);
    setCurrentNote("");
  };
  const [searchText,setSearchText] = useState('')
  
  function handleDelete(id){
    const newNotes = notes.filter((item, index)=> index !== id)
    setNotes(newNotes)
  }
const filteredNotes = notes.filter((note)=> note.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div>
      <div><h1>Soch</h1>
      <input placeholder='Search for notes here' value={searchText} onChange={(e)=> setSearchText(e.target.value)} type="text" />
      </div>
      
      <input
        type='text'
        placeholder='Enter your note...'
        onChange={(e) => setCurrentNote(e.target.value)}
        value={currentNote}
      />
      <button onClick={handleNote}>Add</button>
      <div>
        <ul>
          {(searchText ? filteredNotes :notes).map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
