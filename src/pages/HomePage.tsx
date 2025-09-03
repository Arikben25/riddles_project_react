import { useNavigate } from "react-router-dom";
import "../styles/Home.css"

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="buttonHome">
        <button onClick={() => navigate("/LoginPage")}>Log In</button>
        <button onClick={() => navigate("/RegisterPage")}>Sign Up</button>
      </div>

      <div id="titleHome">
        <h1> Riddles Game</h1>
        <button id="StartGame" onClick={() => navigate("/GamePage")}>
          Start Game
        </button>
      </div>
    </div>
  );
}
