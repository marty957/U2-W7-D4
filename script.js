const url = "https://api.pexels.com/v1/search?query=";
const key = "0xhb9QUuuo3YiiLUh9m1MEphFpHGocvBuOa2bRTNj07winZkhhhEu5Zf";
const btnLoad = document.getElementById("FirstLoad");
const secondBtnLoad = document.getElementById("secondLoad");
const query1 = "cat";
const query2 = "nature";

const getPhotos = function (url) {
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
    .then((photos) => {
      console.log(photos);
      const container = document.querySelector(".row");
      const col = document.createElement("div");
      col.classList = "col-4";
      photos.forEach((photo) => {
        const card = document.createElement("div");
        card.innerHTML = `<div class="card mb-4 shadow-sm">
            <img src="https://picsum.photos/id/237/300/200" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>`;
      });
    });
};
btnLoad.addEventListener("click", () => getPhotos(url + query1));
secondBtnLoad.addEventListener("click", () => getPhotos(url + query2));

//window.addEventListener("DOMContentLoaded", function () {
// getPhotos();
//});
