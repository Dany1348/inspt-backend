
import express from "express";

import mongoose from "mongoose";

import {getUsers ,createUser,deleteUser,updateUser, getUserByDNI} from './userscontroller.js';
import { getProducts , createProduct ,getProductById,updateProduct ,deleteProduct} from './productscontroller.js';
//const  = require('./userscontroller.js');
//import productController from './productscontroller.js';

import "dotenv/config";
import cors from "cors";

//Conexión a mongo:
//URL_Mongo=mongodb+srv://admin:Sxdc2208@clusterinspt.gvodtbv.mongodb.net/?appName=ClusterINSPT
const URL_Mongo = process.env.URL_Mongo;
mongoose.connect(URL_Mongo,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar con la BD: '));
db.once('open', ()=>{
    console.log('Se conecto con la BD INSPT');
});

//____________________________________________

//Configuración de Express con el middleware:
const app = express();

//Configuración del puerto:
// PORT=3000
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Escuchando en http://localhost:${PORT}`);
});

app.use(cors({
    //origin: "http://localhost:PORT";
}));

app.get('/', (req,res)=>{
    res.send('Porque hay algo y no mas bien nada ')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas CRUD:
app.get('/users/all', getUsers);
app.post('/users/create', createUser);
app.get('/users/find/:dni', getUserByDNI);
app.put('/users/update/:dni', updateUser);
app.delete('/users/delete/:dni', deleteUser);

app.get('/products/all', getProducts);
app.post('/products/create', createProduct);
app.get('/products/find/:id', getProductById);
app.put('/products/update/:id', updateProduct);
app.delete('/products/delete/:id', deleteProduct);




// borramos el seteo de la url



