import Logo from "../photos/dinosaur-logo.png";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

// import { useState, useEffect } from 'react';
export const Header = () => {
  const navigate = useNavigate();

  const dinoJump = async (event) => {
    event.preventDefault();
    navigate("/Dinosaurs");
  };
  const homeJump = async (event) => {
    event.preventDefault();
    navigate("/");
    window.location.reload();
  };
  const dieJump = async (event) => {
    event.preventDefault();
    navigate("/die");
  };
  const liveJump = async (event) => {
    event.preventDefault();
    navigate("/live");
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

  return (
    <div className="header">
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
