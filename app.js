const express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("home/index.ejs")
});

app.get('/formulario_inclusao_noticia', function (req, res) {
    res.render("admin/form_add_noticia");
});

app.get('/noticias', (req, res) =>
    res.render("noticias/noticias")
);

app.get('/beleza', (req, res) =>
    res.send("<html><body>Notícias de beleza</body></html>")
);

app.listen(8888, function () {
    console.log("Servidor iniciado!!");
});