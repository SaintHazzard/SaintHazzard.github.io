const port = document.querySelectorAll(".portfolio_cont");
console.log(port);
port.forEach((n) => {
  n.addEventListener("click", () => {
    n.classList.toggle("portfolio_cont_scale");
  });
});
