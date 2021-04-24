import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { meQuery } from "../__generated__/meQuery";

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      name
      phone
      verified
    }
  }
`;

export const useMe = () => {
  return useQuery<meQuery>(ME_QUERY, {
    fetchPolicy: "network-only",
  });
};

export const useMeLazy = () => {
  const [meQuery, { data, loading }] = useLazyQuery<meQuery>(ME_QUERY, {
    fetchPolicy: "network-only",
  });
  return {
    meQuery,
    data,
    loading,
  };
};
