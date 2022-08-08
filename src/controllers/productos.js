const products = require('../services/productos');

const productos = {
    newProduct : async ({datos}) => {
        const data = await products.addProduct(datos);
        return data;
    },
    getProducts : async () => {
        const data = await products.readProducts();
        return data;
    },
    updateProduct : async ({datos}) => {
        const data = await products.upProduct(datos);
        return data;
    },
    deleteProduct : async ({id}) => {
        const data = await products.delProduct(id);
        return data;
    }
}

module.exports = productos;