const newsRoute = require("express").Router();
const newsController = require("../controllers/newsController");

newsRoute.get("/", newsController.getNews);
newsRoute.post("/create", newsController.create);
newsRoute.put("/update/:id", newsController.update);
newsRoute.delete("/delete/:id", newsController.delete);
newsRoute.get("/details/:id", newsController.getDetails);

module.exports = newsRoute;
