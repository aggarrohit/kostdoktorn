import {ApolloClient, InMemoryCache} from '@apollo/client';
const BASE_URL = 'https://ddapi.prod.dietdoctor.com/v1/';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
