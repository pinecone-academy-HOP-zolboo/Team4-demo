import Logo from "../photos/dinosaur-logo.png";
import "../styles/header.css"
// import { useState, useEffect } from 'react';
export const Header = () => {


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



  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="inside-header">
        <img alt="logo" src={Logo} className="piece" onClick={handleClick}></img>
        <div className="piece">Types of Dinosaur</div>
        <div className="piece">Dinosaurs</div>
        <div className="piece">When did dinosaurs live?</div>
        <div className="piece">How did dinosaurs die?</div>
      </div>
    </div>
  );
}