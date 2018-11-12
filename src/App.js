import React,{ useState } from 'react';
import useLogin from './hooks/useLogin';
import './App.css';

function App(props) {
  const [color, changeColor] = useState('black');
  const [user, checkLogin] = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (user.log) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{user.name || 'No user'}</h1>
          <h1>{user.rol || '--'}</h1>
          <p style={{ backgroundColor: color }}>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={() => changeColor('darkblue')}>blue</button>
          <button onClick={() => changeColor('darkred')}>red</button>
          <button onClick={() => changeColor('darkgreen')}>green</button>
        </header>
      </div>
    );
  } else {
    return (
      <form onSubmit={() => checkLogin({ username, password })}>
        <label>User: <input value={username} onChange={event => setUsername(event.target.value)}/></label>
        <label>Pwd: <input value={password} onChange={event => setPassword(event.target.value)}/></label>
      </form>
    );
  }
};

export default App;
