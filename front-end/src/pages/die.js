import { Header } from "../components/header";
import "../styles/die.css";
import Stegosaurus2 from "../photos/stegosaurus2.png";
import Trex2 from "../photos/trex2.png";
import Triceratops2 from "../photos/Triceraptors2.jpeg";
import spinosaurus2 from "../photos/spinosaurus2.jpeg";
import apatosaurus2 from "../photos/apatosaurus2.jpeg";
import velociraptor2 from "../photos/velociraptor2.png";
import Search from "../photos/search (1).png";

export const Die = () => {
  return (
    <>
      <Header></Header>
      <div className="introductiondie">
        <div className="Welcome-die"> When did Dinosaurs Die</div>
        <div className="Welcome-textdie">
          A friendly yet encyclopedic guide to the some of the most
        </div>
        <div className="Welcome-text1die">
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
      <div className="Titledie">
        <div className="titletextdie">
          Ойролцоогоор 252 сая жилийн өмнөөс 62 сая жилийн өмнөх хүртэл мэзозойк
          эрин үед маш олон төрлийн үлэг гүрвэлүүд амьдарж байжээ. Энэ эрин үед
          1000 орчим төрлийн үлэг гүрвэлүүд байсан ч бүгд нэгэн цаг хугацаанд
          оршиж байгаагүй юм.
        </div>
        <div className="titletextdie">
          Үлэг гүрвэлүүд нь 2 том бүлэгт хуваагддаг : Саурискианс ба
          Орнитискичид
          <div>
            Саурискианс бол махан тэжээлтэн үлэг гүрвэлүүд жишээ нь Т Рекс ,
            Вэлисирапторс ба урт хүзүүт үлэг гүрвэлүүд Апатозаурус ба
            Бракиозаурус гэх мэт.
          </div>
          <div>
            Орнитискичид нь эвэртэй ба далбаатай үлэг гүрвэлүүд юм жишээ нь
            Трисратоп ба хуягласан үлэн гүрвэлүүд Стэгозаурус , Анкилозаурус
          </div>
        </div>
      </div>
      <div className="inside-pagedie">
        <div className="trexdie">
          <div className="exampledie">
            <div className="dietitletext">Тринозаурус</div>
            <img src={Trex2} alt="trex" className="trex2-img"></img>
          </div>
          <div className="describtion1">
            <div>Хэмжээ: Урт 13.5M Өндөр 5.5M</div>
            <div>Жин: 3175кг аас 6350кг</div>
            <div>Идэш: Махчин амьтад, Том амьтад (хүмүүсийг оруулаад)</div>
            <div>
              Хэрцгий Тринозаурус баатар... 65 сая жилийн өмнө манай дэлхийд ер
              бусын зүйл тохиолдсоныг бид чулуун олдворуудаас харж болно.
              Нийтээрэй олноор устах газар ус хамаарахгүй , Том , жижиг
              хамаарахгүй тохиолдсон энэ явдалд Т-Рекс нь тэр үед устаж үгүй
              болсон алдартай үлэг гүрвэлүүдийн нэг.
            </div>
          </div>
        </div>
        <div className="apatodie">
          <div className="exampledie2">
            <div className="dietitletext">Apatosaurus</div>
            <img src={apatosaurus2} alt="apato" className="apato2-img"></img>
          </div>
          <div className="describtion2">
            <div>Хэмжээ: Урт 27M Өндөр 6M</div>
            <div>Жин: 9071кг аас 19958 кг</div>
            <div>Идэш: Өвсөн тэжээлтэн, Өндөр модны навчис</div>
            <div>
              Апатозаурус нь Журрасик эрин үеийн сүүлд амьдарч байсан
              ойролцоогоор 157 оос 146 жилийн өмнө. Журрасик эрин үеийн сүүлд
              үлэг гүрвэлүүд устаж үгүй болж эхэлсэн ба үүнд Стэгозаурус ба асар
              том сауропод үлэг гүрвэлүүд устсан. Үүгээрч дуусахгүй Аммоноид,
              далайн хэвлээр явагчид, хос хавхлагт амьтдын олон төрөл зүйл мөн
              адил.
            </div>
          </div>
        </div>
        <div className="spinodie">
          <div className="exampledie3">
            <div className="dietitletext">Спиносаурус</div>
            <img src={spinosaurus2} alt="spino2" className="spino2-img"></img>
          </div>
          <div className="describtion3">
            <div>Хэмжээ: Урт 14M-18M Өндөр 5.4M</div>
            <div>Жин: 12000кг аас 20000кг</div>
            <div>Идэш: Махан тэжээлтэн, том амьтад (хүмүүс орно)</div>
            <div>
              Энэ үлэмж үлэг гүрвэлүүд нь хойд Африкад ялан гуяа одоогийн Эгипет
              , Мороко улсын газруудад. Спиносаурус ууд нь Кретасеоус эрин үед
              112 оос - 97 сая жилийн өмнө амьдарч байсан.
            </div>
          </div>
        </div>
        <div className="tricedie">
          <div className="exampledie4">
            <div className="dietitletext">Трисратопс</div>
            <img
              src={Triceratops2}
              alt="triceratops2"
              className="Trice2-img"
            ></img>
          </div>
          <div className="describtion4">
            <div>Хэмжээ: Урт 8.9M Өндөр 3.6M</div>
            <div>Жин: 5443кг аас 9979кг</div>
            <div>Идэш: Өвсөн тэжээлтэн, Модны навч, бусад хатуу ургамалууд</div>
            <div>
              66 сая жилийн өмнө энэ үлэг гүрвэл нь хамгийн сүүлд мэдэгдэж
              байгаа нисдэггүй үлэг гүрвэлийн төрөл байсан ба
              Кретасеоус-Палеогене үсталтын үед 66 сая жилийн өмнө устсан.
            </div>
          </div>
        </div>
        <div className="velodie">
          <div className="exampledie5">
            <div className="dietitletext">Вэлисирапторс</div>
            <img src={velociraptor2} alt="velo2" className="velo2-img"></img>
          </div>
          <div className="describtion5">
            <div>Хэмжээ: Урт 3.9M Өндөр 1.7M</div>
            <div>Жин: 226кг</div>
            <div>
              Идэш: Махан тэжээлтэн, Жижиг хөхтөн амьтад, Ганцаараа явж буй үлэг
              гүрвэл. Том үлэг гүрвэл бол сүргээрээ
            </div>
            <div>
              Вэлисирапторс нь Кретасеоус эрин үеийн сүүл үед амьдарч байсан
              буюу 85.8 аас 70.6 сая жилийн өмнө. Эрдэмтэд энэ үлэг гүрвэлийг 66
              сая жилийн өмнө бусад үлэг гүрвэлүүдтэй зэрэг устаж үгүй болсон
              гэж итгэдэг.
            </div>
          </div>
        </div>
        <div className="stegodie">
          <div className="exampledie6">
            <div className="dietitletext">Стэгозаурус</div>
            <img src={Stegosaurus2} alt="stego" className="Stego2-img"></img>
          </div>
          <div className="describtion6">
            <div>Хэмжээ: Урт 10.1M Өндөр 5M</div>
            <div>Жин: 1587кг аас 3492кг</div>
            <div>Идэш: Өвсөн тэжээлтэн, Нам доор байх мод, бутны навчис</div>
            <div>
              Стэгозаурус, Журрасик эрин үеийн сүүл үед буюу 150 сая жилийн өмнө
              амьдарч байсан . Стэгозаурус нь Т-Рекс дэлхийд үүсэхээс 66 сая
              жилийн өмнө устсан
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
