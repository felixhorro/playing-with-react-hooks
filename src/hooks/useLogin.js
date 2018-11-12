import { useState } from "react";

export default function({ user, password } = {}) {
  const [loggedUser, setUser] = useState({});

  /*
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
  const checkLogin = ({ user, password }) => {
    const promise = () => new Promise(resolve => resolve({
      name: `${user} logged`,
      rol: "administrador"
    }));
    promise.then(({ name, rol }) => setUser({ name, rol }));
    return promise;
  };

  /*
  useEffect(() => {
    setTimeout(() =>
      setUser({
        name: "Félix",
        rol: "administrador"
      }), 2000);
    }, [user, password]
  );
  */

  console.log("Login...");
  return [loggedUser, checkLogin];
}
