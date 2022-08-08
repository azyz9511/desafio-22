const { graphqlHTTP } = require('express-graphql');
const schema = require('../database/models/graphqlProductoSchema');
const productos = require('../controllers/productos');

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: {
        newProduct : productos.newProduct,
        getProducts : productos.getProducts,
        updateProduct : productos.updateProduct,
        deleteProduct : productos.deleteProduct
    },
    graphiql: true
});

module.exports = graphql;