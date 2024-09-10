import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import React, {useState} from "react";

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
    </div>
  );
}

export default App;
