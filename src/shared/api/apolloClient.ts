import { createHttpLink } from "apollo-link-http";
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client/core'
import {
  loadDevMessages,
  loadErrorMessages,
} from '@apollo/client/dev';

const httpLink = createHttpLink({
  uri: 'https://graphql.anilist.co'
}) 

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache,
  connectToDevTools: true,
});

loadDevMessages();
loadErrorMessages();