const url = "https://api.pexels.com/v1/search?query=ocean";
const key = "0xhb9QUuuo3YiiLUh9m1MEphFpHGocvBuOa2bRTNj07winZkhhhEu5Zf";

const getPhotos = function () {
  const btnLoad = document.getElementById("FirstLoad");
  const secondBtnLoad = document.getElementById("secondLoad");
  fetch(url, {
    method: "GET",
    headers: { Authorization: key }
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("Sorry, download failed");
      }
    })
    .then((arr) => {
      console.log(arr);
    });
};

window.addEventListener("DOMContentLoaded", function () {
  getPhotos();
});
