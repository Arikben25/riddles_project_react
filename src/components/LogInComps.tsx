import { useState } from "react";
import "../styles/SignUp.css";
import logInUser from "../api/LogInServer";

export default function LogInComps() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function logIn() {
    if (!userName || !password) {
      return setMessage("Please fill in all details");
    }
    try {
      const res = await logInUser(userName, password);
      if (!res.success) {
        setMessage(res.error || "Unknown error, please try again.");
        return;
      } else if (res.status == 200 && res.data.UserType == "manager") {
        setMessage(res.data.msg || "welcome manager");
        // await adminMenu(userName, 'manager')
      } else if (res.status == 200 && res.data.UserType == "normal user") {
        setMessage(res.data.msg||`Welcome user`);
        // await userMenu(userName, "normal user")
      }
      // setMessage(`Welcome ${userName}, good to see you again. 🤗`)
    } catch (err) {
      console.error("error is: ", err);
      setMessage("Sorry, there is a problem with the server. Try again later.");
    }
  }
  return (
    <div className="cardSignUp_LogIn">
      <h2>טופס התחברות</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logIn();
        }}
      >
        <label htmlFor="userName">Enter your name</label>
        <br></br>
        <input
          type="text"
          id="userName"
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






  // async function logIn() {
  //   if (!userName || !password) {
  //     return setMessage("Please fill in all details");
  //   }
  //   try {
  //     const res = await logInUser(userName, password);
  //     if (res.success==false) {
  //       setMessage("Unknown error, please try again.");
  //       return;
  //     } else if (res.data.status == 200 && res.data.UserType == "manager") {
  //       setMessage(res.data.msg);
  //       // await adminMenu(userName, 'manager')
  //     } else if (res.data.status == 200 && res.data.UserType == "normal user") {
  //       setMessage(res.data.msg);
  //       // await userMenu(userName, "normal user")
  //     }

  //     // setMessage(`Welcome ${userName}, good to see you again. 🤗`)
  //   } catch (err) {
  //     console.error("error is: ", err);
  //     setMessage("Sorry, there is a problem with the server. Try again later.");
  //   }
  // }
