import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import { FilterAlert } from "../../..";

export default {
  title: "Molecules/FilterAlert",
  component: FilterAlert,
} as Meta;

export const filterAlert: React.FC = () => {
  return (
    <div>
      <FilterAlert
        alert={true}
        onClick={action("onClick")}
        alertHandler={action("alertHandler")}
      />
    </div>
  );
};
