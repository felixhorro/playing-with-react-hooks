import { useState } from "react";

export default function({ user, password } = {}) {
  const [loggedUser, setUser] = useState({});

  /*** Near real world loggin function: ***
  const checkLogin = ({ user, password }) => {
    const promise = fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user,
        password
      })
    });

    promise
      .then(r => r.json(), () => ({}))
      .then(({ user, rol }) => setUser({ user, rol }));

    return promise;
  };
  */

  /*** Fake login ***/
  const checkLogin = ({ username, password }) => {
    const promise = new Promise(resolve =>
      setTimeout(() =>
        resolve({
          name: username,
          rol: "administrador"
        })
      , 2000)
    );
    promise.then(({ name, rol }) => setUser({ name, rol }));
    return promise;
  };

  console.log("Login...");
  return [loggedUser, checkLogin];
}
