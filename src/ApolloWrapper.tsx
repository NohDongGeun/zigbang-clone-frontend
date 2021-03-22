import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./apollo";

const ApolloWrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
