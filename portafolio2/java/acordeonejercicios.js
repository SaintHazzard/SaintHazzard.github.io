const acordeones = document.querySelectorAll(".pcontenido");
for (let i = 0; i < acordeones.length; i++) {
  acordeones[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    panel.classList.toggle("panel-none");
  });
}
