import { createContext, useState } from "react";

const contextCreated = createContext();

const NoteContext = (props)=>{
    const note =[ {
        _id: "65aa19af4c475",
        user: "65a91844ff4044fcc97f25eb",
        title: "Movie",
        description: "Thor-Ragnarok",
        tag: "general",
        Date: "2024-01-19T06:05:49.216Z",
      },{
        _id: "6a11389af4c475535b9",
        user: "65a91844ff4044fcc97f25eb",
        title: "Movie",
        description: "Thor-Ragnarok",
        tag: "general",
        Date: "2024-01-19T06:05:49.216Z",
      },{
        _id: "65aa113dc9af4c4759",
        user: "65a91844ff4044fcc97f25eb",
        title: "Movie",
        description: "Thor-Ragnarok",
        tag: "general",
        Date: "2024-01-19T06:05:49.216Z",
      }
      ,{
        _id: "65aa189af4c4535b9",
        user: "65a91844ff4044fcc97f25eb",
        title: "Movie",
        description: "Thor-Ragnarok",
        tag: "general",
        Date: "2024-01-19T06:05:49.216Z",
      }
    ]

    const [notearr,setNotearr] = useState(note);

    //AddNote
    const addNote = (id,title,description)=>{
        const newNote ={
        _id: id,
        user: "65a91844ff4044fcc97f25eb",
        title: title,
        description: description,
        tag: "general",
        Date: "2024-01-19T06:05:49.216Z"
        }
        setNotearr([...notearr,newNote]);
    }
    //UpdateNote
    const updateNote = (title,description)=>{
        console.log(title+" "+description)
        
    }
    //DeleteNote
    const deleteNote = (id)=>{
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

    <context.Provider value={{notearr,addNote,updateNote,deleteNote}}>
        {props.children}
    </context.Provider>
)
}

export default NoteContext;
export const context = contextCreated;