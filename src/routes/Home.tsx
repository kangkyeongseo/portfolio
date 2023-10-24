import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Helmet } from "react-helmet";
import { currentOrderState } from "../atom";
import Navigation from "../components/Common/Navigation";
import Intro from "../components/Main/Intro/Intro";
import Profile from "../components/Main/Profile/Profile";
import Skills from "../components/Main/SKills/Skills";
import Projects from "../components/Main/Projects/Projects";

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
  @media ${(props) => props.theme.media.desktop} {
    max-width: 1024px;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 760px;
  }
  @media ${(props) => props.theme.media.mobile} {
    max-width: 600px;
  }
`;

const Profiles = styled.div``;

const Home = () => {
  const introContainer = useRef<HTMLDivElement>(null);
  const profileContainer = useRef<HTMLDivElement>(null);
  const skillContainer = useRef<HTMLDivElement>(null);
  const projectContainer = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useRecoilState(currentOrderState);

  useEffect(() => {
    switch (order) {
      case 1:
        introContainer.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        profileContainer.current?.scrollIntoView({ behavior: "smooth" });

        break;
      case 3:
        skillContainer.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        projectContainer.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [order]);

  return (
    <>
      <Helmet>
        <title>프로트엔드 강경서</title>
      </Helmet>
      <Navigation />
      <MainContainer>
        <Intro ref={introContainer} />
        <Profile ref={profileContainer} />
        <Skills ref={skillContainer} />
        <Projects ref={projectContainer} />
      </MainContainer>
    </>
  );
};

export default Home;
