import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {
    // initiate an empty note obj with 2 properties.
    // use useState hook to change state of obj onChange.
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // hanlde onChange event (input).
    function handleChange(event) {
        // destructure note obj properties received from event target <input> data.
        const {name, value } = event.target;

        // send previous note value as a paramater to setNote.
        setNote(prevNote => {
            return {
                ...prevNote, // return previous value saved in the note state
                [name]: value // and concatene with new value.
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault(); // prevent entire page reload after submitting request, only component reloads.
    }

  return (
    <div>
        <form className='create-note'>
            <input
                type='text'
                name='title'
                onChange={handleChange}
                // apply input value to 'note.title' property in the note obj.
                value={note.title}
                placeholder='Title'
            />
            <textarea 
                name='content'
                rows='3'
                onChange={handleChange}
                value={note.content}
                placeholder='What&#39;s on your mind'
            />
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </form>
    </div>
  )
}

export default CreateArea