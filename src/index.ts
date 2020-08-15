import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import { connectDatabase } from './services';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers/';
import '../dotenv';

const mount = async (app: Application) => {
  const db = await connectDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res }),
  });

  server.applyMiddleware({ app, path: '/api' });

  app.listen(process.env.PORT);
};

mount(express());
