const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente, obtenerClientePorId ,actualizarCliente,  eliminarCliente} = require('../controllers/cliente.controller');

// Rutas para clientes
router.get('/clientes', obtenerClientes);

// Ruta para crear un nuevo cliente
router.post('/clientes', crearCliente);

// Rutas para clientes por id
router.get('/clientes/:id', obtenerClientePorId);

router.put('/clientes/:id', actualizarCliente);

router.delete('/clientes/:id', eliminarCliente);

module.exports = router;
