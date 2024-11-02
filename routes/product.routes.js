const router = require("express").Router();
const { getProducts } = require("../controllers/product.controller");

/**
 * @swagger
 *
 * /products/get-products:
 *  get:
 *    description: Returns the list of all products
 *    tags:
 *      - Products
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: The list of the products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */
router.get("/get-products/", getProducts);

module.exports = router;
