import React, {useState} from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";


function App() {
  
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteItem, index) => {
        return(
          <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
        />
        )
      })}
    
    </div>
  );
}

export default App;
