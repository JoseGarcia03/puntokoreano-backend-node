const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Punto Koreano API",
      version: "1.0.0",
      description: "API for managing Punto Koreano",
      contact: {
        name: "Jomersdev",
      },
    },
    servers: [
      {
        url: "https://puntokoreano-1087641765613.us-central1.run.app/api/v1",
        description: "Production server",
      },
    ],
  },
  apis: ["./swagger/schemas.js", "./swagger/tags.js", "./routes/*.js"],
};

const specs = swaggerJSDoc(options);
module.exports = specs;
