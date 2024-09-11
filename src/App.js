import React, {useState} from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";


function App() {
  
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !==id;
      });
    });
  };

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
          onDelete={deleteNote}
        />
        )
      })}
    <Footer />
    </div>
  );
}

export default App;
