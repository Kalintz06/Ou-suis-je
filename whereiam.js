//recuperer les dom
//
let coordonnees = document.querySelector(".localisation");
//bouton
const buttonAdd = document.querySelector(".buttonAdd");
const saveButton = document.querySelector(".saveButton");
const rebootButton = document.querySelector(".rebootButton");
const saveloc = document.querySelector(".saveLoc");

let lattext = document.getElementById("latitude");

let longtext = document.getElementById("longitude");

buttonAdd.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    lattext.innerText = latitude;
    longtext.innerText = longitude;

    saveButton.addEventListener("click", function () {
      localStorage.setItem("lat", latitude);
      localStorage.setItem("long", longitude);

      rebootButton.addEventListener("click", function () {
        localStorage.removeItem("lat");
        localStorage.removeItem("long");
      });
    });
  });
});
