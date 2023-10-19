import React from "react";
import MainLayout from "../MainLayout";
import Typing from "./Typing";

const Intro = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <MainLayout ref={ref} order={1}>
      <Typing />
    </MainLayout>
  );
});

export default Intro;
