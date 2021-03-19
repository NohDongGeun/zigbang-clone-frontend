import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { Filter, initialState } from "./components/organisms/Filter/reducer";

export const filterVar = makeVar<Filter>(initialState);

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          filter: {
            read() {
              return filterVar();
            },
          },
        },
      },
    },
  }),
});
