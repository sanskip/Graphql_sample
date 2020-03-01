const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./db.json');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'application/graphql' }));

  app.use(
    '/graphql',
    graphqlHTTP((request, response, graphQLParams) => ({
        schema: schema,
        graphiql: true,
        context:{db,request},
        pretty: true,
    })),
  );

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');