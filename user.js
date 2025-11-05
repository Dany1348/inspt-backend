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
    "password": "Secreta",
    "rol": "cliente",
    "correo": "faraday@gmail.com"
}

{
"dni":"1234",
"nombre":"Galileo",
"password": "Secreta",
    "rol": "vendedor",
"correo":"galilei@gmail.com"
}
*/