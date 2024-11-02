const mongoose = require("mongoose");

// Definición del subesquema para los objetos en los arrays
const itemSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

// Definición del subesquema para las propiedades anidadas
const nestedSchema = new mongoose.Schema(
  {
    type: Map,
    of: [itemSchema],
  },
  { _id: false }
);

// Definición del esquema principal con campos dinámicos
const filterSchema = new mongoose.Schema(
  {
    family_name: { type: String, required: true },
    families: {
      type: Map,
      of: [itemSchema],
    },
    transmissions: {
      type: Map,
      of: nestedSchema,
    },
    fuels: {
      type: Map,
      of: new mongoose.Schema(
        {
          type: Map,
          of: nestedSchema,
        },
        { _id: false }
      ),
    },
    lines: {
      type: Map,
      of: new mongoose.Schema(
        {
          type: Map,
          of: new mongoose.Schema(
            {
              type: Map,
              of: nestedSchema,
            },
            { _id: false }
          ),
        },
        { _id: false }
      ),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "filters_collection",
  filterSchema,
  "filters_collection"
);
