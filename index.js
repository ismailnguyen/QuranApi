const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { generateRandomSurah } = require('./random-surah-generator');

// Import datas from json file
const { data } = require('./datas/quran.english.json');

// Construct a schema, using GraphQL schema language
const typeDefs = importSchema('schema.graphql');

// Provide resolver functions for schema fields
const resolvers = {
  Query: {
    surahs: () => data.surahs,
	surah: (root, args) => data.surahs.filter(surah => surah.number === args.number),
	random: () => generateRandomSurah(data.surahs)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

// Run server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});