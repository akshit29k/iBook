import React, { useContext, useState } from 'react'
import { context } from '../context/NoteContext'


export default function AddNote() {
    const noteContext = useContext(context);
    const[note,setNote] = useState({title:"",description:""})
    const handleOnClick =()=>{
        noteContext.addNote(note.title,note.description)
        setNote({title:"",description:""})
    }
    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
   <>
   {/* Form for adding note */}
      <div className="form-floating mb-3">
  <input type="text" className="form-control" name="title" value={note.title} onChange={handleOnChange}  id="floatingInput" placeholder="Any title" />
  <label htmlFor="floatingInput">Title</label>
</div>
<div className="form-floating">
  <textarea type="text" className="form-control" name="description" value={note.description} onChange={handleOnChange} style={{height:"150px",maxHeight:"200px"}} id="floatingPassword"  placeholder="Your note"/>
  <label htmlFor="floatingPassword">Description</label>
</div>
<button type="button" disabled={note.description.length<1 || note.title.length<1} className="btn btn-outline-light my-2" onClick={handleOnClick}>Add a note</button>
   </>
  )
}
