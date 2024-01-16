function inputborder() {
  var cor = `rgb(165,68,79)`;
  var input = document.querySelector("input");

  input.style.border = `4px solid ${cor}`;
}

function removeInputBorder() {
  var cortransparente = `rgba(0,0,0,0.0)`;
  var input = document.querySelector("input");
  input.style.border = `1px solid ${cortransparente}`;
}
