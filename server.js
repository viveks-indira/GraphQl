const express = require("express");
const path = require('path');
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');


const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
  });
const resolverArray=loadFilesSync(path.join(__dirname,'**/*.resolvers.js'));

const schema=makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:resolverArray
})
 
 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, 
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is listning ${PORT}`);
});
