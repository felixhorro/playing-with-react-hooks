import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Profile.css";

function Profile({ user }) {

  const [color, changeColor] = useState("black");
  return (
    <div className="Profile">
      <h1>Welcome, {user.name}</h1>
      <p style={{ backgroundColor: color }}>
        Dear {user.rol}, you are logged in.
      </p>
      <button onClick={() => changeColor("darkblue")}>blue</button>
      <button onClick={() => changeColor("darkred")}>red</button>
      <button onClick={() => changeColor("darkgreen")}>green</button>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rol: PropTypes.string
  })
};

export default Profile;