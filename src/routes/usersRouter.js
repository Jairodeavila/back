// usersRouter.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');



//routes de usuarios
router.get('/all', userController.getAllUser); // Suponiendo que exista un método getAllUsers en tu controlador\

// Ruta para crear un nuevo usuario
router.post('/create', userController.createUser);

router.put('/update', userController.updateUser); // Suponiendo que exista un método updateUsers en tu controlador

// Ruta para eliminar un usuario por su ID
router.delete('/users/:id', userController.deleteUser)

module.exports = router;
