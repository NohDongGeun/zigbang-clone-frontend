import React from "react";
import Img from "../Img";
import loadingGif from "../../../assets/img/loading.gif";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Img src={loadingGif} alt={"loading"} />
    </div>
  );
};

export default Loading;
