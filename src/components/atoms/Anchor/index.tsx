import React from "react";

interface IAnchorProps {
  text?: string;
}

const Anchor: React.FC<IAnchorProps> = ({ text }) => {
  return <a>{text}</a>;
};

export default Anchor;
