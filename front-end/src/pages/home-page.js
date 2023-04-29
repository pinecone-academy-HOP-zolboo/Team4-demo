import "../styles/home-page.css";
import Triceratops from "../photos/Triceratops.jpeg";
import Spinosaurus from "../photos/spinosaurus.jpeg";
import Stegosaurus from "../photos/stegosaurus.jpeg";
import Tarbosaurus from "../photos/tarbosaurus.png";
import Tyrannosaurus from "../photos/Tyrannosaurus.webp";
import Velociraptor from "../photos/Velociraptor.jpeg";
import Search from "../photos/search (1).png";
import Button from "@mui/material/Button";
import { Header } from "../components/header.js"

export const Homepage = () => {
  return (
    <div className="home-container">
      <Header></Header>

      <div className="page1">
        <div className="introduction">
          <div className="Welcome">🦕Welcome to</div>
          <div className="Welcome"> Dinosaur wikipedia</div>
          <div className="Welcome-text">
            A friendly yet encyclopedic guide to the some of the most
          </div>
          <div className="Welcome-text1">
            incredible animals to ever walk the Earth, the Dinosaurs.
          </div>
          <div className="search-input">
            <input placeholder="  Search dinosaurs" className="input"></input>
            <img alt="search" src={Search} className="search-button"></img>
          </div>
        </div>

        <div className="inside-page-intro">START EXPLORING THE DINOSAURS</div>
        <div className="inside-page1">
          <div className="example">
            <img src={Tyrannosaurus} alt="Tyra-img" className="Tyra-img"></img>
            <div className="Tyrannosaurus">"Tyrannosaurus"</div>
            <div className="Tyra-about">
              Тираннозавр махчин амьтан байсан. Цэрдийн галавын үед амьдарч,
              Хойд Америкт амьдарч байжээ. Түүний олдворыг Utah, Coahuila
              (Mexico), Montana зэрэг газраас олджээ.
            </div>
            <Button variant="outlined">Explore now</Button>
          </div>
          <div className="example">
            <img src={Tarbosaurus} alt="Tarbo-img" className="Tarbo-img"></img>
            <div className="Tarbosaurus">"Tarbosaurus bataar"</div>
            <div className="Tarbo-about">
              Тарбозавр махчин амьтан байв. Цэрдийн галавын үед амьдарч, Ази
              тивд амьдарч байжээ. Түүний олдворыг Hubei (China), Баянхонгор
              (Mongolia), Ömnögovi (Mongolia) зэрэг газраас олджээ.
            </div>
            <Button variant="outlined">Explore now</Button>
          </div>
          <div className="example">
            <img src={Spinosaurus} alt="Spino-img" className="Spino-img"></img>
            <div className="Spinosaurus">"Explore now"</div>
            <div className="Spino-about">
              Спинозавр махчин амьтан байсан. Цэрдийн галавын үед амьдарч,
              Африкт амьдарч байжээ. Түүний олдворыг Tataouine (Tunisia), Adrar
              (Algeria), Béchar (Algeria) зэрэг газраас олджээ.
            </div>
            <Button variant="outlined">Explore now</Button>
          </div>
          <div className="example">
            <img src={Triceratops} alt="Trice-img" className="Trice-img"></img>
            <div className="Triceratops">"Triceratops"</div>
            <div className="Trice-about">
              Triceratops өвсөн тэжээлтэн байсан. Цэрдийн галавын үед амьдарч,
              Хойд Америкт амьдарч байжээ. Түүний олдворуудыг Хойд Дакота,
              Вайоминг, Саскачеван (Канад) зэрэг газраас олджээ.
            </div>
            <Button variant="outlined">Explore now</Button>
          </div>
          <div className="example">
            <img src={Velociraptor} alt="Velo-img" className="Velo-img"></img>
            <div className="Velociraptor">"Velociraptor"</div>
            <div className="Velo-about">
              Velociraptor махчин амьтан байсан. Цэрдийн галавын үед амьдарч,
              Ази тивд амьдарч байжээ. Түүний олдворыг Alberta (Canada), Inner
              Mongolia (China), Batken Region (Kyrgyzstan) зэрэг газраас олджээ.
            </div>
            <Button variant="outlined">Eplore now</Button>
          </div>
          <div className="example">
            <img src={Stegosaurus} alt="Stego-img" className="Stego-img"></img>
            <div className="Stegosaurus">"Stegosaurus"</div>
            <div className="Stego-about">
              Stegosaurus бол өвсөн тэжээлтэн байсан. Тэрээр Юрийн галавын үед
              амьдарч, Европ, Хойд Америкт амьдарч байжээ. Түүний олдворыг Utah,
              Xinjiang (China), South Dakota зэрэг газраас олджээ.
            </div>
            <Button variant="outlined">Explore now</Button>
          </div>
        </div>
      </div>

      <div className="page2">
        <div className="first-part">
          <div className="Imagine">Төсөөлөөд үз...</div>
          <div className="Imagine-text">
            Үлэг гүрвэлийн тухай бодоход хамгийн түрүүнд юу бодогддог вэ? Энэ нь
            урт, хурц шүдтэй том, ширүүн байж болно. Эсвэл урт хүзүү сүүлтэй,
            бүдүүн хөлтэй, автобус шиг том биетэй ч байж магадгүй. Үлэг
            гүрвэлийг ямар дүр төрхтэй гэж төсөөлж байгаагаас үл хамааран тэд
            таны төсөөлж байснаас илүү том, аймшигтай, үзэсгэлэнтэй байх нь
            гарцаагүй.
          </div>
          <div className="Imagine-text">
            Everything we know today about dinosaurs we have learned through the
            preserved fossils discovered all over the world. Each year
            palaeontologists and scientists make new discoveries that can shed
            new light on how they lived. Some recent discoveries even change the
            way we thought the Dinosaurs looked, thanks to the discoveries of
            more complete skeletons.
          </div>
          <div className="Imagine-text">
            Some questions though will remain unanswered, like were they
            brightly coloured or camouflaged? How long did certain types of
            species live for? Could they make any sounds, and if so, what did
            they sound like? Palaeontologists and scientists can make good
            hypotheses around these types of questions, and as technology
            enhancements improve, hopefully one day we’ll know.
          </div>
        </div>
        <img className="second-page-photo1" alt="photo1"></img>
        <div className="second-part">
          <div className="Long">How long did the Dinosaurs live for?</div>
          <div className="Long-text">
            The Dinosaurs lived on the earth for about 165 million years. That
            is an extremely long time when you realise that humans have only
            existed for around 3 million years. Humanity still has a long way to
            go before we are as successful in terms of inhabiting the earth as
            the dinosaurs were.
          </div>
          <div className="Long-text">
            Since the earth was formed it has changed massively. The landmass,
            the seas and even the climate has changed dramatically, this
            includes the animals and plants.
          </div>
          <div className="Long-text">
            The dinosaurs too evolved over time, adapting to changing
            environments over the long period that they lived on Earth. Many
            scientists believe that the first Dinosaurs (Early Jurassic) may
            have resembled giant lizards in terms of their features, so they
            would have scaly leathery skin, and would have blended in to their
            surroundings. It’s also hypothesized that not all were camouflaged,
            some like the triceratops may have had brightly coloured heads.
          </div>
          <div className="Long-text">
            However, as the Dinosaurs evolved and the Earth changed, it is
            highly accepted that dinosaurs evolved to have feathers on their
            bodies, so basically turning into gigantic birds. This theory has
            changed the way most people think of dinosaurs particularly in the
            way they are portrayed in films as most may have actually had an
            array of feathers around their body.
          </div>
        </div>
        <img className="second-page-photo2" alt="photo2"></img>
      </div>

      <div className="page3">
        <div className="page3-title">
          Үлэг гүрвэлийн тухай сонирхолтой баримтууд
        </div>
        <div className="fact-1">
          <div className="question">Үлэг гүрвэл гэдэг үг ямар утгатай вэ?</div>
          <div className="answers">
            <div className="answer">
              1841 онд Английн эрдэмтэн{" "}
              <a href="https://mn.wikipedia.org/wiki/Richard_Owen">
                Richard Owen
              </a>{" "}
              эдгээр амьтдыг анх удаа үлэг гүрвэл гэж тодорхойлсон байдаг.
            </div>
            <div className="answer-part2">
              Тэр үед олон том чулуужсан яс олдож байсан.{" "}
              <a href="https://mn.wikipedia.org/wiki/Richard_Owen">
                Richard Owen
              </a>{" "}
              эдгээр яснаас үүссэн амьтад нь олон хүний таамаглаж байгаа шиг
              гүрвэлийн төрөл биш гэж таамаглаж байв. Тиймээс Ричард Оуэн эдгээр
              амьтдыг тодорхойлохын тулд "Dinosauria" хэмээх "Tarrible lizards"
              гэсэн шинэ нэр томъёо зохион бүтээжээ.
            </div>
          </div>
        </div>
        <div className="fact-2">
          <div className="question">
            Түүхийн өмнөх бүх амьтад үлэг гүрвэлүүд байгаагүй
          </div>
          <div className="answers">
            Түүхийн өмнөх бүх амьтад үлэг гүрвэл биш байсан ч бусад олон хэвлээр
            явагчид үлэг гүрвэлүүдтэй дэлхийг хуваалцдаг байв. Зарим нь далайд
            сэлж, бусад нь нисч (тэдгээрийг ПТЕРОЗАВР гэж нэрлэдэг) байв. Гэсэн
            хэдий ч эдгээр амьтдыг үлэг гүрвэлийн ангилалд оруулаагүй тул үлэг
            гүрвэлүүд сэлж, нисч чаддаггүй байсан нь чухал ялгаа юм.
          </div>
        </div>
      </div>
    </div>
  );
};
