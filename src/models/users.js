// models/user.js
const connection = require('../connection');

// Función para obtener todos los usuarios
const getAllUser = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

// Función para crear nuevo usuario
const createUser = (userData) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users SET ?', userData, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

// Función para actualizar un usuario existente
const updateUser = (userId, userData) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE users SET ? WHERE id = ?', [userData, userId], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.affectedRows > 0);
            }
        });
    });
}


const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM users WHERE id = ?';
        connection.query(query, [userId], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.affectedRows > 0);
            }
        });
    });
};



module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
};
