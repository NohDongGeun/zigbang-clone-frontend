import React from "react";
import { Loading } from "../..";

interface ISearchBox {
  loading: boolean;
}

const SearchBox: React.FC<ISearchBox> = ({ children, loading = false }) => {
  if (loading) return <Loading />;
  return (
    <div className={"overflow-y-auto flex flex-col h-full"}>{children}</div>
  );
};

export default SearchBox;
