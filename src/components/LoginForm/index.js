import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit({ username, password });
  };

  return (
    <form className="LoginForm" style={{ opacity: props.loading ? .3 : 1 }} onSubmit={handleSubmit}>
      {props.error &&
        <p className="error">{props.error}</p>
      }
      <div>
        <label>
          User: <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        </label>
        <label>
          Pwd: <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>
        <input type="submit" value="Login" disabled={props.loading} />
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;