const express = require('express');
const morgan = require('morgan');
const usuarioRoutes = require('./routes/usuario.routes');
const app = express();
const cors = require('cors');



//middlewares
const corsOptions = {
     origin: "http://localhost:4200",
  };
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//rutas
app.use(usuarioRoutes);

module.exports = app;