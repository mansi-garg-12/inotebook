
import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState=(props)=>{
  const notesInitial=[
    {
      "_id": "62adcfc95a316e5be58bd83e",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book C++",
      "description": "it is a good book",
      "tag": "C++",
      "date": "2022-06-18T13:14:49.985Z",
      "__v": 0
    },
    {
      "_id": "62adcfef5a316e5be58bd841",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    }
  ]
   const [notes,setNotes]=useState(notesInitial)
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;