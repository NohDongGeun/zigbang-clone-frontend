import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { Filter, initialState } from "./components/organisms/Filter/reducer";

interface ILocation {
  coordinates: number[];
  dist: number[];
}

export const filterVar = makeVar<Filter>(initialState);
export const locationVar = makeVar<ILocation>({
  coordinates: [37.554722, 126.970833],
  dist: [37.58471042042775, 127.1847711145695],
});

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
          location: {
            read() {
              return locationVar();
            },
          },
        },
      },
    },
  }),
});
