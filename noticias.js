// Criando server HTTP
var http = require('http');

var server = http.createServer(function (req, res) {

    var rota = req.url;

    if (rota == "/tecnologia") {
        res.end("<html><body>Notícias de tecnologia</body></html>");
    } else if (rota == "/moda") {
        res.end("<html><body>Notícias de moda</body></html>");
    } else if (rota == "/beleza") {
        res.end("<html><body>Notícias de beleza</body></html>");
    } else {
        res.end("<html><body>Portal de Notícias</body></html>");
    }

});

server.listen(8888);