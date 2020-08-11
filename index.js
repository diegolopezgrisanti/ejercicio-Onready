const fs = require("fs");
const rutaArchivo = "./vehiculos.json";
let vehiculosJSON = fs.readFileSync(rutaArchivo, "utf8");
let vehiculos = JSON.parse(vehiculosJSON);

vehiculos.forEach((vehiculo) => {
    vehiculo.cilindrada == null
        ? console.log(
              "Marca: " +
                  vehiculo.marca +
                  " // Modelo: " +
                  vehiculo.modelo +
                  " // Puertas: " +
                  vehiculo.puertas +
                  " // Precio: " +
                  vehiculo.precio.toFixed(2)
          )
        : null;
    vehiculo.puertas == null
        ? console.log(
              "Marca: " +
                  vehiculo.marca +
                  " // Modelo: " +
                  vehiculo.modelo +
                  " // Cilindrada: " +
                  vehiculo.cilindrada +
                  " // Precio: " +
                  vehiculo.precio.toFixed(2)
          )
        : null;
});

//Busqueda del vehiculo mas caro
function vehiculoMasCaro(vehiculos) {
    let maxValor = vehiculos[0].precio;
    let id = 0;
    for (let i = 0; i < vehiculos.length; i++) {
        let valorActual = vehiculos[i].precio;
        valorActual > maxValor ? ((maxValor = valorActual), (id = i)) : null;
    }
    return vehiculos[id];
}

//Busqueda del vehiculo mas barato
function vehiculoMasBarato(vehiculos) {
    let minValor = vehiculos[0].precio;
    let id = 0;
    for (let i = 0; i < vehiculos.length; i++) {
        let valorActual = vehiculos[i].precio;
        valorActual < minValor ? ((minValor = valorActual), (id = i)) : null;
    }
    return vehiculos[id];
}

//Busqueda del vehiculo cuyo modelo contiene una Y
let modeloY = vehiculos.find((vehiculo) => vehiculo.modelo.includes("Y"));

//Ordenar vehiculos de mayor a menor precio
let ordenPrecioMayorMenor = vehiculos.sort(
    (prev, sig) => sig.precio - prev.precio
);

let vehiculoMasValor = vehiculoMasCaro(vehiculos);
let vehiculoMenorValor = vehiculoMasBarato(vehiculos);

let ejercicio = `=============================
Vehículo más caro: ${vehiculoMasValor.marca} ${vehiculoMasValor.modelo}
Vehículo más barato: ${vehiculoMenorValor.marca} ${vehiculoMenorValor.modelo}
Vehículo que contiene en el modelo la letra ‘Y’: ${modeloY.marca} ${
    modeloY.modelo
} $${modeloY.precio.toFixed(2)}
=============================
Vehículos ordenados por precio de mayor a menor:`;

console.log(ejercicio);

ordenPrecioMayorMenor.forEach((vehiculo) => {
    console.log(vehiculo.marca + " " + vehiculo.modelo);
});
