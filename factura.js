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

const facturaSchema = new mongoose.Schema({
    fecha: {
        type: String,
        required: false,
        unique: false,
    },
    cliente: {
        type: String,
        required: false,
    },
    productos: {
        type: Array,
        required: false,
    },
    total: {
        type: Number,
        required: false,
    }

});



const Factura = mongoose.model('Factura', facturaSchema);

export default  Factura;

