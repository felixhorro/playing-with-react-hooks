import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import LoginForm from "../LoginForm";
import Profile from "../Profile";
import "./App.css";

function App(props) {
  const [loginData, setLoginData] = useState({});
  const { user, error, loading } = useLogin(loginData);

  const content = user.rol
    ? ( <Profile user={user} /> )
    : (<LoginForm
      onSubmit={setLoginData}
      error={error}
      loading={loading}
    />);

  return (
    <div className="App">
      <header className="App-header">{content}</header>
    </div>
  );
}

export default App;
