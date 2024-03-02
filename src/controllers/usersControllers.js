// controllers/userController.js
const userModel = require('../models/users');

// Función para obtener todos los usuarios
const getAllUser = async (req, res) => {
    try {
        const users = await userModel.getAllUser();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        // Extraer los datos del cuerpo de la solicitud
        const { id, username, password, apellido, telefono } = req.body;

        // Verificar si todos los campos obligatorios están presentes
        if (!id || !username || !password || !apellido || !telefono) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }

        // Crear un objeto con los datos del usuario
        const userData = {
            id,
            username,
            password,
            apellido,
            telefono
        };

        // Llamar a la función del modelo para crear un nuevo usuario
        const userId = await userModel.createUser(userData);

        // Enviar una respuesta exitosa con el ID del nuevo usuario creado
        res.status(201).json({ message: 'Usuario creado con éxito.', userId });
    } catch (error) {
        // Capturar y manejar cualquier error
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Ocurrió un error al crear el usuario.' });
    }
};


// Función para actualizar un usuario existente
const updateUser = async (req, res) => {
    // Extrae el ID del usuario y los datos actualizados del cuerpo de la solicitud
    const userId = req.params.id;
    const userData = req.body;

    try {
        const success = await userModel.updateUser(userId, userData);
        if (success) {
            res.json({ message: 'Usuario actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const success = await userModel.deleteUser(userId);
        if (success) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
};




module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
};
