const $movies = document.querySelector(".movies");
const $movieAction = document.querySelectorAll(".movie__action");


function resetMovie() {
  let $openMovie = document.querySelector('.open');
  if ($openMovie !== null ) {
    $openMovie.classList.remove('open');
  }
}

$movieAction.forEach((element) => {
  element.addEventListener("click", () => {

    resetMovie();

    if (!$movies.classList.contains('active')) {
      $movies.classList.add('active');
    }
    
    element.parentElement.classList.add('open');
  });
});
