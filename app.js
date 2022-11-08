var app = require("./config/server");

var rotaHome = require("./app/routes/home")(app);

var rotaNoticias = require("./app/routes/noticias")(app);

var rotaFormularioInclusaoNoticia = require("./app/routes/formulario_inclusao_noticia")(app);

app.listen(8888, function () {
    console.log("Servidor iniciado");
});