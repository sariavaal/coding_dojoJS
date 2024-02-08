//crear una funcion de nombre pizzaOven que devuelva un objeto  pizza
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza,
    pizza.tipoSalsa = tipoSalsa,
    pizza.quesos = quesos,
    pizza.salsas = salsas
    return pizza;
}
var pizza = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
//crear dos pizzas mas
var pizza3 = pizzaOven("estilo italiano", "tradicional", ["mozzarella", "ricotta"], ["pancetas", "peperoni"]);
var pizza4 = pizzaOven("estilo paraguayo", "borde relleno", ["mozzarella", "cheddar"], ["champiñones", "aceitunas", "cebollas", "tomates"]);
console.log(pizza);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);