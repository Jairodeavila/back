// Definición de la función de middleware
const isLogged = (req, res, next) => {
    let logged = false; // Esto debería ser una lógica para verificar si el usuario está logueado
    if (logged) {
        next(); // Si el usuario está logueado, llama a la siguiente función middleware
    } else {
        res.send('No se puede ingresar hasta loguearse'); // Si el usuario no está logueado, envía este mensaje
    }
};

// Exporta la función de middleware
module.exports = isLogged;
