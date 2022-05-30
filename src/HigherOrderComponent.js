import React from "react";

const MainComponent = (OriginalComponent) => {
  const HigerOrderComponet = () => {
    return <OriginalComponent name="monika" />;
  };
  return HigerOrderComponet;
};
export default MainComponent;
