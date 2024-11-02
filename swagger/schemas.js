/**
 * @swagger
 *
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - name
 *        - price
 *        - group
 *        - subgroup
 *        - active
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the Product
 *        name:
 *          type: string
 *          description: The name of the product
 *        price:
 *          type: number
 *          description: The price of the product
 *        group:
 *          type: string
 *          description: The group of the product
 *        subgroup:
 *          type: string
 *          description: The subgroup of the product
 *        stock:
 *          type: integer
 *          description: The stock available for the product
 *        code:
 *          type: string
 *          description: The code of the product
 *        shipping:
 *          type: array
 *          items:
 *            type: string
 *          description: The shipping methods available for the product
 *        images:
 *          type: array
 *          items:
 *            type: string
 *          description: The URLs of images of the product
 *        active:
 *          type: boolean
 *          description: The status of the product
 *      example:
 *        id: 6716efe55416095d23031c3c
 *        name: Guardapolvo
 *        price: 302174
 *        group: chasis
 *        subgroup: semieje
 *        stock: 23
 *        code: 413st36010
 *        shipping: [express, standard, pickup]
 *        images: ["https://i.ibb.co/k1gf12g/guardapolvo.jpg"]
 *        active: true
 */
