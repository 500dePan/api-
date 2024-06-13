
const databaseService = () =>{
    const knex = require('knex')({
        client: 'mysql',
        connection:{
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
        }
    });

    const table ='Productos'

    const crearProducto  = ({Nombre_Producto, marca, precio, presentacion}) => {
        return knex(table).insert({
            Nombre_Producto:Nombre_Producto,
            marca:marca,
            precio:precio,
            presentacion:presentacion
        })
    }

    const obtenerProductos = () => {
        return knex(table).select('*');
    };

    const actualizarProducto = (id, datosActualizados) => {
        return knex(table)
            .where({ id: id })
            .update(datosActualizados);
    };

    return{
        crearProducto,
        obtenerProductos,
        actualizarProducto
    }
}

module.exports = {
    databaseService
}