function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    return {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    };
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var pizza3 = pizzaOven("delgada", "barbacoa", ["cheddar", "gouda"], ["pollo a la parrilla", "pimientos", "cebolla caramelizada"]);
var pizza4 = pizzaOven("gluten-free", "tomate", ["sin queso"], ["espinacas", "tomates cherry", "ajo"]);

var s2 = [pizza1, pizza2, pizza3, pizza4];

for (var i = 0; i <= s2.length ; i++) {
    console.log(s2[i]);
}


