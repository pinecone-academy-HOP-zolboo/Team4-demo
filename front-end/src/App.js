import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/home-page";
import { Die } from "./pages/die";
import { Live } from "./pages/live";
import { Dinosaurs } from "./pages/Dinosaurs";
import { Signup } from "./pages/sign-up";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Dinosaurs" element={<Dinosaurs />} />
        <Route path="/die" element={<Die />} />
        <Route path="/live" element={<Live />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
