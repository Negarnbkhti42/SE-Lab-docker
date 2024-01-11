const ProductsRepository = require(".repositories/productsRepository");

/**
 * Class that ties together the business logic and the data access layer
 */
class ProductsService {
    constructor() {
        this.productsRepository = new ProductsRepository();
    }

    async createProduct(product) {
        const createdProduct = await this.productsRepository.create(product);
        /**
         * Additional validation logic goes here
         */
        return createdProduct;
    }

    async getProductById(productId) {
        const product = await this.productsRepository.findById(productId);
        /**
        * Additional validation logic goes here
        */
        return product;
    }

    async getProducts() {
        const products = await this.productsRepository.findAll();
        /**
         * Additional validation logic goes here
         */
        return products;
    }
}

module.exports = ProductsService;
