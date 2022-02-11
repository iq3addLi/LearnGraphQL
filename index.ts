/* index.ts */

import express from "express"
import { graphqlHTTP } from "express-graphql"
import { schema } from "./src/schema"
import Resolvers from "./src/resolvers"

const resolvers = new Resolvers()
const app = express()
const graphql = graphqlHTTP({
  schema,
  rootValue: resolvers
})

app.use("/graphql", graphql)
const port = process.env.PORT || 4200;
app.listen(port);

console.log(`🚀 Server ready at http://localhost:4200/graphql`)
