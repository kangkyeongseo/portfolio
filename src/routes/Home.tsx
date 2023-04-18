import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Project from "../components/Project";
import Profile from "../components/Profile";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { orderState } from "../atom";

const NavContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
  cursor: pointer;
`;

const Nav = styled(motion.div)`
  position: absolute;
  bottom: 0%;
  width: calc(100% / 3);
  height: 3px;
  background-color: #000000;
`;

const Container = styled.div`
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

const Home = () => {
  const headerContainer = useRef<HTMLDivElement>(null);
  const centerContainer = useRef<HTMLDivElement>(null);
  const footerContainer = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useRecoilState(orderState);
  const [loading, setLoading] = useState(false);

  const scroll = (e: WheelEvent) => {
    e.preventDefault();
    if (loading) return;
    switch (order) {
      case 1:
        if (e.deltaY > 0) {
          centerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(2);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
        break;
      case 2:
        if (e.deltaY > 0) {
          footerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(3);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          headerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(1);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
        break;
      case 3:
        if (e.deltaY < 0) {
          centerContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(2);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
        break;
    }
  };

  const onClick = (state: string) => {
    switch (state) {
      case "Header":
        headerContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(1);
        break;
      case "Center":
        centerContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(2);
        break;
      case "Footer":
        footerContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(3);
        break;
    }
  };

  const navVars = {
    start: { x: 0 },
    end: {
      x: order === 1 ? "-100%" : order === 2 ? 0 : "100%",
      transition: { type: "spring", bounce: 0.1 },
    },
  };

  useEffect(() => {
    document.body.addEventListener("wheel", scroll, { passive: false });
    return () => document.body.removeEventListener("wheel", scroll);
  }, [loading]);

  return (
    <>
      <NavContainer>
        <Column onClick={() => onClick("Header")}>Header</Column>
        <Column onClick={() => onClick("Center")}>Center</Column>
        <Column onClick={() => onClick("Footer")}>Footer</Column>
        <Nav variants={navVars} initial="start" animate="end" />
      </NavContainer>
      <Container ref={headerContainer}>
        <Header />
      </Container>
      <Container ref={centerContainer}>
        <Profile order={order} />
      </Container>
      <Container ref={footerContainer}>
        <Link to="/project">
          <Project />
        </Link>
        <Link to="/project">
          <Project />
        </Link>
        <Link to="/project">
          <Project />
        </Link>
      </Container>
    </>
  );
};

export default Home;
