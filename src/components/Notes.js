import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItems from "./NoteItems";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <div className="container my-3">
        <h2>Your notes</h2>
      </div>
      {notes.map((note) => {
        return <NoteItems key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
