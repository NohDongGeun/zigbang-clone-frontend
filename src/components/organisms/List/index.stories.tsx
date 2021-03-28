import { ApolloProvider } from "@apollo/client";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import ApolloWrapper from "../../../ApolloWrapper";
import List from "./";

export default {
  title: "Organisms/List",
  component: List,
} as Meta;

// export const list: React.FC = () => {
//   return (
//     <ApolloWrapper>
//       <div className={"w-full sm:w-400 flex flex-col h-screen"}>
//         <List rooms={[]} count={0} pageHandler={action("pageHandler")} />
//       </div>
//     </ApolloWrapper>
//   );
// };
