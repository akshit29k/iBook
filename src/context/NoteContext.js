import { createContext, useState } from "react";

const contextCreated = createContext();

const NoteContext = (props)=>{
    //Common Host
    const host = "http://localhost:5000/api/note"
    //Empty note state array which gets data when fetch all notes run
    const [notearr,setNotearr] = useState([]);

    //FetchAllNotes
    const fetchAllNotes = async ()=>{
      try{
    const response = await fetch(`${host}/fetchallnotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-content": localStorage.getItem("token")
        }
      });
      const json = await response.json();
      setNotearr(json)
    }catch(error){
      console.log("hyy")
    }
    }


    //AddNote
    const addNote = async (title,description)=>{
      try{
        const response = await fetch(`${host}/createnote`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-content": localStorage.getItem("token")
            },
            body:JSON.stringify({title,description})
            
          });

          const newNote = await response.json();
          console.log(newNote)
          if(newNote.error){
            console.log("invalid token")
            return ;
          }
        setNotearr([...notearr,newNote]);
      }catch(error){
        console.log(error)
      }
    }


    //UpdateNote
    const updateNote = async (id,title,description)=>{
        const response = await fetch(`${host}/updatenote/${id}`, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "auth-content": localStorage.getItem("token")
            },
            body:JSON.stringify({title,description})
            
          });
    }
    //DeleteNote
    const deleteNote = async (id)=>{
        const response = await fetch(`${host}/deletenote/${id}`, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "auth-content": localStorage.getItem("token")
            }
          });
         const newNote = notearr.filter((note)=>{return note._id!==id});
            setNotearr(newNote);
        
    }
return(

    <contextCreated.Provider value={{notearr,addNote,updateNote,deleteNote,fetchAllNotes}}>
        {props.children}
    </contextCreated.Provider>
)
}

export default NoteContext;
export const context = contextCreated;