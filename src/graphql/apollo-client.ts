import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link:new HttpLink({
    uri:' https://liskartdev.indusnettechnologies.com/graphql',
    headers:{
        store:'en',
    },
}),
    cache: new InMemoryCache(),
});

export default client;
