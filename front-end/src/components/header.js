import Logo from "../photos/dinosaur-logo.png";
import "../styles/header.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dinoJump = (event) => {
    event.preventDefault();
    navigate("/Dinosaurs");
  };
  const homeJump = (event) => {
    event.preventDefault();
    navigate("/");
    window.location.reload();
  };
  const dieJump = (event) => {
    event.preventDefault();
    navigate("/die");
  };
  const liveJump = (event) => {
    event.preventDefault();
    navigate("/live");
  };

  return (
    <div
      className={`header ${
        location.pathname === "/die"
          ? "die-page"
          : location.pathname === "/live"
          ? "live-page"
          : location.pathname === "/Dinosaurs"
          ? "dino-page"
          : ""
      }`}
    >
      <div className="inside-header">
        <img alt="logo" src={Logo} className="piece" onClick={homeJump}></img>
        <div onClick={dinoJump} className="piece">
          Dinosaurs
        </div>
        <div onClick={liveJump} className="piece">
          When did dinosaurs live?
        </div>
        <div onClick={dieJump} className="piece">
          How did dinosaurs die?
        </div>
      </div>
    </div>
  );
};

// const [shrink, setShrink] = useState(false);

// useEffect(() => {
//   function handleScroll() {
//     if (window.scrollY > 0) {
//       setShrink(true);
//     } else {
//       setShrink(false);
//     }
//   }
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// const handleClick = () => {
//   window.location.reload();
// };
