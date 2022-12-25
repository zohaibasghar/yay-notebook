import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if(word==='danger'){
      word='error'
    }
    const lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "45px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}: </strong>
          {capitalize(props.alert.msg)}
        </div>
      )}
    </div>
  );
}

export default Alert;
