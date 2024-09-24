const express = require ('express');
const app = express();
const path = require ('path');

// express.static es un middleware que configura la ruta de los archivos estáticos.
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


//Config Puerto
const PORT = 3030;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


//Config rutas
const homeRoutes = require('../routes/home.routes');
app.use('/', homeRoutes);
