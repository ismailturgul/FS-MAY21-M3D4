
const mainRow = document.querySelector(".main-row");

const getBooks = function(){
    fetch("https://striveschool-api.herokuapp.com/books").then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data.title)
        displayHTM(data);
    })
};
getBooks([]) 

const displayHTM = (datas) => {
    datas.forEach((data) => {
      // const img {medium  } = data.url
  
      // console.log(data);
      console.log(data.data);
      // console.log(data.src);
  
      const html = `
      
      <div class="col-md-4 ">
      <div class="card mb-4 shadow-sm">
        <img src="${data.img}" class="card-img-top img-fluid w-100" ' ' alt="...">
        <div class="card-body">
          <p class="card-text">
            ${data.title}
          </p>
          <h2
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
      </div>
    </div>
      
      `;
      mainRow.insertAdjacentHTML("afterbegin", html);
    });
  
    // mainRow.insertAdjacentHTML('afterbegin',html )
  };
  displayHTM()