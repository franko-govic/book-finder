const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const floorRoutes = require("./routes/floorRoutes");
dotenv.config();
const sectionRoutes = require("./routes/sectionRoutes");
const shelfRoutes = require("./routes/shelfRoutes");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/floors", floorRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/shelves", shelfRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("Error syncing database:", err));
