import { useState } from "react";
import "../styles/SignUp.css";
import { createUsser } from "../api/SignUpServer";

export default function SignUpComps() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function SignUp() {
    if (!userName || !password) {
      setMessage("Please fill in all details");
      return;
    }
    try {
      const res = await createUsser(userName, password);
      console.log(res)
      setMessage(res.msg || `Welcome ${res[0].name}, you have successfully connected.`);
    } catch (err: any) {
      setMessage(
        err.message ||
          "Sorry, there is a problem with the server, please try later."
      );
    }
  }

  return (
    <div className="cardSignUp_LogIn">
      <h2>טופס הרשמה</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          SignUp();
        }}
      >
        <label htmlFor="userName">Enter your name</label>
        <br></br>
        <input
          type="text"
          id="userNaem"
          placeholder="Full Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Choose a password</label>
        <br></br>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
