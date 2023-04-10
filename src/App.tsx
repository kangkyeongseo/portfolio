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
          }, 1000);
        }
        break;
      case 2:
        if (e.deltaY > 0) {
          footerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(3);
          }, 1000);
        } else {
          headerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(1);
          }, 1000);
        }
        break;
      case 3:
        if (e.deltaY < 0) {
          centerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            setOrder(2);
          }, 1000);
        }
        break;
    }
  };

  useEffect(() => {
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
    <div>
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
    </div>
  );
}

export default App;
