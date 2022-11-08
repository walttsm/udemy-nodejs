const express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send("<html><body>Portal de Notícias</body></html>")
});
app.get('/tecnologia', function (req, res) {
    res.send("<html><body>Notícias de tecnologia</body></html>")
});

app.get('/moda', (req, res) =>
    res.send("<html><body>Notícias de moda</body></html>")
);

app.get('/beleza', (req, res) =>
    res.send("<html><body>Notícias de beleza</body></html>")
);

app.listen(8888, function () {
    console.log("Servidor iniciado!!");
});