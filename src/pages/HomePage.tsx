import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h1> Riddles Game</h1>
      <nav>
        <Link to={"http://localhost:5173/GamePage"}>GamePage</Link>
        <br></br>
        <Link to={"http://localhost:5173/LoginPage"}>LoginPage</Link>
        <br></br>
        <Link to={"http://localhost:5173/RegisterPage"}>RegisterPage</Link>
      </nav>
    </div>
  );
}
