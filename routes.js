module.exports = function(app, databaseService){

    app.get('/',(request, response) => {
        response.json({"mensaje": "todo bien"});
    });



    app.post('/mercaderia', (request, response) => {
        const productos = request.body;
        console.log(productos)


        databaseService.crearProducto(productos)
            .then(() => {
                response.json({"mensaje": "se cargo bien :D"});
            }).catch(e => {
                response.status(500).json(e);
            })

            app.get('/mercaderia',(request, response) => {
                response.json({"mensaje": productos});
            });
    });

    app.put('/mercaderia/:id', (request, response) => {
        const id = request.params.id;
        const datosActualizados = request.body;

        databaseService.actualizarProducto(id, datosActualizados)
            .then(() => {
                response.json({"mensaje": "Producto actualizado correctamente"});
            }).catch(e => {
                response.status(500).json(e);
            });
    });

};