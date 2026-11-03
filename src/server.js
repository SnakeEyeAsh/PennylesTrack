const express = require('express');
const { exec } = require('child_process');

const app = express();

// VULNERABLE (inyección de comandos): el parámetro "host" se concatena en un comando del sistema
app.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.host, (err, stdout) => {
    res.send(stdout);
  });
});

// VULNERABLE (ejecución de código): se evalúa directamente una entrada del usuario
app.get('/calc', (req, res) => {
  res.send(String(eval(req.query.expr)));
});

app.listen(3000);
const API_URL = "http://api.ejemplo.com/datos";
console.log("Servidor iniciado, API:", API_URL);