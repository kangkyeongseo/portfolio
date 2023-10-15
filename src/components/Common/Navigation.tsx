import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { orderState } from "../../atom";

const NavContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
`;

const NavColumns = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavColumn = styled.div<{ fontWeight: string }>`
  cursor: pointer;
  width: 25%;
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
`;

const NavBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: calc(100% / 4);
  height: 3px;
  background-color: #000000;
`;

const Navigation = () => {
  const [order, setOrder] = useRecoilState(orderState);
  const onClick = (state: string) => {
    switch (state) {
      case "intro":
        setOrder(1);
        break;
      case "profile":
        setOrder(2);
        break;
      case "skill":
        setOrder(3);
        break;
      case "project":
        setOrder(4);
        break;
    }
  };

  const navVars = {
    start: { x: 0 },
    end: {
      x:
        order === 1
          ? "0"
          : order === 2
          ? "100%"
          : order === 3
          ? "200%"
          : order === 4
          ? "300%"
          : 0,
      transition: { type: "spring", bounce: 0.1 },
    },
  };

  return (
    <NavContainer>
      <NavColumns>
        <NavColumn
          onClick={() => onClick("intro")}
          fontWeight={order === 1 ? "bold" : "normal"}
        >
          Intro
        </NavColumn>
        <NavColumn
          onClick={() => onClick("profile")}
          fontWeight={order === 2 ? "bold" : "normal"}
        >
          Profile
        </NavColumn>
        <NavColumn
          onClick={() => onClick("skill")}
          fontWeight={order === 3 ? "bold" : "normal"}
        >
          Skill
        </NavColumn>
        <NavColumn
          onClick={() => onClick("project")}
          fontWeight={order === 4 ? "bold" : "normal"}
        >
          Project
        </NavColumn>
        <NavBar variants={navVars} initial="start" animate="end" />
      </NavColumns>
    </NavContainer>
  );
};

export default Navigation;
