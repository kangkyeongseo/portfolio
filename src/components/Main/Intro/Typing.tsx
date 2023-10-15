import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Text = styled.div`
  @media ${(props) => props.theme.media.mobile} {
    font-size: 24px;
  }
  font-size: 42px;
  white-space: pre-wrap;
`;

const Bar = styled(motion.span)`
  @media ${(props) => props.theme.media.mobile} {
    width: 2px;
    height: 24px;
  }

  display: inline-block;
  width: 3px;
  height: 40px;
  margin-left: 7px;
  background-color: #000000;
  transform: translateY(3px);
`;

const Typing = () => {
  const textArray = [
    "안녕하세요",
    "다양한 시도를 통해\n지식을 쌓아가며",
    "개발자와 사용자에게 최적의\n경험을 전달하고 싶은",
    "프론트엔드 개발자\n강경서입니다.",
  ];

  const [intro, setIntro] = useState("");
  const [order, setOrder] = useState(0);
  const [show, setShow] = useState(true);
  let event: NodeJS.Timeout;

  const typing = (text: string, start: number, increase: boolean) => {
    if (increase && start - 1 === text.length) {
      return Promise.resolve();
    }
    if (!increase && start === 0) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      event = setTimeout(
        () => {
          start = increase ? start + 1 : start - 1;
          setIntro(text.slice(0, start));
          resolve(typing(text, start, increase));
        },
        increase ? 100 : 50
      );
    });
  };

  const typingText = () => {
    typing(textArray[order], 0, true).then(() => {
      setTimeout(() => {
        setShow(false);
      }, 1000);
    });
  };

  const deletText = () => {
    typing(textArray[order], textArray[order].length, false).then(() => {
      setOrder((pre) => (pre + 1) % textArray.length);
      setShow(true);
    });
  };

  useEffect(() => {
    if (show) {
      typingText();
    } else {
      deletText();
    }
    return () => {
      if (event) clearTimeout(event);
    };
  }, [show]);

  const barVars = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Text>
        {intro}
        <Bar variants={barVars} initial="start" animate="end" />
      </Text>
    </>
  );
};

export default Typing;
