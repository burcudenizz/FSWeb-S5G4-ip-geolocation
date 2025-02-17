//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

//ADIM 3
function geoOlustur(keys) {
  const cardBox = document.createElement("div");
  cardBox.classList.add("card");

  const imgBox = document.createElement("img");
  imgBox.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2000px-Flag_of_Turkey.svg.png"
  );
  cardBox.appendChild(imgBox);

  const cardInfoBox = document.createElement("div");
  cardInfoBox.classList.add("card-info");
  cardBox.appendChild(cardInfoBox);

  const ipAdress = document.createElement("h3");
  ipAdress.classList.add("ip");
  ipAdress.textContent = keys.sorgu;
  cardInfoBox.appendChild(ipAdress);

  const ulkeData = document.createElement("p");
  ulkeData.classList.add("ulke");
  ulkeData.textContent = `${keys.ülke} (${keys.ülkeKodu}) `;
  cardInfoBox.appendChild(ulkeData);

  const enlemData = document.createElement("p");
  enlemData.textContent = `Enlem : ${keys.enlem} Boylam : ${keys.boylam} `;
  cardInfoBox.appendChild(enlemData);

  const sehirData = document.createElement("p");
  sehirData.textContent = `Şehir: ${keys.şehir}`;
  cardInfoBox.appendChild(sehirData);

  const saatData = document.createElement("p");
  saatData.textContent = `Saat dilimi: ${keys.saatdilimi}`;
  cardInfoBox.appendChild(saatData);

  const paraData = document.createElement("p");
  paraData.textContent = `Para dilimi: ${keys.parabirimi}`;
  cardInfoBox.appendChild(paraData);

  const ispData = document.createElement("p");
  ispData.textContent = `ISP: ${keys.isp}`;
  cardInfoBox.appendChild(ispData);

  return cardBox;
}
//ADIM 4
const cards = document.querySelector(".cards");
//ADIM 5
axios
  .get("https://apis.ergineer.com/ipgeoapi/95.10.1.241")
  .then((response) => {
    cards.appendChild(geoOlustur(response.data));
    console.log(response);
    //   const cardDinamik = response.data;
    //   console.log(cardDinamik);
  })
  .catch((err) => console.log("Error: " + err));
