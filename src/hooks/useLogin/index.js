import { useReducer, useEffect } from "react";
import reducer, { initialState, reset, loginRequest, loginSuccess, loginError } from "./reducer";

export default function({ username, password } = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    if (!username) {
      dispatch(reset());
      return;
    }

    dispatch(loginRequest());
    const loginResponse = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (loginResponse.ok) {
      dispatch(loginSuccess(await loginResponse.json()));
    } else if (loginResponse.status === 401) {
      dispatch(loginError('The user or password you have entered is incorrect.'));
    }

  }, [username, password]);

  console.log("Login...");
  return state;
}
