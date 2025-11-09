//const mongoose = require('mongoose');
import mongoose from 'mongoose';


/*const userSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
});*/

const userSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
});



const User = mongoose.model('User', userSchema);

export default  User;

/* 
{ "dni": "234",
    "nombre": "Michael",
    "password": "123",
    "rol": "cliente",
    "correo": "faraday@gmail.com"
}
 {
    "dni": "222",
    "nombre": "Isaac",
    "password": "123",
    "rol": "vendedor",
    "correo": "newton@gmail.com"  
  }

{
"dni":"1234",
"nombre":"Galileo",
"password": "123",
    "rol": "vendedor",
"correo":"galilei@gmail.com"
}
[
  {
    "_id": "690bc9700a591d471129133b",
    "dni": "12345",
    "nombre": "Isaac",
    "apellido": "Newton",
    "correo": "newton@gmail.com",
    "__v": 0
  },
  {
    "_id": "690bcb2d0a591d4711291343",
    "dni": "0000",
    "nombre": "Nicolas",
    "apellido": "Copernico",
    "correo": "copernico@gmail.com",
    "__v": 0
  },
  {
    
    "dni": "234",
    "nombre": "Michael",
    "password": "Secreta",
    "rol": "vendedor",
    "correo": "faraday@gmail.com",
    
  },
  {
    
    "dni": "123",
    "nombre": "Galileo",
    "password": "Secreta",
    "rol": "vendedor",
    "correo": "galilei@gmail.com",
    
  },
  {
    
    "dni": "555",
    "nombre": "Albert",
    "password": "1234",
    "rol": "vendedor",
    "correo": "albert@gmail.com",
    
  },
  {
    
    "dni": "admin",
    "nombre": "admin",
    "password": "1234",
    "rol": "admin",
    "correo": "admin@gmail.com",
    
  },
  {
    "_id": "6910f13a5a08e2d17c2ae660",
    "dni": "1",
    "nombre": "Galileo",
    "password": "$2b$08$qDHr2Ckp5TZVyDkLs7I82uXhpeOvKSA2e4wzW3BwBCv12GA7YdyEW",
    "rol": "vendedor",
    "correo": "galilei@gmail.com",
    "__v": 0
  },
  {
    "_id": "69110328a15b5e79cb51d98e",
    "dni": "2",
    "nombre": "Nicolas",
    "password": "$2b$08$Jza7kKcwdSWHo2Ikj0U78eK7ycwy4.pkk4yi0cUXi3VP3usiJrn3y",
    "rol": "vendedor",
    "correo": "copernico@gmail.com",
    "__v": 0
  },
  {
    "_id": "69110362a15b5e79cb51d990",
    "dni": "3",
    "nombre": "Michael",
    "password": "$2b$08$hiavD4qxAVuKOaNbCoU8V.R8PImWOT/kWzEjxhnvnlvgNyI8elYee",
    "rol": "cliente",
    "correo": "faraday@gmail.com",
    "__v": 0
  }
]
*/