import React, { useState } from 'react';

function CreateArea() {
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
        </form>
    </div>
  )
}

export default CreateArea