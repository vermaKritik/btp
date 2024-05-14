import { Avatar, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import "./Nav.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  
  return (
    <div className="nav">
      <div className="nav__blank"></div>
      <div className="nav__avatar">
        <IconButton onClick={()=>history.push("/login")} aria-label="delete">
          <MoreVertIcon />
        </IconButton>
        <IconButton onClick={()=>history.push("/")} aria-label="delete">
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={()=>history.push("/profile")}>

        <Avatar alt="Remy Sharp" sx={{ bgcolor: deepOrange[500] }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Nav;
