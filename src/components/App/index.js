import React from "react";
import useLogin from "../../hooks/useLogin";
import LoginForm from "../LoginForm";
import Profile from "../Profile";
import "./App.css";

function App(props) {
  const [user, checkLogin] = useLogin();

  const content = user.rol
    ? ( <Profile user={user} /> )
    : ( <LoginForm onSubmit={checkLogin} /> );

  return (
    <div className="App">
      <header className="App-header">{content}</header>
    </div>
  );
}

export default App;
