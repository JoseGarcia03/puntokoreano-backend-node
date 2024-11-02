const express = require("express");
const swaggerUI = require("swagger-ui-express");
const { connection } = require("./utils/database");
const router = require("./routes/routes");
const specs = require("./swagger/swagger");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.PORT || 5000}`);

  connection();
});
