//acessando biblioteca do express
var express = require('express');
//executando a função que está contida na variável express
var app = express();
//passando para o ejs o motor de geração de views
app.set('view engine', 'ejs');

/*----- respondendo uma requisição sem ejs
app.get('/', function(req, res){
    res.send('<html><body><h3>Portal de Notícias</h3></body></html>');
});------ */

//renderizando a view com ejs utilizando o método render
app.get('/tecnologia', function(req, res){
    //buscando a view comforme a chamada do método get
    res.render('secao/tecnologia');
});
app.get('/', function(req, res){
    res.render('home/index');
});
app.get('/admin/formulario', function(req, res){
    res.render('formulario');
});
app.get('/noticia', function(req, res){
    res.render('noticia');
});
//escutando requisição
app.listen(3000, function(req, res){
    console.log('estou ouvindo')
});
