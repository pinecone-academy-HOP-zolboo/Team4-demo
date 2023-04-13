import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/home-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
