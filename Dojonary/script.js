//cambiar el boton de login a logout cuando se de el evento click
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", function () {
    if (document.getElementById("button").innerText === "Login") {
      document.getElementById("button").innerText = "Logout";
    } else {
      document.getElementById("button").innerText = "Login";
    }
  });
  //remover el boton definition-button cuando es clickeado
  document
    .getElementById("definition-button")
    .addEventListener("click", function () {
      document.getElementById("definition-button").remove();
    });
  //alert de ninja was liked
  document.getElementById("ninja").addEventListener("click", function () {
    alert("Ninja was liked");
  });
});
