import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Project from "../components/Project";
import Profile from "../components/Profile";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { orderState } from "../atom";

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
  @media ${(props) => props.theme.media.desktop} {
    max-width: 860px;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 760px;
  }
  @media ${(props) => props.theme.media.mobile} {
    max-width: 600px;
  }
`;

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
  width: 25%;
  text-align: center;
  cursor: pointer;
`;

const Nav = styled(motion.div)`
  position: absolute;
  bottom: 0%;
  width: calc(100% / 4);
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

const Profiles = styled.div`
  @media ${(props) => props.theme.media.mobile} {
    display: flex;
    overflow: scroll;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Home = () => {
  const headerContainer = useRef<HTMLDivElement>(null);
  const profileContainer = useRef<HTMLDivElement>(null);
  const skillContainer = useRef<HTMLDivElement>(null);
  const projectContainer = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useRecoilState(orderState);
  const [loading, setLoading] = useState(false);

  const scroll = (e: WheelEvent) => {
    e.preventDefault();
    if (loading) return;
    switch (order) {
      case 1:
        if (e.deltaY > 0) {
          profileContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(2);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
        break;
      case 2:
        if (e.deltaY > 0) {
          skillContainer.current?.scrollIntoView({ behavior: "smooth" });
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
        if (e.deltaY > 0) {
          projectContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(4);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          profileContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(2);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
        break;
      case 4:
        if (e.deltaY < 0) {
          skillContainer.current?.scrollIntoView({ behavior: "smooth" });
          setLoading(true);
          setOrder(3);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
    }
  };

  const onClick = (state: string) => {
    switch (state) {
      case "intro":
        headerContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(1);
        break;
      case "profile":
        profileContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(2);
        break;
      case "skill":
        skillContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(3);
        break;
      case "project":
        projectContainer.current?.scrollIntoView({ behavior: "smooth" });
        setOrder(4);
        break;
    }
  };

  const navVars = {
    start: { x: 0 },
    end: {
      x:
        order === 1
          ? "-150%"
          : order === 2
          ? "-55%"
          : order === 3
          ? "55%"
          : "150%",
      transition: { type: "spring", bounce: 0.1 },
    },
  };

  useEffect(() => {
    document.body.addEventListener("wheel", scroll, { passive: false });
    return () => document.body.removeEventListener("wheel", scroll);
  }, [loading]);

  useEffect(() => {
    switch (order) {
      case 1:
        headerContainer.current?.scrollIntoView();
        break;
      case 2:
        profileContainer.current?.scrollIntoView();
        break;
      case 3:
        skillContainer.current?.scrollIntoView();
        break;
      case 4:
        projectContainer.current?.scrollIntoView();
        break;
    }
  }, []);

  return (
    <>
      <NavContainer>
        <Column onClick={() => onClick("intro")}>Intro</Column>
        <Column onClick={() => onClick("profile")}>Profile</Column>
        <Column onClick={() => onClick("skill")}>Skill</Column>
        <Column onClick={() => onClick("project")}>Project</Column>
        <Nav variants={navVars} initial="start" animate="end" />
      </NavContainer>
      <MainContainer>
        <Container ref={headerContainer}>
          <Header />
        </Container>
        <Container ref={profileContainer}>
          <Profile order={order} />
        </Container>
        <Container ref={skillContainer}></Container>
        <Container ref={projectContainer}>
          <Profiles>
            <Link to="/project">
              <Project />
            </Link>
            <Link to="/project">
              <Project />
            </Link>
            <Link to="/project">
              <Project />
            </Link>
            <Link to="/project">
              <Project />
            </Link>
          </Profiles>
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
