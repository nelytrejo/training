// Best representation in Javascript for:
// - The tax percentage for purchases in Mexico
// - A terms && conditions document
// - Houses in Game of thrones
// - The simplest to-do list you can think of
// - Teams in the world cup
// - The list of students in the class with name, age and favorite programming language.


//The tax percentage for purchases in Mexico
//El porcentaje del impuesto por compras en México.
let tenis = 1500
function impuestosCompras(tenis) {
    return tenis * 16 / 100
}
console.log(`El impuesto total es de ${impuestosCompras(tenis)}`)




// Programa de un triangulo
let base = 15
let altura = 25
function areaTriangulo(base, altura) {
    return base * altura / 2
};

console.log(`El resultado es ${areaTriangulo(base, altura)}`)


//A terms && conditions document
//Un documento de términos y condiciones.

const terminos = {
    licencia: `a través de su sitio web concede una licencia para que los usuarios utilicen  los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.`,
    propiedad: `Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar.`

}
//console.log(`${areaTriangulo(base, altura)}`) esto nadamas mas es un ejemplo si quiero imprimir algo mas
console.log(terminos)

//Houses in Game of thrones
//Casas en Juego de tronos

const housestronos = [
    { nombre: 'cenicienta', edad: 34, sexo: 'mujer'},
    { nombre: 'blancanieves', edad: 28, sexo: 'mujer'},
    { nombre: 'rapusel', edad: 15, sexo: 'mujer'},
    { nombre: 'aladino', edad: 36 sexo: 'hombre'},
    { nombre: 'batman', edad: 34}.sexo : 'hombre',
    { nombre: 'superman', edad: 34 sexo: 'hombre'},
    
]