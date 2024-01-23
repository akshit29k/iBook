
import React, { useContext, useState } from 'react'
import { context } from '../context/NoteContext'



export default function NoteItem() {
    const noteContext = useContext(context);

    // Updating Element
    const[note,setNote] = useState({title:"",description:""})
    const handleOnClick =()=>{
        noteContext.updateNote(note.title,note.description)
    }
    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    //Clicked Note
    const handleUpdateClick = (cNote)=>{
       setNote(cNote);
    }
return (
    <>
    <h3 style={{color:"white",textAlign:"center"}}>Your Notes</h3>
    <div className="row">
    {
        noteContext.notearr.map((ele)=>
        <div className="col-md-4 my-2" key={ele._id} >
        <div className="card" style={{height:"150px",overflow:"hidden"}}>
        <div className="card-body">
            <div style={{display:"flex"}}>
          <h5 className="card-title">{ele.title}</h5>
          <div style={{marginLeft:"auto"}}>
          <i className="fa-solid fa-trash" onClick={()=>{noteContext.deleteNote(ele._id)}}  style={{color: "#990f1d",padding:"5px",cursor:"pointer"}}></i>
          <i className="fa-solid fa-book-open" onClick={()=>{handleUpdateClick(ele)}} data-toggle="modal" data-target="#exampleModalScrollable" style={{color: "#21735a",padding:"5px",cursor:"pointer"}}></i>
          </div>
          </div>
          <p className="card-text">{ele.description}</p>
        </div>
      </div>
      </div>
            )
        }
        </div>

         {/* Read Element  And Update Element*/}
        <div className="modal fade"  id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 suppressContentEditableWarning="true"  contentEditable="true" style={{outline:"none"}} onChange={handleOnChange} name="title" className="modal-title" id="exampleModalScrollableTitle" >{note.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div suppressContentEditableWarning="true" contentEditable="true" style={{outline:"none"}} onChange={handleOnChange} className="modal-body" >
      {note.description}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={handleOnClick} className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
