
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';


// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//   } from "react-router-dom";
function About() {
  const a=useContext(noteContext);
  return (
    <div>About me {a.name}</div>
  )
}

export default About