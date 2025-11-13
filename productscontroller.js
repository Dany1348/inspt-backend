//const Product = require ("./product");
import Product from './product.js';

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
        console.log(products);   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    const product = new Product({
        id: req.body.id,
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un producto por su id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un producto por su id
export const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findOneAndUpdate(
            { id: req.params.id },
            {
                $set: {
                   /* id: req.body.id,
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    descripcion: req.body.descripcion,*/
                    id: req.body.id,
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    imagen: req.body.imagen,
                    categoria: req.body.categoria,
                    descripcion: req.body.descripcion,
                    cantidad: req.body.cantidad,
                },
            },
            { new: true }
        );
        res.json(updateProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Eliminar un producto por su id
export const deleteProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.params.id });
        res.json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
