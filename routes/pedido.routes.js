
const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido, obtenerPedidoPorId, actualizarPedido, eliminarPedido } = require('../controllers/pedido.controller');

// Rutas para pedidos
router.get('/pedidos', obtenerPedidos);

// Ruta para crear un nuevo pedido
router.post('/pedidos', crearPedido);

router.get('/pedidos/:id', obtenerPedidoPorId);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);

module.exports = router;