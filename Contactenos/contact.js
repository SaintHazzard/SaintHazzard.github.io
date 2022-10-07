// function getData() {
// var nombre = document.getElementById("nombre").value;
// var email = document.getElementById("email").value;
// var asunto = document.getElementById("asunto").value;
// var msj = document.getElementById("msj").value;
// localStorage.setItem("name", nombre);
// localStorage.setItem("email", email);
// localStorage.setItem("asunto", asunto);
// localStorage.setItem("msj", msj);
//   console.log(nombre).value;
//   console.log(nombre.value);
// }
// input = document.querySelectorAll("li .inpt").values;
// input1 = document.querySelectorAll("li  .inpt");
// input2 = document.querySelectorAll("li  .inpt").value;

// localStorage.setItem("in", input);
// console.log(localStorage.getItem("in"));
// localStorage.setItem("in1", input1);
// console.log(localStorage.getItem("in1"));
// localStorage.setItem("in2", input2);
// console.log(localStorage.getItem("in2"));
// for (let i = 0; i < input.length; i++) {
//   const element = array[i];
//   console.log(element);
// }
// const entrada = document.querySelectorAll(".inpt");
// for (let i = 0; i < entrada.length; i++) {
//   entrada[i].addEventListener

// }
// document.getElementById("setdata").addEventListener("click", function () {

//   for (let i = 0; i < 4; i++) {
//     let entrada = input[i];

//   }
// });

// if (input != null) {
// }

// console.log(nombre);

function getData() {
  var input = document.querySelectorAll(".inpt"); // returns NodeList
  var validador = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "" && !validador) {
      validador = true;
      if (input[0].value == "") {
        alert("Nombre vacio");
      }
      if (input[1].value == "") {
        alert("E-mail vacio");
      }
      if (input[2].value == "") {
        alert("Asunto vacio");
      }
      if (input[3].value == "") {
        alert("Mensaje vacio");
      }
    }
  }
  if (!validador) {
    alert("Mensaje Enviado");
    var nombre = input[0].value;
    var email = input[1].value;
    var asunto = input[2].value;
    var msj = input[3].value;
    localStorage.setItem("name", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("asunto", asunto);
    localStorage.setItem("msj", msj);
  }
}
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("asunto"));
console.log(localStorage.getItem("msj"));
