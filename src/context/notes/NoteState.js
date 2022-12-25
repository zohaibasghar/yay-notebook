import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host =  'http://localhost:5000';

  const [notes, setNotes] = useState([]);

  async function getNotes() {
    // * Getting all notes API hit perfectly
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("authToken"),
      },
    });
    const json = await response.json();

    setNotes(json);
  }

  async function addNote(title, description, tag) {
    //  * add note API hit perfectly
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  }

  async function dltNote(id) {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
    });
    getNotes();
  }

  async function editNote(id, title, description, tag) {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    getNotes();
  }

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, editNote, dltNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
