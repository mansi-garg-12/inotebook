import { useState } from "react";
import noteContext from "./NoteContext";
const host = "http://localhost:5000";
const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMGU1N2Q3Yjg4OTc1OWVkZjYxYWU1In0sImlhdCI6MTY1NDk1MTY0N30.H2DFZNPFltSDwvTqHwJp-nYJ2iloQLPFN0ofAsbrMFo",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //setNotes()

  //add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMGU1N2Q3Yjg4OTc1OWVkZjYxYWU1In0sImlhdCI6MTY1NDk1MTY0N30.H2DFZNPFltSDwvTqHwJp-nYJ2iloQLPFN0ofAsbrMFo",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Added a new note");

    const note = {
      _id: "62adcfef5a316e5be5348bd8451",
      user: "62a0e57d7b889759edf61ae5",
      title: title,
      description: description,
      tag: tag,
      date: "2022-06-18T13:15:27.852Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMGU1N2Q3Yjg4OTc1OWVkZjYxYWU1In0sImlhdCI6MTY1NDk1MTY0N30.H2DFZNPFltSDwvTqHwJp-nYJ2iloQLPFN0ofAsbrMFo",
      },
    });
    const json = response.json();
    console.log("deleted" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //to do api call
    const response = await fetch(`${host}/api/notes/updateallnotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMGU1N2Q3Yjg4OTc1OWVkZjYxYWU1In0sImlhdCI6MTY1NDk1MTY0N30.H2DFZNPFltSDwvTqHwJp-nYJ2iloQLPFN0ofAsbrMFo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response.json);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
