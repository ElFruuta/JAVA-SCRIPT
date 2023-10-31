function siempreHambriento(arr) {
    var encontrada = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("delicioso");
            encontrada = true;
        }
        else if (arr[i] === "hola") {
            console.log("hola mundo"),
            encontrada = true;
        }
    }
    if (!encontrada) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida", "comida", "hola", "comida", "hola"]); // esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]); // esto debería mostrar "Tengo hambre"+
