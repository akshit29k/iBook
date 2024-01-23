import { createContext, useState } from "react";

const contextCreated = createContext();

const NoteContext = (props)=>{
    //Common Host
    const host = "http://localhost:5000/api/note"
    //Empty note state array which gets data when fetch all notes run
    const [notearr,setNotearr] = useState([]);

    //FetchAllNotes
    const fetchAllNotes = async ()=>{
    const response = await fetch(`${host}/fetchallnotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-content": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJJRCI6IjY1YTkxODQ0ZmY0MDQ0ZmNjOTdmMjVlYiJ9LCJpYXQiOjE3MDU1OTE3NzZ9.7-L4YyEvUdifvQTH3gouFQnECOEJsxxHQ3zk5yU2nw0"
        }
      });
      const json = await response.json();
      setNotearr(json)
    }


    //AddNote
    const addNote = async (title,description)=>{
        const response = await fetch(`${host}/createnote`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-content": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJJRCI6IjY1YTkxODQ0ZmY0MDQ0ZmNjOTdmMjVlYiJ9LCJpYXQiOjE3MDU1OTE3NzZ9.7-L4YyEvUdifvQTH3gouFQnECOEJsxxHQ3zk5yU2nw0"
            },
            body:JSON.stringify({title,description})
            
          });

          const newNote = await response.json();
          console.log(newNote)
        setNotearr([...notearr,newNote]);
    }


    //UpdateNote
    const updateNote = async (id,title,description)=>{
        const response = await fetch(`${host}/updatenote/${id}`, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "auth-content": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJJRCI6IjY1YTkxODQ0ZmY0MDQ0ZmNjOTdmMjVlYiJ9LCJpYXQiOjE3MDU1OTE3NzZ9.7-L4YyEvUdifvQTH3gouFQnECOEJsxxHQ3zk5yU2nw0"
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
              "auth-content": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJJRCI6IjY1YTkxODQ0ZmY0MDQ0ZmNjOTdmMjVlYiJ9LCJpYXQiOjE3MDU1OTE3NzZ9.7-L4YyEvUdifvQTH3gouFQnECOEJsxxHQ3zk5yU2nw0"
            }
          });
        let newNote = [];
         notearr.forEach(element => {
            if(element._id === id){
                return;
            }
            newNote.push(element);
            setNotearr(newNote);
        });
    }
return(

    <context.Provider value={{notearr,addNote,updateNote,deleteNote,fetchAllNotes}}>
        {props.children}
    </context.Provider>
)
}

export default NoteContext;
export const context = contextCreated;