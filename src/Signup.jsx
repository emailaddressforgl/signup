import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const res = await axios.post("http://localhost:5002/users/add", user);
      navigate("/");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Signup">
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={() => signup()}>Sign up</button>
    </div>
  );
};

export default Signup;
