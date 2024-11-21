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
app.get("/", (req, res, next) => {
  res.send({ instrucciones: "citas célebres", prueba:"localhost:3000/aramis" }).end();
});

app.get("/aramis", (req, res, next) => {
    res.send({
        personaje: "Aramis Fuster",
        cita: "Soy ciudadana de un país democrático... ¡Te quieres callar!",
        yt: "https://www.youtube.com/watch?v=yn0DxHz3sJs&ab_channel=JaimelareArchivo",
    }).end();
});

app.get("/cordobes", (req, res, next) => {
    res.send({
        instrucciones: 'Manuel Benitez, "El cordobes"',
        cita: "Se feli, quererte tu mismo a quererte tu mucho",
        yt: "https://www.youtube.com/watch?v=JrNeQiMAcAM&ab_channel=ZetaStaff",
    }).end();
});

app.get("/iglesiaspuga", (req, res, next) => {
    res.send({
        instrucciones: "Dr Iglesias Puga",
        cita: "Es negro, pero al mismo tiempo no es negro. Es americano puro. El tiempo no es negro puro, no no no, no es Michael Jack... No no. No es negro. Es negro, blanco, filipino, Jim Andris y una mezcla de jamaicol. Una cosa rara",
        yt: "https://www.youtube.com/watch?v=I4MZfwqNMaE&ab_channel=yazgar8",
    }).end();
});

app.get("/rajoy/1", (req, res, next) => {
    res.send({
        instrucciones: 'Mariano Rajoy en su prime',
        cita: "Es el vecino el que elige al alcalde y el el alcalde quien quiere que sean los vecinos el alcalde",
        yt: "https://www.youtube.com/watch?v=-H2TnrECM9M&ab_channel=ProgramaV%C3%ADaV",
    }).end();
});

app.get("/rajoy/2", (req, res, next) => {
    res.send({
        instrucciones: "Mariano Rajoy en su prime 2",
        cita: "La ceramica de Talavera no es cosa menor, dicho de otra manera, es cosa mayor",
        yt: "https://www.youtube.com/watch?v=o5TWcntqixw&ab_channel=DavidC.",
    }).end();
});

app.get("/vangaal", (req, res, next) => {
    res.send({
        instrucciones: "Louis Van Gaal",
        cita: "Interpgretación, ¡SIEMPRE NEGATIFA, SIEMPRE NEGATIFA! ¡NUNCA POSITIFA!",
        yt: "www.youtube.com/watch?v=4M-iF_zOTo4&ab_channel=Dcb13",
    }).end();
});

// PETICIONES POST

//FUNCION Genérica de gestión de errores
https: app.use((err, req, res, next) => {
    console.error("ERROR:" + err.stack);
    res.status(500).json({ error: "Error interno del servidor" }).end();
});

app.listen(PORT, () => {
    console.log(
        "\x1b[41m%s\x1b[0m",
        `[server]  🚀 Server listening on port ${PORT} 🚀`
    );
});
