import styled from "styled-components";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Profile from "./components/Profile";

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
`;

const Column = styled.div`
  cursor: pointer;
`;

const Container = styled.div`
  height: 100vh;
`;

function App() {
  const headerContainer = useRef<HTMLDivElement>(null);
  const centerContainer = useRef<HTMLDivElement>(null);
  const footerContainer = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState(1);

  const scroll = (e: WheelEvent) => {
    e.preventDefault();
    switch (order) {
      case 1:
        if (e.deltaY > 0) {
          centerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(2);
          }, 500);
        }
        break;
      case 2:
        if (e.deltaY > 0) {
          footerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(3);
          }, 500);
        } else {
          headerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(1);
          }, 500);
        }
        break;
      case 3:
        if (e.deltaY < 0) {
          centerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(2);
          }, 500);
        }
        break;
    }
  };

  useEffect(() => {
    console.log(order);
    window.addEventListener("wheel", scroll, { passive: false });
    return () => window.removeEventListener("wheel", scroll);
  }, [order]);

  const onClick = (state: string) => {
    switch (state) {
      case "Header":
        headerContainer.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Center":
        centerContainer.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Footer":
        footerContainer.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <>
      <NavContainer>
        <Column onClick={() => onClick("Header")}>Header</Column>
        <Column onClick={() => onClick("Center")}>Center</Column>
        <Column onClick={() => onClick("Footer")}>Footer</Column>
      </NavContainer>
      <Container ref={headerContainer}>
        <Header />
      </Container>
      <Container ref={centerContainer}>
        <Profile order={order} />
      </Container>
      <Container ref={footerContainer}>
        <Header />
      </Container>
    </>
  );
}

export default App;
