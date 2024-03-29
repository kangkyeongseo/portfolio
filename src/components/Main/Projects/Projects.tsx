import React from "react";
import styled from "styled-components";
import MainLayout from "../MainLayout";
import Project from "./Project";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <MainLayout ref={ref} order={4}>
      <Container>
        <Project id={1} />
        <Project id={2} />
        <Project id={3} />
        <Project id={4} />
      </Container>
    </MainLayout>
  );
});

export default Projects;
