//constantes y variables
const talleZ = [36, 37, 38, 39, 40]
const talleB = [35, 36, 37, 38, 39, 40, 41]
const talleS = [35, 36, 37, 38]
const colorZ = ["blanco", "negro", "azul"]
const colorB= ["suela", "negro", "rojo"]
const colorS = ["negro", "suela", "verde"]
let tipo 
let talle 
let color 
let carrito = []
let verif 

//constructor de productos
class parElegido {
    constructor (tipo, talle, color) {
        this.tipo = tipo;
        this.talle = talle;
        this.color = color;
    }
}

//funciones
function validarT (arr, el){
    el = parseInt (prompt ("Ingrese talle. Disponibles: " + arr),10);
    verif = arr.includes (el);
    console.log(verif);
    if (verif == true) {
        alert ("Talle ingresado: " + el)
        talle = el
    }
    else {
        alert ("Ingreso inválido");
        validarT(arr, el)
    }
    
}

function validarC (arr, el){
    el = prompt("Ingrese color. Disponibles: " + arr).toLowerCase();
    verif = arr.includes (el);
    console.log(verif);
    if (verif == true) {
        alert ("Color ingresado: " + el)
        color = el
    }
    else {
        alert ("Ingreso inválido");
        validarC(arr, el)
    }
    
}

//programa de compra asistida
let ingreso = prompt("Bienvenido a la tienda de zapatos. Ingrese el producto que desea añadir al carrito: 1: Zapatillas 2: Botas 3: Sandalias")
while (ingreso !=4) {
    switch (ingreso) {
        case "1":
            tipo = 1
            validarT(talleZ);
            validarC(colorZ);
            break;
        case "2":
            tipo = 2
            validarT(talleB);
            validarC(colorB);
            break;
        case "3":
            tipo = 3
            validarT(talleS);
            validarC(colorS);
            break;
        default:
            alert("Producto no válido");
            break;
    }
    ingreso = prompt ("Agregar productos: 1: Zapatillas 2: Botas 3: Sandalias 4: Finalizar")

const producto = new parElegido (tipo, talle, color)
console.log(producto) 
carrito.push(producto)

}

console.log(carrito)