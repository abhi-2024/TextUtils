import React from "react";

function Alerts(props) {
  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}: </strong>
        {props.alert.text}
      </div>
    )
  );
}

export default Alerts;
