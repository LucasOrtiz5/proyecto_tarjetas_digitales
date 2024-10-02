const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos del frontend (Angular)
app.use(express.static(path.join(__dirname, '../tarjetas-digitales/dist/tarjetas-digitales')));

// Servir el archivo index.html para todas las rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../tarjetas-digitales/dist/tarjetas-digitales/browser/index.html'));
});

// Configurar el puerto
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
