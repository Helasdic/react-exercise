const route = require("express").Router();

// route.get("/", (req, res) => {
//   res.json({
//     message: "Home Page",
//   });
// });

const userRoutes = require("./user");
const newsRoutes = require("./news");

route.use("/news", newsRoutes);
route.use("/users", userRoutes);

module.exports = route;
