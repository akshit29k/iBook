
import React, { useContext, useEffect, useState, useRef } from 'react'
import { context } from '../context/NoteContext'



export default function NoteItem() {
    const noteContext = useContext(context);
    const refClose = useRef(null);
    // Updating Element
    const[note,setNote] = useState({id:"",title:"",description:""})
    const handleOnClick =()=>{
        let titleId = document.getElementById("exampleModalScrollableTitle");
        let descId = document.getElementById("description");
        let title = titleId.innerText;
        let description = descId.innerText;
        setNote({title:title,description:description});
        noteContext.updateNote(note.id,title,description)
        //Clicking on updated button automatically click close button using ref
        refClose.current.click();
    }
    //Deleting Element
    const handleDeleteClick=(id)=>{
        noteContext.deleteNote(id);
    }
    //Clicked Note
    const handleUpdateClick = (cNote)=>{
       setNote({id:cNote._id,title:cNote.title,description:cNote.description});
    }
    //Fetching all notes and displaying it and rendering again when note gets updated
    useEffect(()=>{
      if(localStorage.getItem('token')){
        noteContext.fetchAllNotes();
      }
      // eslint-disable-next-line
    },[note])
return (
    <>
    {/* Fetched Data gets displayed by below code */}
    <h3 style={{color:"white",textAlign:"center"}}>Your Notes</h3>
    <div className="row">
      <div className='container' style={{color:"white",fontSize:"larger",textAlign:"center"}}>
      {noteContext.notearr.length===0 && "No data"}
      </div>
    { noteContext.notearr.length!==0 && noteContext.notearr.map((ele)=>
        <div className="col-md-4 my-2" key={ele._id}>
        <div className="card" style={{height:"150px",overflow:"hidden"}}>
        <div className="card-body">
            <div style={{display:"flex"}}>
          <h5 className="card-title">{(ele.title.length)<17? ele.title: ele.title.slice(0,17)+"..."}</h5>
          <div style={{marginLeft:"auto"}}>
          <i className="fa-solid fa-book-open" onClick={()=>{handleUpdateClick(ele)}} data-toggle="modal" data-target="#exampleModalScrollable" style={{color: "#21735a",padding:"5px",cursor:"pointer"}}></i>
          <i className="fa-solid fa-trash" onClick={()=>{handleDeleteClick(ele._id)}}  style={{color: "#990f1d",padding:"5px",cursor:"pointer"}}></i>
          </div>
          </div>
          <p className="card-text">{(ele.description.length)<85? ele.description: ele.description.slice(0,85)+"..."}</p>
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
      <div style={{padding:"15px 15px 0px 18px"}}>
        <h5 suppressContentEditableWarning="true"  contentEditable="true" style={{outline:"none"}}  className="modal-title" id="exampleModalScrollableTitle" >{note.title}</h5>
        {/* <button type="button"  data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div suppressContentEditableWarning="true"  contentEditable="true" style={{outline:"none"}} id="description" className="modal-body" >
      {note.description}
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={handleOnClick} className="btn btn-secondary">Update Note</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
