import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context= useContext(noteContext)
  const {dltNote}=context
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <div className="note-head">
            <h5 className="card-title">{props.item.title}</h5>
            <span className="tag">{props.item.tag}</span>
          </div>
          <p className="card-text">{props.item.description}</p>
          <i className="fa-regular fa-trash-can" onClick={()=>{dltNote(props.item._id);props.showAlert('Note deleted.','success')}}></i>
          <i className="fa-solid fa-file-pen mx-3" onClick={()=>{props.updateNote(props.item)}}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
