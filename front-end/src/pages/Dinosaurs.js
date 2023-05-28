import { Header } from "../components/header";
import "../styles/Dinosaurs.css"

export const Dinosaurs = () => {
  return (
    <>
      <Header></Header>
        <div class="home-container">

          <div class="introduction">
            <div class="Welcome-die"> Dinosaurs</div>
            <div class="Welcome-text">
              A friendly yet encyclopedic guide to the some of the most
            </div>
            <div class="Welcome-text1">
              {" "}
              incredible animals to ever walk the Earth, the Dinosaurs.
            </div>
            <div class="search-input">
              <input placeholder="Search dinosaurs" class="input"></input>
              <button class="search-button">Click</button>
            </div>
          </div>
          <div class="Types">
            <div class="column">
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQypxU_irYUdUKJiMh1Y4xRJ0wFMZX-m7dGgJKsmK55x2TgzVbUxU8yW8SMuuF4VIJvIr18UnsxubFwj3E" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Тираннозавр бол махчин амьтан байсан. Цэрдийн галавын үед амьдарч, <a class="Country">Хойд Америка</a> амьдарч байжээ. Түүний олдворыг <a class="Country">Юта</a>, <a class="Country">Коахуила</a> (Мексик), <a class="Country">Монтана</a> зэрэг газраас олжээ.
                    <hr></hr>
                      <li>
                        Ж.П. Хантер ба Д.А. Пирсон. 1996. АНУ-ын Хойд Дакота мужийн баруун өмнөд хэсгийн Там Крик формацийн Лансийн (Хожуу Цэрдийн галавын) хөхтөн амьтдын анхны бүртгэл. Цэрдийн галавын судалгаа 17.
                      </li>
                      <li>Currie. 1994. .</li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class="Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Tyrannosaurus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Тираннозаврын тухай товч мэдээлэл:
                    <li>Кампанийн эрин үеэс 66 сая жилийн өмнө хүртэл оршин байсан</li>
                    <li>Хуурай газрын амьдрах орчинд амьдарч байсан</li>
                    <li>Махчин амьтан байсан</li>
                    <li>Өндөг тавих замаар үрждэг</li>
                    <li>Биеийн жин нь ойролцоогоор 7224 кг байв</li>
                    <li>Палеонтологичид 81 өөр сорьц олжээ.</li>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToNk31lr7Q7P2eyhPXnKT8y4GIdwNfp2ghA&usqp=CAU" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Velociraptor бол махчин амьтан байв. Цэрдийн галавын үед амьдарч, Ази тивд амьдарч байжээ. Түүний олдворыг <a class="Country">Альберта</a> (Канад), <a class="Country">Өвөрмонгол</a> (Хятад), <a class="Country">Баткен муж</a>  (Киргизстан) зэрэг газраас олжээ.
                    <hr></hr>
                      <li>Цэрдийн галавын дээд эринээс 66 сая жилийн өмнө оршин байсан</li>
                      <li>Хуурай газрын амьдрах орчинд амьдарч байсан</li>
                      <li>Махчин амьтан байсан</li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class="Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Velociraptor/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Velociraptor бол махчин тероподын төрөл юм. Энэ нь урт сүүлтэй ч гэсэн орчин үеийн цацагт хяруултай харьцуулж болохуйц хэмжээтэй байв. Өнөөгийн Монгол гэгддэг нутгаас олдсон.
                    <p>Velociraptor нь хурц шүдтэй, өвөрмөц хөлтэй, нэг том дэгээтэй сарвуутай, урт сүүлтэй байв. Velociraptors нь өдтэй байсан нь тэдэнд одоогийн цацагт хяруулын дүр төрхийг олгосон нь одоо мэдэгдэж байна. Гэсэн хэдий ч өргөн цар хүрээтэй Velociraptors-ийн мөлхөгч амьтдын дүрслэл нь түгээмэл соёлд түгээмэл байдаг тул түгээмэл хэвээр байна.</p>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://cdn.shopify.com/s/files/1/0266/5817/7121/articles/2_6ae8af97-4503-4bec-92d5-0183a39d085f_1200x1200.png?v=1642671482" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Стегозавр бол өвсөн тэжээлтэн байсан. Тэрээр Юрийн галавын үед амьдарч, <a class="Country">Европ</a> , <a class="Country">Хойд Америкт</a>  амьдарч байжээ. Түүний олдворыг <a class="Country">Юта</a> , <a class="Country">Шинжаан</a>  (Хятад), Өмнөд <a class="Country">Дакота</a> зэрэг газраас олжээ.
                    <hr></hr>
                      <li>Дээд Юрийн галаваас Цэрдийн галавын доод эрин хүртэл оршин байсан</li>
                      <li>Хуурай газрын амьдрах орчинд амьдарч байсан</li>
                      <li>Өвсөн тэжээлтэн байсан</li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class="Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Stegosaurus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Бүх алдарт үлэг гүрвэлүүдээс Стэгозаурус нь толгойноос сүүлний үзүүр хүртэл гүйсэн хоёр эгнээ хуягласан хавтангаараа алдартай.Тэр нь нарийхан, нарийссан толгойтой байсан ба урд хөл нь хойд хөлөөсөө богино байв.
                    <p>Стегозаврын нурууг бүрхсэн ялтсууд нь тэдний үйл ажиллагааны талаар олон маргаан үүсгэсэн. Эдгээрийг анх амьтны нурууны хуягт хамгаалалт гэж үздэг байсан ч саяхан гоо зүйгээс эхлээд дулааны зохицуулалт гэж өөр өөр онолуудыг санал болгосон.</p>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://static.independent.co.uk/2021/05/12/16/newFile-8.jpg" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Triceratops өвсөн тэжээлтэн байсан. Цэрдийн галавын үед амьдарч, <a class="Country">Хойд Америкт</a> амьдарч байжээ. Түүний олдворуудыг <a class="Country">Хойд Дакота</a>, <a class="Country">Вайоминг</a> , <a class="Country">Саскачеван</a> (Канад) зэрэг газраас олжээ.
                    <hr></hr>
                      <li>83.5 сая жилийн өмнөөс Маастрихтийн үе хүртэл оршин тогтнож байсан</li>
                      <li>Ууланд амьдардаг</li>
                      <li>Өвсөн тэжээлтэн байсан</li>
                      <li>Өндөг тавих замаар үрждэг</li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Triceratops/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Triceratops бол бүх цаг үеийн хамгийн алдартай үлэг гүрвэлүүдийн нэг юм. Цэрдийн галавын сүүл үед идэвхтэй байсан түүний нэр нь хүзүү, мөрийг нь хамгаалдаг хуягт сүлдний яг доор байрлах толгой дээрх гурван өөр эвэрнээс гаралтай. Энэ нь өвсөн тэжээлтэн байсан. Энэ нь амьд олз агнахаас илүүтэйгээр хүчирхэг зэвсгээ хамгаалалтад ашигласан байна.
                    <p>Зарим судлаачид Triceratops-ийн эвэр нь заавал зэвсэг биш, харин өрсөлдөгчөө айлгах зорилгоор байдаг гэж үздэг. Торозаврын төрөл нь трицератопын ахмад настны хэлбэр байж магадгүй гэж үздэг.</p>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://thumbs.dreamstime.com/b/%D0%B1%D1%80%D0%B0%D1%85%D0%B8%D0%BE%D0%B7%D0%B0%D0%B2%D1%80-%D0%B2-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA%D0%B5-%D0%B1%D1%8B%D0%BB-%D0%B4%D0%B8%D0%BD%D0%BE%D0%B7%D0%B0%D0%B2%D1%80%D0%BE%D0%BC-sauropod-%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%B8%D0%B7-%D1%81%D0%B0%D0%BC%D0%BE%D0%B9-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D0%B8-%D1%81%D0%B0%D0%BC%D1%8B%D0%B9-150531677.jpg" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Брахиозавр бол өвсөн тэжээлтэн байсан. Энэ нь Юрийн галав / Цэрдийн галав үед амьдарч,<a class="Country">Хойд Америкт</a> амьдарч байжээ. Түүний чулуужсан яс <a class="Country">Юта</a> , <a class="Country">Колорадо</a>,<a class="Country">Линди</a>  (Танзани) зэрэг газраас олдсон.
                    <hr></hr>
                      <li>161.2 сая жилийн өмнөхөөс 145 сая жилийн өмнө оршин байсан</li>
                      <li>Хавцалд амьдардаг байсан</li>
                      <li>Өвсөн тэжээлтэн байсан</li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Brachiosaurus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Брахиозавр бол харьцангуй богино сүүлтэй, босоо байрлалтай өндөр сауропод юм. Түүний урд хөл нь хойд хөлөөсөө урт бөгөөд толгой нь өвөрмөц хамрын нүхтэй бөгөөд үүнийг дүрсэлсэн олон зураг дээр тод харагддаг.
                    <p>Брахиозаврын нь бусад олон сауроподуудаас ялгаатай нь хүзүү дээшээ чиглэсэн байдаг. Олон судлаачид үүнийг анааштай адил аргаар модны орой, ургамлын дээд мөчрүүдэд хүрч чадсан гэж үздэг.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://media.istockphoto.com/id/903003360/photo/brachiosaurus-altithorax-from-the-late-jurassic.jpg?s=612x612&w=0&k=20&c=LvPZ6TeFjpg__Hb5Avnc0u-18Mki5vBXfS0PGfjFyPM=" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Диплодокус нь өвсөн тэжээлтэн байсан. Тэрээр Юрийн галавын үед амьдарч, <a class="Country">Хойд Америкт</a> амьдарч байжээ. Түүний чулуужсан яс <a class="Country">Юта</a>, <a class="Country">Нью Мексико</a>, <a class="Country">Өмнөд Дакота</a> зэрэг газраас олдсон.
                    <hr></hr>
                      <li>
                        H. F. Osborn. 1899. Диплодокусын араг яс. Америкийн байгалийн түүхийн музейн дурсамж 1(5):189-214
                      </li>
                      <li>
                        К.Капентер, С.Майлз нар. 1998. Юрийн галавын анкилозаврын гавлын яс (Үлэг гүрвэл). Байгаль 393:782-783
                      </li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Diplodocus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    <li>Дээд Юрийн галаваас Титон эрин хүртэл оршин тогтнож байсан</li>
                    <li>Хурсанд амьдардаг байсан</li>
                    <li>Өвсөн тэжээлтэн байсан</li>
                    <li>Өндөг тавих замаар үрждэг</li>
                    <li>Биеийн жин нь ойролцоогоор 10560 кг байв</li>
                    <li>Чулуужсан гуяны яс нь ойролцоогоор 1506 мм урт, өргөн юм</li>
                    <li>Палеонтологичид 60 өөр сорьц олжээ</li>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://dinohistory.ru/wp-content/uploads/2017/11/38.jpg" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Аллозавр бол махчин амьтан байв. Тэрээр Юрийн галавын үед амьдарч, <a class="Country">Африк</a>, <a class="Country">Европ</a>, <a class="Country">Хойд Америкт</a> амьдарч байжээ. Түүний олдворыг <a class="Country">Юта</a>, <a class="Country">Хойд Рейн-Вестфали</a> (Герман), <a class="Country">Небраска</a> зэрэг газраас олжээ.
                    <hr></hr>
                      <li>163.5 сая жилийн тэртээгээс Кониагийн үе хүртэл оршин тогтнож байсан</li>
                      <li>Хуурай газрын амьдрах орчинд амьдарч байсан</li>
                      <li>Махчин амьтан байсан
                      </li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Allosaurus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Тиранозавр батаарын дараа орох хоёр дахь хамгийн алдартай карнозавр болох Аллозавр бол Юрийн галавын төгсгөлд амьдарч байсан хүчирхэг махчин теропод байв.
                    <p>Аллозаврыг Тиранозавр батаараас урт урд хөлтэй, хоёр биш гурван хуруутай гэж урлагт ихэвчлэн дүрсэлсэн байдаг. Энэ нь арай бага хэмжээтэй, хамгийн том сорьц нь 32 фут урттай байдаг.</p>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT-5do4N9Svrpvfrk7qx-xTUn3vyL97bdPqnEaowoTVcVrFVg3TeC-ZT5SfQeX5WTZDDf8m4xIqDZRRlYU" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Анкилозавр нь өвсөн тэжээлтэн байсан. Цэрдийн галавын сүүл үед амьдарч, <a class="Country">Хойд Америкт</a> амьдарч байжээ. Түүний чулуужсан ясыг <a class="Country">Монтана</a>, <a class="Country">Колорадо</a>, <a class="Country">Альберта</a> (Канад) зэрэг газраас олжээ.
                    <hr></hr>
                      <li>Кампанийн эрин үеэс 66 сая жилийн өмнө оршин байсан</li>
                      <li>Хуурай газрын амьдрах орчинд амьдарч байсан</li>
                      <li>Өвсөн тэжээлтэн байсан</li>
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Ankylosaurus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Анкилозавр бол хуяг дуулгатай, савлагаа шиг сүүлээрээ бусдаас ялгардаг дөрвөн хөлт үлэг гүрвэл юм. Элэг идэштэн бөгөөд энэ нь Цэрдийн галавын сүүл үед идэвхтэй байсан бөгөөд түүний гэр бүлийн хамгийн алдартай жишээ болох Ankylosauridae юм.
                    <p>Анкилозаврын уран сайхны дүрслэл нь ихэвчлэн хуягласан хавтангийн элементүүдийг хэтрүүлэн харуулах бөгөөд ихэвчлэн Ankylosaurus-ийн гэр бүлийн бусад гишүүдийг илүү нарийвчлалтай тусгасан өргөс болон бусад шинж чанаруудыг нэмж өгдөг.</p>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://static.wikia.nocookie.net/jurassicworld-evolution/images/2/2a/Pteranodon_database_image_from_Evolution_2.png/revision/latest?cb=20211209152805" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Птеранодон бол нисдэг мөлхөгчдийн төрөл болох птерозавр юм. Энэ нь үлэг гүрвэл биш байсан ч тэр үед амьдарч байсан. Птеранодон нь хожуу Цэрдийн галавын үед амьдарч, <a class="Country">Хойд Америкт</a> амьдарч байжээ. Анхны Птеранодон чулуужсан ясыг 1876 онд олжээ.
                    <hr></hr>
                      О.С.Марш. 1876. Птерозаврийн шинэ дэд бүлгийн тухай мэдэгдэл. Америкийн шинжлэх ухааны сэтгүүл 11:507-509
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Pteranodon/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Птеранодоны тухай товч мэдээлэл:
                    <li>89.8 сая жилийн өмнөхөөс 70.6 сая жилийн өмнө оршин байсан</li>
                    <li>Далайн орчинд амьдарч байсан</li>
                    <li>Загасны идэштэн байсан</li>
                    <li>Нисч чадна</li>
                    <li>Биеийн жин нь ойролцоогоор 36680 гр байсан</li>
                    <li>Палеонтологичид 39 өөр сорьц олжээ</li>
                  </div>
                </div>
              </div>
              <div class="dino">
                <div class="insidecolumns w-25">
                  <div class="Image h-25">
                    <img src="https://a-z-animals.com/media/2022/06/dinosaur-brontosaurus-and-human-size-comparison-picture-id470650666.jpg" class="DinoImages"></img>
                  </div>
                  <div class="Description">
                    Бронтозавр бол өвсөн тэжээлтэн байсан. Тэрээр Юрийн галавын үед амьдарч, Хойд Америкт амьдарч байжээ. Түүний олдворыг Вайоминг, Колорадо, Вайоминг зэрэг газраас олжээ.
                    <hr></hr>
                      H. F. Osborn. 1904. Баруун зүгийн чулуужсан гайхамшиг. Ясны бүхээгний карьерын үлэг гүрвэлүүд нь устаж үгүй ​​болсон амьтдын хамгийн том "олдвор"-ын анхны тайлбар юм. Зууны сэтгүүл 68:680-694
                  </div>
                </div>
                <div class="insidecolumns w-75">
                  <div class=" Location h-50">
                    <img src="https://dinosaurpictures.org/api/dinosaur/Brontosaurus/map" class="DinoImages"></img>
                  </div>
                  <div class="Namenothers h-50">
                    Бронтозаврын тухай товч мэдээлэл:
                    <li>Киммериджийн үеэс Титоны эрин хүртэл оршин тогтнож байсан</li>
                    <li>Хуурай газрын амьдрах орчинд амьдарч байсан</li>
                    <li>Өвсөн тэжээлтэн байсан</li>
                    <li>Өндөг тавих замаар үржүүлдэг</li>
                    <li>Палеонтологичид 21 өөр сорьц олжээ</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
