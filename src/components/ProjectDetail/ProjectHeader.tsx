import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

const BackBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  font-size: 24px;
  margin-left: 10px;
`;

const HeaderBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: ${(props) => props.theme.color.blue};
  transform-origin: 0%;
`;

const ProjectHeader = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const onBackBtnClick = () => {
    navigate("/");
  };

  return (
    <Header>
      <HeaderContainer>
        <BackBtn onClick={onBackBtnClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </BackBtn>
        <HeaderBar style={{ scaleX }} />
      </HeaderContainer>
    </Header>
  );
};

export default ProjectHeader;
