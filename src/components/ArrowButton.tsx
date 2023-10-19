import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { currentOrderState } from "../atom";

interface ArrowButtonProps {
  order: Number;
}

const Container = styled.div`
  position: absolute;
  bottom: 7vh;
  width: 45px;
  aspect-ratio: 1/1;
  font-size: 30px;
  color: #fff;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ArrowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowMotion = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 45px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ArrowButton = ({ order }: ArrowButtonProps) => {
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);

  const onClick = () => {
    setCurrentOrder(Number(order) + 1);
  };

  const arrowVars = {
    start: { opacity: 0, scale: 0 },
    end: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        repeat: Infinity,
        duration: 2,
        bounce: 0.5,
      },
    },
  };

  return (
    <Container onClick={onClick}>
      <ArrowContainer>
        <FontAwesomeIcon icon={faAngleDown} style={{ zIndex: 10 }} />
        <ArrowMotion variants={arrowVars} initial="start" animate="end" />
      </ArrowContainer>
    </Container>
  );
};

export default ArrowButton;
