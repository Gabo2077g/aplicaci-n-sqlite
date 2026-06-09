// Importar conexión a la base de datos
const db = require("../src/db");

// Crear tabla productos si no existe
db.prepare(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL,
    categoria TEXT NOT NULL
  )
`).run();

// Limpiar registros anteriores para evitar duplicados
db.prepare("DELETE FROM productos").run();

// Preparar sentencia de inserción
const insertarProducto = db.prepare(`
  INSERT INTO productos
  (nombre, descripcion, precio, stock, categoria)
  VALUES (?, ?, ?, ?, ?)
`);

// Insertar datos de ejemplo
insertarProducto.run(
  "Laptop Acer Nitro V15",
  "Laptop gamer con RTX 4050",
  18500,
  5,
  "Computadoras"
);

insertarProducto.run(
  "Mouse Logitech G203",
  "Mouse gamer RGB",
  450,
  15,
  "Periféricos"
);

insertarProducto.run(
  "Teclado Razer",
  "Teclado silencioso para gaming",
  1200,
  8,
  "Periféricos"
);

// Confirmar creación de la base de datos
console.log("Base de datos creada correctamente.");