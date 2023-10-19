import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ArrowButton from "../ArrowButton";

const Layout = styled.div`
  position: relative;
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

const MotionContainer = styled(motion.div)``;

interface MainLayoutProp {
  children: React.ReactNode;
  order: Number;
}

const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProp>(
  (props, ref) => {
    const containerVars = {
      offscreen: { y: 100, opacity: 0.5 },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "Tween", duration: 0.8 },
      },
    };

    return (
      <Layout ref={ref}>
        <MotionContainer
          variants={containerVars}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          {props.children}
        </MotionContainer>
        {props.order !== 4 && <ArrowButton order={props.order} />}
      </Layout>
    );
  }
);

export default MainLayout;
