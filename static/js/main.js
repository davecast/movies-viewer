const $movies = document.querySelector(".movies");
const $movieAction = document.querySelectorAll(".movie__action");
const $movieClose = document.querySelectorAll(".m-closed");

function resetMovie() {
  let $openMovie = document.querySelector(".open");
  if ($openMovie !== null) {
    $openMovie.classList.add("hidden");
    $openMovie.classList.remove("open");
    setTimeout(() => {
      $openMovie.classList.remove("hidden");
    }, 450);
  }
}

$movieAction.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("hola2");
    resetMovie();

    if (!$movies.classList.contains("active")) {
      $movies.classList.add("active");
    }

    element.parentElement.classList.add("open");
  });
});

$movieClose.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    resetMovie();
    $movies.classList.remove("active");
  });
});
