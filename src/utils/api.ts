import { ApolloClient, InMemoryCache } from "@apollo/client";

const RICK_MORTY_API = "https://rickandmortyapi.com/graphql";

export const graphqlClient = new ApolloClient({
  uri: RICK_MORTY_API,
  cache: new InMemoryCache(),
});
