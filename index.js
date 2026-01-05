const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/autor", require("./routes/autor"));
app.use("/genero",require("./routes/genero"));
app.use("/libro", require("./routes/libro"));
app.use("example", require("./routes/mensajes"))

app.listen(PORT, ()=>{
    console.log("Escuando desde el puerto "+PORT);
})