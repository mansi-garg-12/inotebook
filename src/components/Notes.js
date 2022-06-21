import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNotes from "./AddNotes";
import NoteItems from "./NoteItems";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <AddNotes />
      <div className="row my-3">
        <div className="container my-3">
          <h2>Your notes</h2>
        </div>
        {notes.map((note) => {
          return <NoteItems key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
