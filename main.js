// 


// url = moviedatabaseurl
// assign html via jquery
// $button does func find movie using the entered in title
// enter also
// findmovie gets movie title, year, etc and stores them as vars
// appends to div + list items
// empties out current movies

'use strict';

$(document).ready(() => {

  let apiURL = `http://www.omdbapi.com/?`;

  $('.find').click(findMovie);
  $('.getTitle').on('keypress', (e) => {
    if (e.charCode === 13) findMovie();
  }).focus();
  $('.clear').click(clearMovie);

  clearMovie()



  function findMovie() {
      clearMovie()
      
      let movie = $('.getTitle').val();
      let movieCode = movie.toLowerCase().replace(/ /g, '+');
      // console.log(movieCode);
      console.log(apiURL +`t=${movieCode}&y=&plot=short&r=json`)
      $.ajax({
        url: apiURL +`t=${movieCode}&y=&plot=short&r=json` 
      })
      .done((data) => {
         console.log('movie:', data);

         if(data.Response === "False"){
            $('h3').text(`${movie} Not Found`);



         } else {
              $('h3').text("Movie Found"); 
              $('.title').text(data.Title);
              $('.year').text(data.Year);
              $('.genre').text(data.Genre);
              $('.rating').text(data.Rated);
              $('.plot').text(data.Plot);
              $('.director').text(data.Director);
              $('.actor').text(data.Actors);
              $('.image').attr('src', data.Poster);
         }
      });

  }


  function clearMovie() {
    $('h3').empty(); 
    $('.title').empty();
    $('.year').empty();
    $('.genre').empty();
    $('.rating').empty();
    $('.plot').empty();
    $('.director').empty();
    $('.actor').empty();
    $('.image').attr('src', "http://static1.squarespace.com/static/563fc42be4b0519912c5a96a/t/56a6fbea40667a81877086dd/1453784043059/IMDb.jpg?format=1500w");


  }

});      