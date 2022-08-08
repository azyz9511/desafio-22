const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Producto {
        id: Int,
        title: String,
        price: Int,
        thumbnail: String
    }
    input ProductoInput {
        id: Int,
        title: String,
        price: Int,
        thumbnail: String
    }
    type Query {
        getProducts : [Producto]
    }
    type Mutation {
        newProduct (datos: ProductoInput) : String,
        updateProduct (datos: ProductoInput) : String,
        deleteProduct (id: Int) : String
    }
`);

module.exports = schema;