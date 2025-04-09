const express = require('express');
const path = require('path');
const app = express();
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});