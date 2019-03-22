 //criando incorporando a biblioteca http
 var http = require('http');
//criando uma servidor com  createServe da biblioteca http e atribuindo a variável server
 var server = http.createServer( function(req, res){
    //recendo um valor da url como requeste
    var categoria = req.url;
    //verificando o valor retornado pela url
    if(categoria == '/tecnologia'){
        res.end('<html><body>Portal de Tecnologia</body></html>');
    }
    else if(categoria == '/moda'){
        res.end('<html><body>Portal de Moda</body></html>');
    }
    else if(categoria == '/games'){
        res.end('<html><body>Portal de games</body></html>');
    }
    else{
        // retornando uma resposta da requisição
     res.end('<html><body>Portal de Notícias</body></html>');
    }
     
     
 });

 //a variável serve, acessará o método listen que fica escutando na porta dada. 
 server.listen(3000);