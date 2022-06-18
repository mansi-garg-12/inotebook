
import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState=(props)=>{
  const notesInitial=[
    {
      "_id": "62adcfc9586a316e5be58bd83e65",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book C++",
      "description": "it is a good book",
      "tag": "C++",
      "date": "2022-06-18T13:14:49.985Z",
      "__v": 0
    },
    {
      "_id": "62adc4fef5a316e5be58bd8416",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    },
    {
      "_id": "62adcf43ef5a316e5be58bd8471",
      "user": "62a0e57d7b889759edf617ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    },
    {
      "_id": "62adcfef125a316e5be58b67d841",
      "user": "62a0e57d7b889759edf617ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    },
    {
      "_id": "62adcfef5a1234316e5be58bd5841",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    },
    {
      "_id": "62adcfef5a316e125be58bd8413",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    },
    {
      "_id": "62adcfef5a316e5b55e58bd8413",
      "user": "62a0e57d7b889759edf61ae5",
      "title": "book hello",
      "description": "it is a nice book",
      "tag": "C++",
      "date": "2022-06-18T13:15:27.852Z",
      "__v": 0
    },
    {
      "_id": "62adcfef5a316e5be5348bd8451",
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