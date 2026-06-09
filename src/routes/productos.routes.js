// Importar Express
const express = require("express");

// Importar conexión a la base de datos
const db = require("../db");

// Crear router
const router = express.Router();

/*
====================================
OBTENER TODOS LOS PRODUCTOS
====================================
*/
router.get("/", (req, res) => {
  try {
    const productos = db.prepare(
      "SELECT * FROM productos"
    ).all();

    res.json(productos);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al obtener los productos"
    });
  }
});

/*
====================================
OBTENER PRODUCTO POR ID
====================================
*/
router.get("/:id", (req, res) => {
  try {
    const producto = db.prepare(
      "SELECT * FROM productos WHERE id = ?"
    ).get(req.params.id);

    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json(producto);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al buscar el producto"
    });
  }
});

/*
====================================
CREAR PRODUCTO
====================================
*/
router.post("/", (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    } = req.body;

    if (
      !nombre ||
      !descripcion ||
      precio === undefined ||
      stock === undefined ||
      !categoria
    ) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios"
      });
    }

    const resultado = db.prepare(`
      INSERT INTO productos
      (nombre, descripcion, precio, stock, categoria)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    );

    res.status(201).json({
      mensaje: "Producto creado correctamente",
      id: resultado.lastInsertRowid
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al crear el producto"
    });
  }
});

/*
====================================
ACTUALIZAR PRODUCTO
====================================
*/
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const {
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    } = req.body;

    if (
      !nombre ||
      !descripcion ||
      precio === undefined ||
      stock === undefined ||
      !categoria
    ) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios"
      });
    }

    const producto = db.prepare(
      "SELECT * FROM productos WHERE id = ?"
    ).get(id);

    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    db.prepare(`
      UPDATE productos
      SET nombre = ?,
          descripcion = ?,
          precio = ?,
          stock = ?,
          categoria = ?
      WHERE id = ?
    `).run(
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
      id
    );

    res.json({
      mensaje: "Producto actualizado correctamente"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al actualizar el producto"
    });
  }
});

/*
====================================
ELIMINAR PRODUCTO
====================================
*/
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const producto = db.prepare(
      "SELECT * FROM productos WHERE id = ?"
    ).get(id);

    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    db.prepare(
      "DELETE FROM productos WHERE id = ?"
    ).run(id);

    res.json({
      mensaje: "Producto eliminado correctamente"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al eliminar el producto"
    });
  }
});

// Exportar router
module.exports = router;