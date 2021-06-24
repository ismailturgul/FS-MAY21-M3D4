const getBooks = function(){
    fetch("https://striveschool-api.herokuapp.com/books").then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data)
    })
};
getBooks() 