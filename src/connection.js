const mysql = require('mysql');
const { mysql_database } = require('./config'); // Corrección en la destructuración

const connection = mysql.createConnection(mysql_database);

connection.connect((err) => { // Corrección en la función de conexión
    if (err) {
        console.log('Ha ocurrido un error:', err);
    } else {
        console.log('Conexión exitosa');
    }
});

module.exports = connection; // Corrección en la exportación
