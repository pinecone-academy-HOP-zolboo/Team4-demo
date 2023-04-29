import Logo from "../photos/dinosaur-logo.png";
import "../styles/header.css"
export const Header = () => {
  return (
    <div className="header">
      <div className="inside-header">
        <img alt="logo" src={Logo} className="piece"></img>
        <div className="piece">Types of Dinosaur</div>
        <div className="piece">Dinosaurs</div>
        <div className="piece">When did dinosaurs live?</div>
        <div className="piece">How did dinosaurs die?</div>
      </div>
    </div>
  );
};
