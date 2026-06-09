// Importar la librería Better-SQLite3
const Database = require("better-sqlite3");

// Crear o abrir la base de datos SQLite
const db = new Database("database.db");

// Exportar la conexión para usarla en otros archivos
module.exports = db;