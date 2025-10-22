import React, { useState } from "react";
import { login, register } from "../features/Authslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth: React.FC = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [signin, setsignin] = useState(true);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const authsubmit = async (event) => {
    event.preventDefault();

    try {
      if (signin) {
        await dispatch(login({ username, password })).unwrap();
      } else {
        await dispatch(register({ username, password })).unwrap();

     
      }
         nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1> {signin ? "signin" : "signup"}</h1>

      <form onSubmit={authsubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <button type="submit"> {signin ? "signin" : "signup"}</button>
      </form>

      <button
        onClick={() => {
          setsignin(!signin);
        }}
      >
        {" "}
        {signin ? "siwtch to signup" : "switch to signin"}{" "}
      </button>
    </>
  );
};

export default Auth;
