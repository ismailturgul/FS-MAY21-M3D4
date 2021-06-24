const btnAddToCart = document.querySelector(".addToCart")
const mainRow = document.querySelector(".main-row");
const favRow = document.querySelector(".favorite.row")

const getBooks = function(){
    fetch("https://striveschool-api.herokuapp.com/books").then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data)
        displayHTM(data);
    })
};

const displayHTM = (datas) => {
    datas.forEach((data) => {
      // const img {medium  } = data.url
  
      // console.log(data);
      console.log(data.price);
      // console.log(data.src);
  
      const html = `
      
      <div class="col-md-3">
      <div class="card mb-3  shadow-sm">
        <img src="${data.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text">
            ${data.title}
          </h5>
          
          <h6 class="catagory"> ${data.category} </h6>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Add to Cart
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Ignore
              </button>
            </div>
             ${data.price} €
          </div>
        </div>
      </div>
    </div>
      
      `;
      mainRow.insertAdjacentHTML("afterbegin", html);
    });
  };
