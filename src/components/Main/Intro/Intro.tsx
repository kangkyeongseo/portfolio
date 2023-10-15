import React from "react";
import MainLayout from "../MainLayout";
import Typing from "./Typing";

const Intro = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <MainLayout ref={ref}>
      <Typing />
    </MainLayout>
  );
});

export default Intro;
