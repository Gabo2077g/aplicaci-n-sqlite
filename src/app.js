// Importar Express
const express = require("express");

// Importar rutas de productos
const productosRoutes = require("./routes/productos.routes");

// Crear aplicación Express
const app = express();

// Puerto donde correrá el servidor
const PORT = 3001;

// Middleware para recibir datos JSON
app.use(express.json());

// Ruta principal para comprobar funcionamiento
app.get("/", (req, res) => {
  res.json({
    mensaje: "API de productos funcionando correctamente"
  });
});

// Registrar rutas de productos
app.use("/productos", productosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});