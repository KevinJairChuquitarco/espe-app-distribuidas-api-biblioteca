const express = require("express");
const router = express.Router();
const pool = require("../database/database");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT libro.id, libro.titulo, libro.editorial,
             autor.nombre AS autor, genero.nombre AS genero
      FROM libro
      INNER JOIN autor ON libro.id_autor = autor.id
      INNER JOIN genero ON libro.id_genero = genero.id
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/genero/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("Select *from libro where id_genero = $1",[id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/autor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("Select *from libro where id_autor = $1",[id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { titulo, editorial, id_autor, id_genero } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO libro (titulo, editorial, id_autor, id_genero)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [titulo, editorial, id_autor, id_genero]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, editorial, id_autor, id_genero } = req.body;

  try {
    const result = await pool.query(
      `UPDATE libro
       SET titulo=$1, editorial=$2, id_autor=$3, id_genero=$4
       WHERE id=$5 RETURNING *`,
      [titulo, editorial, id_autor, id_genero, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM libro WHERE id=$1", [id]);
    res.json({ message: "Libro eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
