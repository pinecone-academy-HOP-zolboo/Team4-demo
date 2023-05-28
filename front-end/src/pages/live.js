import { Header } from "../components/header";
import "../styles/when-live.css";
import Jurassic from "../photos/Jurassic.png";
import Triassic from "../photos/triassic.png";
import Cretaceous from "../photos/cretaceous.png";
import { Footer } from "../components/footer";

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

      </div>
      <div className="bottom">
        <div className="titlelive">
          <div className="titletext1">
            Үлэг гүрвэлүүд нь Мэзозойк эрин үед амьдарч байсан ба энэ эрин үе нь
            252 сая жилийн өмнөөс 66 сая жилийн өмнөх хүртэл үргэлжилсэн
          </div>
        </div>
        <div className="titlelive">
          <div className="titletext2">
            Мэзозойк эрин үе нь дотроо 3 эрин үед хуваагддаг ба үүнийг Триассик,
            Журрасик, Кретасеоус гэж 3 ангилдаг. Энэ үед дэлхийн тивүүд
            одоогийхоос өөр бүтэцтэй байсан ба цаг агаар ба орчин нь бас маш
            ялгаатай байсан. Үлэг гүрвэлүүд дэлхийд 165 жилийн турш устах
            хүртлээ амьдарч байсан.
          </div>
        </div>
        <div className="infotime">
          <div className="timeperiod1">
            Триассик эрин үе (252-201 сая жилийн өмнө): Энэ нь Мэзозойк үеийн
            хамгийн эхний эрин үе байсан ба энэ нь том тивүүдийн салалт , шинэ
            газар нутгуудын үүслээр их байсан. Триассик эрин үеийн цаг агаар нь
            халуун, хуурай байсан, бас маш олон үлэг гүрвэлүүд энэ үед хувьссан
            байна. Триассик эрин үед үлэг гүрвэл ээс бусад амьдарч байсан амьтад
            бол матар, яст мэлхий, эхэн үеийн хөхтөн амьтад байсан юм.~
          </div>
          <img
            src={Triassic}
            alt="firsttimeperiod"
            className="timeperiod1img"
          ></img>
          <div className="timeperiod2">
            Журрасик эрин үе (201-145 сая жилийн өмнө): Энэ үрэн үе нь урт
            хүзүүт сауроподууд буюу Бракиозаурус ба Диплодокус, ганц урт
            хүзүүтээс зогсохгүй Аллозаурус, Стэгозаурус шиг махчин амьтад нь
            энэхүү эрин үеийн онцлог байсан юм. Журрасик эрин үеийн цаг уур
            далайн төвшин нь харьцангүй тогтвортой байсан ба далай нь олон янзын
            усны амьтадын гэр байсан юм.
          </div>
          <img
            src={Jurassic}
            alt="secondtimeperiod"
            className="timeperiod2img"
          ></img>
          <div className="timeperiod3">
            Кретасеоус эрин үе (145-66 сая жилийн өмнө): Энэ эрин үе нь Мэзозойк
            эриний сүүлийн эрин байсан ба хамгийн олон төрлийн үлэг гүрвэл
            байснаараа алдартай жишээ нь Т-Рекс , Трисратопс. Кретасеоус ийн цаг
            агаар нь ерөнхийдөө дулаан чийглэг байсан ба үүнтэй холбогдуулна
            цэцэгс хуурай газрыг бүрхэж эхэлсэн. Кретасеоус үеийн төгсгөл нь хүн
            бүхний мэдэх устал ба энэ усталаар нисдэггүй үлэг гүрвэл ба өшөө
            олон төрлийн амьтад газар , ус хамаарахгүй устаж үгүй болсон.
          </div>
          <img
            src={Cretaceous}
            alt="thirdtimeperiod"
            className="timeperiod3img"
          ></img>
        </div>

      </div>        <Footer></Footer>
    </>
  );
};
