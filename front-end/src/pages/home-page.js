import "../styles/home-page.css";
import Triceratops from "../photos/trice.png";
import Spinosaurus from "../photos/spino.png";
import Stegosaurus from "../photos/stego.png";
import Tarbosaurus from "../photos/tarbo.png";
import Tyrannosaurus from "../photos/tyr.png";
import Velociraptor from "../photos/vel.png";
import Button from "@mui/material/Button";
import { Header } from "../components/header.js";
import TestPh from "../photos/test1.png";
import TestPh2 from "../photos/test2.png";
import { Footer } from "../components/footer";

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
            <div className="Spinosaurus">"Spinosaurus"</div>
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
          <div className="first-part-text">
            <div className="Imagine">Төсөөлөөд үз ...</div>
            <div className="Imagine-text">
              Үлэг гүрвэлийн тухай бодоход хамгийн түрүүнд юу бодогддог вэ? Урт,
              хурц шүдтэй том, ширүүн байж болно. Эсвэл урт хүзүү сүүлтэй,
              бүдүүн хөлтэй, автобус шиг том биетэй ч байж магадгүй. Үлэг
              гүрвэлийг ямар дүр төрхтэй гэж төсөөлж байгаагаас үл хамааран тэд
              таны төсөөлж байснаас илүү том, аймшигтай, үзэсгэлэнтэй байх нь
              гарцаагүй.
            </div>
            <div className="Imagine-text">
              Өнөөдөр бид үлэг гүрвэлийн талаар мэддэг бүх зүйлийг дэлхийн өнцөг
              булан бүрээс олдсон хадгалагдсан олдворуудаас олж мэдсэн. Жил бүр
              палеонтологичид болон эрдэмтэд тэдний хэрхэн амьдарч байсан талаар
              шинэ гэрэл тусгаж чадах шинэ нээлтүүдийг хийдэг. Сүүлийн үеийн
              зарим нээлт нь илүү бүрэн гүйцэд араг яс олдсоны ачаар үлэг
              гүрвэлийн харагдах байдлыг бидний бодож байсан хэлбэрийг
              өөрчилсөн.
            </div>
            <div className="Imagine-text">
              Зарим "Тэд тод өнгөтэй байсан уу?" гэх мэт асуултууд хариултгүй
              хэвээр үлдэнэ. Зарим төрлийн зүйлүүд хэр удаан амьдарч байсан бэ?
              Тэд ямар нэгэн дуу чимээ гаргаж чадах уу, хэрэв тийм бол тэд ямар
              сонсогдож байсан бэ? Палеонтологичид болон эрдэмтэд эдгээр төрлийн
              асуултуудын талаар сайн таамаглал дэвшүүлж чаддаг бөгөөд
              технологийн дэвшил сайжрах тусам бид хэзээ нэгэн цагт үүнийг мэдэх
              болно гэж найдаж байна.
            </div>
          </div>
          <img src={TestPh} className="second-page-photo1" alt="photo1"></img>
        </div>
        <div className="second-part">
          <div className="second-part-text">
            <div className="Long">Үлэг гүрвэлүүд хэр удаан амьдарсан бэ?</div>
            <div className="Long-text">
              Үлэг гүрвэлүүд дэлхий дээр 165 сая жил амьдарч байжээ. Хүн
              төрөлхтөн ердөө 3 сая жилийн турш оршин тогтнож байгааг анзаарахад
              энэ бол маш урт хугацаа юм. Бид дэлхий дээр үлэг гүрвэлүүд шиг
              амжилттай амьдрахад хүн төрөлхтөнд маш их зам бий.
            </div>
            <div className="Long-text">
              Дэлхий үүссэн цагаасаа хойш асар их өөрчлөгдсөн. Хуурай газар,
              далай тэнгис, тэр ч байтугай уур амьсгал эрс өөрчлөгдсөн, үүнд
              амьтан, ургамал орно.
            </div>
            <div className="Long-text">
              Үлэг гүрвэлүүд дэлхий дээр удаан хугацаагаар амьдрахдаа хүрээлэн
              буй орчны өөрчлөлтөд дасан зохицож, цаг хугацааны явцад хувьсан
              өөрчлөгдөж байв. Анхны үлэг гүрвэлүүд (Юрийн галавын эхэн үе) шинж
              чанараараа аварга гүрвэлүүдтэй төстэй байсан тул хайрслаг арьстай,
              хүрээлэн буй орчиндоо ууссан байх байсан гэж олон эрдэмтэд үздэг.
              Түүнчлэн бүгд өнгөлөн далдлаагүй, зарим нь трицератоп шиг тод
              өнгөтэй толгойтой байж магадгүй гэж таамаглаж байна.
            </div>
            <div className="Long-text">
              Гэсэн хэдий ч үлэг гүрвэлүүд хувьсан өөрчлөгдөж, дэлхий
              өөрчлөгдөхийн хэрээр үлэг гүрвэлүүд биедээ өдтэй болж хувирч,
              үндсэндээ аварга том шувууд болж хувирсан гэдгийг маш их хүлээн
              зөвшөөрдөг. Энэ онол нь ихэнх хүмүүсийн үлэг гүрвэлийн тухай
              төсөөллийг, ялангуяа кинонд дүрслэгдсэн байдлыг өөрчилсөн, учир нь
              ихэнх хүмүүсийн биеийн эргэн тойронд олон тооны өд байдаг байж
              магадгүй юм.
            </div>
          </div>
          <img src={TestPh2} className="second-page-photo2" alt="photo2"></img>
        </div>
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
              <a
                href="https://mn.wikipedia.org/wiki/Richard_Owen"
                target="_blank "
                rel="noopener noreferrer"
              >
                Richard Owen
              </a>{" "}
              эдгээр амьтдыг анх удаа үлэг гүрвэл гэж тодорхойлсон байдаг.
            </div>
            <div className="answer-part2">
              Тэр үед олон том чулуужсан яс олдож байсан.{" "}
              <a
                href="https://mn.wikipedia.org/wiki/Richard_Owen"
                target="_blank"
                rel="noopener noreferrer"
              >
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

      <Footer></Footer>
    </div>
  );
};
