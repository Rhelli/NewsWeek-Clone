
const html = document.getElementById('html');
const search = document.getElementById('navbarSearch');
const nav = document.getElementById('nav');
const container = document.getElementById('navbarContainer');
search.addEventListener("click", function (ev) {
  container.style.zIndex = "12";
  search.style.width = "91%";
  search.style.paddingLeft = "5px";
  search.style.transition = "width 0.2s ease";
  ev.stopPropagation(); //this is important! If removed, you'll get both alerts
});
html.addEventListener("click", function() {
    container.style.zIndex = "1";
    search.style.width = "60px";
    search.style.paddingLeft = "0";
});

const mqNav = window.matchMedia("(max-width:992px)");
function mobNavShow() {
  var x = document.getElementById("mobNav");
  var y = document.getElementById("times")
  var z = document.getElementById("bars")
  if (mqNav.matches && x.style.right === "-220px") {
    x.style.right = "0";
    x.style.transition = "ease 0.3s";
    z.style.display = "none";
    z.style.transition = "0.2s ease";
    y.style.display = "block";
    y.style.transition = "0.3s ease";
  } else {
    x.style.right = "-220px";
    z.style.display = "block";
    y.style.display = "none";

  }
}  