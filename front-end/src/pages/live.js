import { Header } from "../components/header";
import "../styles/when-live.css";
import Jurassic from "../photos/Jurassic.png";
import Triassic from "../photos/triassic.png";
import Cretaceous from "../photos/cretaceous.png";
import Search from "../photos/search (1).png";

export const Live = () => {
  return (
    <>
      <Header></Header>
      <div className="introductionlive">
        <div className="Welcome">When dinosaurs were alive</div>
        <div className="Welcome-text">
          A friendly yet encyclopedic guide to the some of the most
        </div>
        <div className="Welcome-text1">
          {" "}
          incredible animals to ever walk the Earth, the Dinosaurs.
        </div>
        <div className="search-input">
          <div className="search-bar">
            <input placeholder="Search dinosaurs"></input>
            <div className="search-button">
              <img alt="search" src={Search} className="search-img"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="titlelive">
          <div className="titletext1">
            Dinosaurs lived during a period of time called the Mesozoic Era,
            which began about 252 million years ago and ended around 66 million
            years ago.
          </div>
        </div>
        <div className="titlelive">
          <div className="titletext2">
            The Mesozoic Era is divided into three time periods: the Triassic,
            the Jurassic, and the Cretaceous. During this time, the Earth's
            continents were arranged differently than they are today, and the
            climate and environment were very different as well. Dinosaurs
            roamed the Earth for about 165 million years before becoming extinct
          </div>
        </div>
        <div className="infotime">
          <div className="timeperiod1">
            The Triassic Period (252-201 million years ago): This was the first
            period of the Mesozoic Era, and it was characterized by the breakup
            of the supercontinent Pangaea and the emergence of new landmasses.
            The climate during the Triassic was generally hot and dry, and many
            of the early dinosaur species evolved during this time. Other
            notable creatures from the Triassic include crocodiles, turtles, and
            early mammals.
          </div>
          <img
            src={Triassic}
            alt="firsttimeperiod"
            className="timeperiod1img"
          ></img>
          <div className="timeperiod2">
            The Jurassic Period (201-145 million years ago): This period is
            perhaps best known for its giant herbivorous dinosaurs such as the
            long-necked sauropods like Brachiosaurus and Diplodocus, as well as
            predators like Allosaurus and Stegosaurus. The Jurassic was a time
            of relatively stable climate and sea levels, and the oceans were
            home to diverse marine life such as ichthyosaurs and plesiosaurs.
          </div>
          <img
            src={Jurassic}
            alt="secondtimeperiod"
            className="timeperiod2img"
          ></img>
          <div className="timeperiod3">
            The Cretaceous Period (145-66 million years ago): This was the final
            period of the Mesozoic Era, and it is best known for the last and
            most diverse group of dinosaurs, including the iconic Tyrannosaurus
            rex and Triceratops. The climate during the Cretaceous was generally
            warm and humid, and flowering plants began to diversify and dominate
            the landscape. The end of the Cretaceous is marked by a mass
            extinction event, which wiped out the non-avian dinosaurs and many
            other species.
          </div>
          <img
            src={Cretaceous}
            alt="thirdtimeperiod"
            className="timeperiod3img"
          ></img>
        </div>
      </div>
    </>
  );
};
