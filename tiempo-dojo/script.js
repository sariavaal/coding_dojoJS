//al hacer clic en btn desaparece el card de cookie-card
document.addEventListener("DOMContentLoaded", function () {
    const cookieCard = document.querySelector(".cookie-card");
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
        cookieCard.remove();
    })
    //cuando se haga click en cities aparece alert con texto
    const cities = document.querySelector(".cities");
    cities.addEventListener("click", () => {
        alert("Cargando informe meteorológico…");
    })

    //cambiar el valor de grados al cambiar el select
// Convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return Math.round(celsius * 9/5 + 32);
  }
  
  // Convertir de Fahrenheit a Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
  }

    const select = document.querySelector("#temperature");
    select.addEventListener("change", () => {
        const grados = document.querySelectorAll(".grados");
        grados.forEach((grado) => {
            if (select.value === "celsius") {
                grado.innerText = fahrenheitToCelsius(parseInt(grado.innerText));
            } else {
                grado.innerText = celsiusToFahrenheit(parseInt(grado.innerText));
            }            
        })

    });
});


