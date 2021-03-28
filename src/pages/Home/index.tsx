import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { filterVar, locationVar } from "../../apollo";
import { Main } from "../../components";
import {
  locationMutation,
  locationMutationVariables,
  locationMutation_filteredLocation_locations,
} from "../../__generated__/locationMutation";

export const Location_Mutation = gql`
  mutation locationMutation($findLocationInput: FindLocationInput!) {
    filteredLocation(input: $findLocationInput) {
      ok
      error
      locations {
        point {
          coordinates
        }
      }
    }
  }
`;

const Home: React.FC = () => {
  const filter = useReactiveVar(filterVar);
  const location = useReactiveVar(locationVar);
  const [count, setCount] = useState<number>(0);
  const [coordinates, setCoordinates] = useState<
    locationMutation_filteredLocation_locations[]
  >();

  const onCompleted = (data: locationMutation) => {
    const {
      filteredLocation: { locations },
    } = data;
    if (locations) {
      setCount(locations.length);
      setCoordinates(locations);
    }
  };

  const [locationMutation, { loading, error, data }] = useMutation<
    locationMutation,
    locationMutationVariables
  >(Location_Mutation, { onCompleted });

  useEffect(() => {
    locationMutation({
      variables: {
        findLocationInput: { ...filter, ...location },
      },
    });
    console.log(data);
  }, [filter, location]);

  return (
    <div>
      <Main
        logged={true}
        name={"shehdrms"}
        rooms={[]}
        count={count}
        point={coordinates}
      />
    </div>
  );
};
export default Home;
