import { motion, useScroll, useSpring } from "framer-motion";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentOrderState } from "../../atom";

const NavContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
`;

const NavColumns = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavColumn = styled.div`
  cursor: pointer;
  width: 25%;
  text-align: center;
`;

const NavBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: ${(props) => props.theme.color.blue};
  transform-origin: 0%;
`;

const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);
  const onClick = (state: string) => {
    switch (state) {
      case "intro":
        setCurrentOrder(1);
        break;
      case "profile":
        setCurrentOrder(2);
        break;
      case "skill":
        setCurrentOrder(3);
        break;
      case "project":
        setCurrentOrder(4);
        break;
    }
  };
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <NavContainer>
      <NavColumns>
        <NavColumn onClick={() => onClick("intro")}>Intro</NavColumn>
        <NavColumn onClick={() => onClick("profile")}>Profile</NavColumn>
        <NavColumn onClick={() => onClick("skill")}>Skill</NavColumn>
        <NavColumn onClick={() => onClick("project")}>Project</NavColumn>
        <NavBar style={{ scaleX }} />
      </NavColumns>
    </NavContainer>
  );
};

export default Navigation;
