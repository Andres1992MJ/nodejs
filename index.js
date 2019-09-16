console.log("Hola");
//  EN ESTE CODIGO SE TRAE INFORMACION DESDE EL PAKETE DE FAKER, SE INSTALA DESDE CONSOLA CON   npm init enter hasta yes despues npm install faker


// var faker = require('faker');

// let nombre = faker.name.findName();
// let email = faker.internet.email()

// console.log(nombre , email)


//Aca se trae informacion desde un archivo creado en otra carpeta

let api = require('./api');

const usuario1 = new api.Usuario("Andres");
console.log(usuario1.nombre);