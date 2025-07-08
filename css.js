const konular = [
  "css-giris",
  "baslik-etiketleri",
  "paragraf-etiketi",
  "linkler",
  "resim-ekleme",
  "liste-turleri",
  "html-yapisi",
  "div-span",
  "yapi-etiketleri",
  "sayfa-bolumleri",
  "tablolar",
  "form-elementleri",
  "form-giris",
  "butonlar",
];

let aktifIndex = 0;

function showDiv(divId) {
  const divs = document.querySelectorAll(".icerik-alani");
  divs.forEach((div) => (div.style.display = "none"));
  document.getElementById(divId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const sonrakiBtn = document.getElementById("sonrakiKonu");
  const oncekiBtn = document.getElementById("öncekiKonu");

  if (sonrakiBtn) {
    sonrakiBtn.addEventListener("click", function () {
      if (aktifIndex < konular.length) {
        showDiv(konular[aktifIndex]);
        aktifIndex++;
      }
      if (aktifIndex >= konular.length) {
        this.disabled = true;
        this.innerText = "Tüm Konular Tamamlandı 🎉";
      }
    });
  }

  if (oncekiBtn) {
    oncekiBtn.addEventListener("click", function () {
      if (aktifIndex > 0) {
        aktifIndex--;
        showDiv(konular[aktifIndex]);
      }
    });
  }
});
