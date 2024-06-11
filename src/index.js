/**
 * Enlace donde explican login con JWT
 * https://bluuweb.github.io/node/07-jwt/#login
 *
 */
require("dotenv").config();
const express = require("express");
const utils = require("./utils/consoleInfo");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;

// USE = TODOS LOS TIPOS DE MÉTODOS HTTP
app.use(express.json());
app.use(cors());
app.use(utils.infoBeginOfRequest);

// PETICIONES GET
app.get("/", v1Routes);

// PETICIONES POST

//FUNCION Genérica de gestión de errores
app.use((err, req, res, next) => {
    console.error("ERROR:" + err.stack);
    res.status(500).json({ error: "Error interno del servidor" }).end();
});

app.listen(PORT, () => {
    console.log(
        "\x1b[41m%s\x1b[0m",
        `[server]  🚀 Server listening on port ${PORT} 🚀`
    );
});
