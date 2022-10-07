function refresh() {
  var element1 = document.getElementById("eleccion1");
  var element2 = document.getElementById("eleccion2");
  var element3 = document.getElementById("eleccion3");
  if (localStorage.getItem("class")) {
    color.setAttribute("class", localStorage.getItem("class"));
    switch (localStorage.getItem("body")) {
      case "colornaranja":
        element1.setAttribute("selected", "");
        break;
      case "colorverde":
        element2.setAttribute("selected", "");
        break;
      case "colorpurpura":
        element3.setAttribute("selected", "");
    }
  }
  const acordeones = document.querySelectorAll(".acordeon");
  for (let i = 0; i < acordeones.length; i++) {
    acordeones[i].addEventListener("click", function () {
      let panel = this.nextElementSibling;
      panel.classList.toggle("panel-none");
    });
  }
}
const acordeones = document.querySelectorAll(".acordeon");
for (let i = 0; i < acordeones.length; i++) {
  acordeones[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    panel.classList.toggle("panel-none");
  });
}

function theme() {
  const cbody = document.getElementById("theme-select"); //select
  const color = document.getElementById("color"); // body
  let elec = document.querySelectorAll(".theme option");

  switch (cbody.value) {
    case "colornaranja":
      color.setAttribute("class", "colornaranja");
      localStorage.setItem("class", "colornaranja");
      break;
    case "colorverde":
      color.setAttribute("class", "colorverde");
      localStorage.setItem("class", "colorverde");
      break;
    case "colorpurpura":
      color.setAttribute("class", "colorpurpura");
      localStorage.setItem("class", "colorpurpura");
  }
  localStorage.setItem("body", cbody.value);
}
