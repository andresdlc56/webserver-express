app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//Helper para formatear el texto
hbs.registerHelper('capitalizar', (texto) => {
    //return texto.charAt(0).toUpperCase() + texto.slice(1);
    return texto.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
});