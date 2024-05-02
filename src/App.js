import { useState } from "react";
import "./App.css";
import StarsRating from "./StarsRating";

function App() {
  const [userRating, setUserRating] = useState("");
  return (
    <div className="app">
      <StarsRating maxRating={10} size={24} onSetRating={setUserRating} />
    </div>
  );
}

export default App;
