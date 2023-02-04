import express from "express";
import PizzeriaRoutes from "./src/resturant/routes.js";
import MenuRoutes from "./src/resturant/routes.js";
import TopicRoutes from "./src/resturant/routes.js";
import PaymentRoutes from "./src/resturant/routes.js";

const PORT = 6200;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/pizzeria", PizzeriaRoutes);
app.use("./menu", MenuRoutes);
app.use("./topics", TopicRoutes);
app.use("./payment", PaymentRoutes);
