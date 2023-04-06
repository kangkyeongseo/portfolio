import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Container = styled.div``;

const Text = styled.span`
  font-size: 42px;
`;

const Bar = styled(motion.span)`
  display: inline-block;
  width: 3px;
  height: 40px;
  background-color: #000000;
`;

const barVars = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      duration: 0.8,
    },
  },
};

const Typing = () => {
  const text = [
    { text: "안녕하세요.", lineBreak: false },
    { text: "다양한 시도를 통해", lineBreak: true },
    { text: "개발자와 사용자에게 ", lineBreak: true },
    { text: "프론트앤드 개발자", lineBreak: true },
  ];
  const textSecond = [
    "지식을 쌓아가며",
    "최적의 경험을 전달하고 싶은",
    "강경서 입니다.",
  ];
  const [intro, setIntro] = useState("");
  const [introSecond, setIntroSecond] = useState("");
  const [order, setOrder] = useState(0);
  const [orderSecond, setOrderSecond] = useState(0);
  const [lineBreak, setLineBreak] = useState(false);

  const typing = (textArray: any, textIntro: string, textOrder: number) => {
    switch (lineBreak) {
      case false:
        if (textIntro.length < textArray[textOrder].text.length) {
          setIntro(textArray[textOrder].text.slice(0, textIntro.length + 1));
        } else if (
          textArray.length !== textOrder + 1 &&
          !textArray[textOrder].lineBreak
        ) {
          setIntro("");
          setOrder((pre) => pre + 1);
        } else if (textArray[textOrder].lineBreak) {
          setLineBreak(true);
          setOrder((pre) => pre + 1);
        } else {
        }
        break;
      case true:
        if (textIntro.length < textArray[textOrder].length) {
          setIntroSecond(textArray[textOrder].slice(0, textIntro.length + 1));
        } else if (text.length !== order) {
          setLineBreak(false);
          setIntro("");
          setIntroSecond("");
          setOrderSecond((pre) => pre + 1);
        } else {
        }

        break;
    }
  };

  useEffect(() => {
    if (lineBreak) return;
    if (order === text.length) return;
    console.log(order, text.length);
    const interval = setInterval(
      () => typing(text, intro, order),
      intro.length === text[order].text.length && !text[order].lineBreak
        ? 1000
        : 100
    );
    return () => clearInterval(interval);
  }, [lineBreak, intro]);

  useEffect(() => {
    if (lineBreak) {
      const interval = setInterval(
        () => typing(textSecond, introSecond, orderSecond),
        introSecond.length === textSecond[orderSecond].length ? 1000 : 100
      );
      return () => clearInterval(interval);
    }
  }, [lineBreak, introSecond]);

  return (
    <Container>
      <Text>{intro}</Text>
      {introSecond.length > 0 ? (
        <>
          <br />
          <Text>{introSecond}</Text>
        </>
      ) : null}
      <Bar variants={barVars} initial="start" animate="end" />
    </Container>
  );
};

export default Typing;
