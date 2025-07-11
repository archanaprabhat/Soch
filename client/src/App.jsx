import { useState } from "react";
export default function App() {
  const [currentNote, setCurrentNote] = useState('');
  const [notes, setNotes] = useState([]);
  const handleNote = () => {
    console.log("Adding note...", currentNote);
  };
  return (
    <div>
      <h1>Soch</h1>
      <input type='text' placeholder='Enter your note...' onChange={(e) =>setCurrentNote(e.target.value)} value={currentNote}/>
      <button onClick={handleNote}>Add</button>
    </div>
  );
}
