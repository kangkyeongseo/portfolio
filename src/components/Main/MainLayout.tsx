import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

interface MainLayoutProp {
  children: React.ReactNode;
}

const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProp>(
  (props, ref) => {
    return <Layout ref={ref}>{props.children}</Layout>;
  }
);

export default MainLayout;
