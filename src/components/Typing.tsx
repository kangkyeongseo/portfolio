import { useEffect, useState } from "react";
import styled from "styled-components";

const Name = styled.div``;

const Typing = () => {
  const text = ["안녕하세요.", "감사합니다.", "잘부탁드립니다."];
  const [intro, setIntro] = useState("");
  const [order, setOrder] = useState(0);

  const typing = (order: number) => {
    if (intro.length < text[order].length) {
      setIntro(text[order].slice(0, intro.length + 1));
    } else if (text.length !== order + 1) {
      setIntro("");
      setOrder((pre) => pre + 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (order === text.length) return;
    const interval = setInterval(
      () => typing(order),
      intro.length === text[order].length ? 1000 : 100
    );
    return () => clearInterval(interval);
  }, [intro, order]);

  return <Name>{intro}</Name>;
};

export default Typing;
