import { useState, useEffect } from "react";

export default function({ username, password } = {}) {
  const [loggedUser, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (!username) {
      setError(null);
      setUser({});
      return;
    }

    setLoading(true);
    const loginResponse = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    setLoading(false);

    if (loginResponse.ok) {
      const { name, rol } = await loginResponse.json();
      setUser({ name, rol });
      setError(null);
    } else if (loginResponse.status === 401) {
      setError('The user or password you have entered is incorrect.');
    }

  }, [username, password]);

  console.log("Login...");
  return {
    user: loggedUser,
    error,
    loading
  };
}
