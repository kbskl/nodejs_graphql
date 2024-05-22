const express = require("express")
const { graphqlHTTP } = require("express-graphql")

const app = express()
const schema = require("./schema/schema")
require("dotenv").config();
require('./db/connection');

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true  
}))

app.listen(3000, () => console.log("Server started..."))