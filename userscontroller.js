//const User = require('./user');
import User from './user.js';
import bcryptjs from 'bcryptjs';

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
    //console.log(" paso por el getUsers");
    try {
        const users = await User.find();
        //console.log(" paso por el find");
        res.json(users);
        //console.log(" paso por el json");
        console.log(users);   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    const password = req.body.password;
    let passwordHash  = await bcryptjs.hash(password,8);
    console.log(passwordHash);
    

    const user = new User({
      /*  dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,*/
        dni: req.body.dni,
        nombre: req.body.nombre,
        password: passwordHash,
        rol: req.body.rol,
        correo: req.body.correo,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un usuario por su DNI
export const getUserByDNI = async (req, res) => {
    try {
        const user = await User.findOne({ dni: req.params.dni });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un usuario por su DNI
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { dni: req.params.dni },
            {
                $set: {
                    /*dni: req.body.dni,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    correo: req.body.correo,*/
                    dni: req.body.dni,
                    nombre: req.body.nombre,
                    password: req.body.password,
                    rol: req.body.rol,
                    correo: req.body.correo,
                },
            },
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Eliminar un usuario por su DNI
export const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({ dni: req.params.dni });
        res.json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un usuario al logearse

export const getLogin = async (req, res) => {
    let {dni , password} = req.body;
    try {
        //const user = await User.findOne({ dni: req.params.dni });
        const user = await User.findOne({dni: dni});       
        console.log( " Pasamos por aca");
        
        let saved = user.password;
        console.log( " Pasamos por aca" , saved);
        let contra = password;
        console.log( " Enviada" , contra);
        let compare = bcryptjs.compareSync( contra , saved);
        console.log( " Estamos comparando ?" , compare);
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        } else if (compare) {
                res.json(user);
        }else{
            return res.status(404).json({ message: 'Usuario no habilitado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};