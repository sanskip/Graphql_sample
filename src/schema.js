const { makeExecutableSchema }  = require('graphql-tools');
const requireText = require('require-text');
const { merge } = require('lodash');
const bookResolvers =  require('./plugins/book/book.resolver');
const authorResolvers =  require('./plugins/author/author.resolver');
const helloResolvers =  require('./plugins/hello/hello.resolver');
const postResolvers =  require('./plugins/posts/posts.resolver');
const empResolvers =  require('./plugins/emp/emp.resolver');

const resolvers = {};

// Get a GraphQL.js Schema object
const schema =  requireText('./schema.graphql', require);
const bookSchema =  requireText('./plugins/book/book.graphql', require);
const authorSchema =  requireText('./plugins/author/author.graphql', require);
const helloSchema =  requireText('./plugins/hello/hello.graphql', require);
const postSchema =  requireText('./plugins/posts/posts.graphql', require);
const empSchema =  requireText('./plugins/emp/emp.graphql', require);

const executableSchema = makeExecutableSchema({
  typeDefs:[schema,bookSchema,helloSchema,authorSchema,postSchema,empSchema],
  resolvers:merge(resolvers, bookResolvers,helloResolvers,authorResolvers,
    postResolvers,empResolvers),
});

module.exports= executableSchema;
