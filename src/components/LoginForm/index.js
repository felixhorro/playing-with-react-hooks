import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    props.onSubmit({ username, password }).then(() => setLoading(false));
  };

  return (
    <form className="LoginForm" style={{ opacity: loading ? .3 : 1 }} onSubmit={handleSubmit}>
      <label>
        User: <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
        Pwd: <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <input type="submit" value="Login" disabled={loading} />
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;