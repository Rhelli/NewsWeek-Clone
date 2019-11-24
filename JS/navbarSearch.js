
const html = document.getElementById('html');
const search = document.getElementById('navbarSearch');
const nav = document.getElementById('nav');
search.addEventListener("click", function (ev) {
  search.style.width = "91%";
  search.style.transition = "width 0.3s ease";
  ev.stopPropagation(); //this is important! If removed, you'll get both alerts
});
html.addEventListener("click", function() {
    search.style.width = "60px";
});