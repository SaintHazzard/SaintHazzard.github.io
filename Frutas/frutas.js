function tema() {
  let frutas = document.querySelectorAll(".frutas");
  const cbody = document.getElementById("select-fruit");
  console.log(cbody.value);
  switch (cbody.value) {
    case "green":
      for (let i = 0; i < frutas.length; i++) {
        if (i % 2 != 0) {
          frutas[i].classList.add("frutas-rojo");
        }
      }
      break;
    case "blue":
      for (let i = 0; i < frutas.length; i++) {
        if (i % 2 != 0) {
          frutas[i].classList.add("frutas-rojo");
        }
        if (i % 2 == 0) {
          frutas[i].classList.add("frutas-rojo");
        }
      }
      break;
    case "default":
      for (let i = 0; i < frutas.length; i++) {
        frutas[i].classList.remove("frutas-rojo", "frutas-blue");
      }
      break;
    default:
      break;
  }
}
