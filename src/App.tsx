import styled from "styled-components";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useRef } from "react";

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
          setOrder(2);
        }
        break;
      case 2:
        if (e.deltaY > 0) {
          footerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setOrder(3);
        } else {
          headerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setOrder(1);
        }
        break;
      case 3:
        if (e.deltaY < 0) {
          centerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setOrder(2);
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", scroll, { passive: false });
    return () => window.removeEventListener("wheel", scroll);
  }, [order]);

  return (
    <div>
      <Container ref={headerContainer}>
        <Header />
      </Container>
      <Container ref={centerContainer}>
        {" "}
        <Header />
      </Container>
      <Container ref={footerContainer}>
        {" "}
        <Header />
      </Container>
    </div>
  );
}

export default App;
