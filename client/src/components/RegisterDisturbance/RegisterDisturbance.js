import React from "react";
import "./RegisterDisturbance.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
function RegisterDisturbance() {
  return (
    <div className="registerDisturbance">
      <div className="registerDisturbance__content">
        <p>Disturbance Registered</p>
        <p>82</p>
      </div>
      <div className="registerDisturbance__btn">
        <EditNoteIcon color="primary" style={{ fontSize: "30px" }} />
        <p>Register New Issue</p>
      </div>
    </div>
  );
}

export default RegisterDisturbance;
