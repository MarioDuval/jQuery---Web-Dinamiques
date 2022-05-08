const api_url = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=man";

function section (movie){

    return `
    <div class="wrapper" style='background:url("https://image.tmdb.org/t/p/w1280/${movie.poster_path}") center/cover no-repeat;'>
      <div class="date">
        <span class="day">Date: ${movie.release_date}</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">ID Movie: ${movie.id}</span>
          <h1 class="title"><a href="#">Movie: ${movie.title}</a></h1>
          <p class="text">${movie.overview}</p>
        </div>
      </div>
    </div>
  </div>`;
}


$.getJSON(api_url, function(movie){
    let movies = [];
    let x = 0;
    $.each(movie, function (i, field) {
        console.log(field)
        movies.push(section(movie.results[x]))
        $("#data").html(movies)
        x++;
    });
})


