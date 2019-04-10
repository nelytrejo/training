// CeroUno.io
// - 1. Send an acceptance e-mail to all students
// - 2. What are all the languages that students are interested in ?
// - 3. What is the average age of all the students ?



function sendEmail(student) {
  console.log(`Dear ${student.name}, you are accepted at CeroUno.io`);
  console.log(`Email sent to: ${student.email}`);

}


const students = [
  { name: 'Juan', age: 18, email: 'juan@cerouno.io', interest: 'ruby' },
  { name: 'Elizabeth', age: 22, email: 'elizabeth@cerouno.io', interest: 'js' },
  { name: 'Erika', age: 17, email: 'erika@cerouno.io', interest: 'go' },
  { name: 'Pedro', age: 30, email: 'pedro@cerounio.io', interest: 'elixir' },
  { name: 'Fernanda', age: 25, email: 'fernanda@cerouno.io', interest: 'java' }
];


//1. Send an acceptance e-mail to all students
//Enviar un correo electrónico de aceptación a todos los estudiantes.

students.forEach(sendEmail) //es para repetir forEach
console.log('\n')  // salto de linea


//2. What are all the languages that students are interested in ?
//¿En qué idiomas están interesados los estudiantes?

const lengAlum = students.map((st) => {
  return st.interest
});

console.log(lengAlum)

function se(student) {

}


//3. What is the average age of all the students ?
//Cuál es la edad promedio de todos los estudiantes?

const edadAlumno = students.reduce((total, s) => {
  return total + s.age;
}, 0); // 0 es la posicion  

console.log(edadAlumno ); // esta impresion solo sale la suma, como resultado 112
console.log(`El promedio de los estudiantes es ${(edadAlumno / students.length)}`)


// otra manera de  realizar,cual es la edad promedio de los estudiantes
const avg = edadAlumno / students.length;

console.log(`el promedio es: \n${(avg)}`) //este es otra forma de imprimir el promedio de todos los estudiantes 22.4


