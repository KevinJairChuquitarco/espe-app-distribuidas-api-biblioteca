const express = require("express");
const router = express.Router();
const pool = require("../database/database");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("Select *from genero");
    res.json(result.rows);
  } catch (error) {
    console.log("Error " + error);
    res.status(500).json({ mensaje: "Error al obtener" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("Select *from genero where id=$1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.log("Error " + error);
    res.status(500).json({ mensaje: "Error al obtener" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const result = await pool.query(
      "insert into genero (nombre, descripcion) values ($1,$2) returning*",
      [nombre, descripcion]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({ mensaje: "Error al registrar" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const result = await pool.query(
      "UPDATE genero SET nombre = $1, descripcion = $2 where id=$3 returning*",
      [nombre, descripcion, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({ mensaje: "Error al actualizar" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("delete from genero where id=$1", [id]);
    res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({ mensaje: "Error al eliminar" });
  }
});

module.exports = router;