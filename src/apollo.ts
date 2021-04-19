import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { Filter, initialState } from "./components/organisms/Filter/reducer";
import { LOCALSTORAGE_TOKEN } from "./constants/constants";
import { setContext } from "@apollo/client/link/context";

interface ILocation {
  coordinates: number[];
  dist: number[];
}
const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);
export const filterVar = makeVar<Filter>(initialState);
export const locationVar = makeVar<ILocation>({
  coordinates: [37.554722, 126.970833],
  dist: [37.58471042042775, 127.1847711145695],
});
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "u-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
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
