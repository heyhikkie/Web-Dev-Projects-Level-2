const app = require("./app")

app.listen(process.env.PORT || 5363, function () {
  console.log("Server started on port : http://localhost:5363");
});
