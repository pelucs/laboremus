import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl9co8xjo05f101ug1do1247j/master",
  cache: new InMemoryCache()
})