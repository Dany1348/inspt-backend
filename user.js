//const mongoose = require('mongoose');
import mongoose from 'mongoose';


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
    apellido: {
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
{ "dni": "345678",
    "nombre": "Michael",
    "apellido": "Faraday",
    "correo": "faraday@gmail.com"
}
*/