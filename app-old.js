const http = require('http');

//creando el servidor con funciones de NodeJs y escuchando por el puerto 80808
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Fernando',
            edad: 32,
            url: req.url
        }

        //Convirtiendo un objeto en una cadena 
        res.write(JSON.stringify(salida));
        //res.end para finalizar la respuesta
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');