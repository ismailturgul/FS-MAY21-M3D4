const mainRow = document.querySelector(".main-row");
const favRow = document.querySelector(".favorite-row");
let books = [];

const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayHTM(data);
    })
    .catch((err) => console.error(err.message));
};
const displayHTM = (datas) => {
  datas.forEach((data) => {
    const html = `
      
      <div class="col-md-3 booksPerColumn">
      <div class="card mb-3 d-flex shadow-sm">
        <img src="${data.img}" class="card-img alt=" d-flex...">
        <div class="card-body ">
          <h5 class="card-text">
            ${data.title}
          </h5>
          <h6 class="catagory"> ${data.category} </h6>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" id="addToCart" class="btn btn-sm btn-outline-secondary">
                Add to Cart
              </button>
              <button type="button" id="ignore" class="btn btn-sm btn-outline-secondary">
                Ignore
              </button>
            </div class="price">
             ${data.price} €
          </div>
        </div>
      </div>
    </div>
      
      `;
    mainRow.insertAdjacentHTML("afterbegin", html);

    document
      .getElementById("ignore")
      .addEventListener("click", function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
      });
    // manipulate it to push it maybe with the displayHTM function but instead of mainRow -> favRow
    document
      .getElementById("addToCart")
      .addEventListener("click", function (event) {
        let buttonClicked = event.target;
        let divToShoppingCart =
          (buttonClicked.parentElement.parentElement.parentElement.parentElement =
            "background: green");
      });
  });
};
getBooks();
