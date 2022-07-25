const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/schema.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// mongoose connection
mongoose.connect(
  "mongodb+srv://project_mgmt:test1234@cluster0.nvehq.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to database successfully");
});

// middleware
app.use(cors);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("listening on PORT 5000");
});
