
import Factura from './factura.js';

// Obtener todos los productos
export const getFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find();
        res.json(facturas);
        console.log(facturas);
        let hoy = new Date();
        hoy = `${hoy.getDay()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`;
        console.log(" paso por el json hoy :   ", hoy);   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo producto
export const createFactura = async (req, res) => {
    const factura = new Factura({
        fecha: req.body.fecha,
        cliente: req.body.cliente,
        productos: req.body.productos,
        total: req.body.total,
        //categoria: req.body.categoria,
        //descripcion: req.body.descripcion,
    });

    try {
        const newFactura = await factura.save();
        res.status(201).json(newFactura);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un producto por su id
export const getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findOne({ id: req.params.id });
        if (!factura) {
            return res.status(404).json({ message: 'Factura no encontrado' });
        }
        res.json(factura);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un producto por su id
/*
export const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findOneAndUpdate(
            { id: req.params.id },
            {
                $set: { 
                    id: req.body.id,
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    imagen: req.body.imagen,
                    categoria: req.body.categoria,
                    descripcion: req.body.descripcion,
                },
            },
            { new: true }
        );
        res.json(updateProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};*/

// Eliminar un producto por su id
export const deleteFactura = async (req, res) => {
    try {
        await Factura.findOneAndDelete({ id: req.params.id });
        res.json({ message: 'Factura eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

{
    
}