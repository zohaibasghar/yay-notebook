import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
    setNote({ title: "", description: "", tag: "" })  
    props.showAlert(`${note.title}: Added successfully.`,'success')
  };
  return (
    <div className="my-2">
      <h2 className="text-center">Add a note</h2>
      <form className="my-3 add-note-form">
        <div className="form-group mb-2">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={handleChange}
            value={note.title}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description">Description: </label>
          <textarea
          rows={3}
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter description"
            onChange={handleChange}
            value={note.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag: </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter tag"
            value={note.tag}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-2"
          onClick={handleSubmit}
          disabled={note.title.length<1 || note.description.length<1}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
