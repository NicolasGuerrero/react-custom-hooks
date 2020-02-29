$(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    let title = $("input").eq(0).val();
    let rating = $("input").eq(1).val();
    console.log(title, rating);
    if(title.length >= 2) {
      updateForm(title, rating);
    }
  });
  $("select#sorter").on('change', function(e) {
    console.log('selector clicked');
    let movies = $("#movielist li");
    console.log(movies.get());
  });
  function updateForm(title, rating) {
    let movie = `<li> Title: ${title},
        Rating: ${rating} <button> Remove </button></li>`;
    $("ul").append(movie)
    $("ul#movielist button").on('click', function (e) {
      $(e.target).parent().remove();
    });
  }
});