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

const Housestronos = [
    { nombre: 'cenicienta', edad: 34, sexo: 'mujer' },
    { nombre: 'blancanieves', edad: 28, sexo: 'mujer' },
    { nombre: 'rapusel', edad: 15, sexo: 'mujer' },
    { nombre: 'aladino', edad: 36, sexo: 'hombre' },
    { nombre: 'batman', edad: 34, sexo: 'hombre' },
    { nombre: 'superman', edad: 34, sexo: 'hombre' },

];

console.log(Housestronos)

//The simplest to-do list you can think of
//la lista de tareas más sencilla que se pueda imaginar.

const tareasSencillas = {
    limpieza: ['tender la cama', 'acomodar la ropa', 'barrer  mi cuarto', 'trapear'],
    reparacion: ['arreglar llave del agua', 'reparar refrigerador'],

};

console.log(tareasSencillas)
console.log('\n')  //salto de linea

//otro ejemplo de como hacerlo de tareas mas sencillas

const tareas = [
    { lista: 'lavar el piso' },
    { lista: 'barrer el patio' },
    { lista: 'lavar la ropa' },


];

console.log(tareas);
console.log('\n') // salto de linea


//Teams in the world cup
//Equipos en la copa del mundo.


const equiposCopa = [

    { mexico: 'copa mundial' },
    { brasil: 'copa mundial' },
    { argentina: 'copa mundial' },
    { japan: 'copa mundial' },
    { realmadrid: 'copa mundial' },

];
console.log({ equiposmundial: equiposCopa[3] }); //otra forma de imprimir //el numero 3 es la posicion que quiero solamente me muestre
console.log('\n')



//The list of students in the class with name, age and favorite programming language.
//La lista de alumnos de la clase con nombre, edad y lenguaje de programación favorito.

const listaAalumnos = [
    { nombre: 'joseluis', edad: '28', lengProgarmacion: 'java', sexo: 'hombre' },
    { nombre: 'ana', edad: '23', lengProgarmacion: 'c++', sexo: 'mujer' },
    { nombre: 'david', edad: '25', lengProgarmacion: 'visual basic', sexo: 'hombre' },
    { nombre: 'carlos', edad: '32', lengProgarmacion: 'c', sexo: 'carlos' },
    { nombre: 'paola', edad: '27', lengProgarmacion: 'centos', sexo: 'mujer' },
    { nombre: 'cesar', edad: '30', lengProgarmacion: 'linux', sexo: 'hombre' },

];
console.log(listaAalumnos)
console.log('\n')

