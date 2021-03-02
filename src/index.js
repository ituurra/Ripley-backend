const app = require("./app");
const { createConnection } = require("./database");

//creamos archivo json.
createConnection();

app.listen(3000);

console.log("server on port", 3000);
