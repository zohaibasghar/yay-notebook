import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  // * Fetching all notes API in useEffect
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      getNotes();
      navigate("/");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleShow = (note) => {
    setShow(true);
    // console.log(note);
    setNote({
      id: note._id,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setShow(false);
    props.showAlert(`${note.etitle}: Note updated successfully`, "success");
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="my-3">
            <div className="form-group mb-3">
              <label htmlFor="etitle">Title: </label>
              <input
                type="text"
                className="form-control"
                id="etitle"
                value={note.etitle}
                name="etitle"
                aria-describedby="emailHelp"
                placeholder="Enter title"
                onChange={handleChange}
                minLength={5}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edescription">Description: </label>
              <input
                type="text"
                className="form-control"
                id="edescription"
                name="edescription"
                value={note.edescription}
                placeholder="Enter description"
                onChange={handleChange}
                minLength={5}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="etag">Tag: </label>
              <input
                type="text"
                className="form-control"
                id="etag"
                name="etag"
                placeholder="Enter tag"
                value={note.etag}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={note.etitle.length < 1 || note.edescription.length < 1}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row justify-content-center">
        <h2 className="text-center">Notes</h2>
        <div className="container d-flex justify-content-center">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((e) => {
          return (
            <NoteItem
              key={e._id}
              updateNote={handleShow}
              item={e}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
