const loadMoreBtn = document.getElementById("loadMoreBtn");

loadMoreBtn.addEventListener("click", function () {
  loadMoreBtn.classList.add("loading");

  setTimeout(() => {
    loadMoreBtn.classList.remove("loading");
  }, 2000);
});
