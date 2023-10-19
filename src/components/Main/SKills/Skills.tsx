import styled from "styled-components";
import MainLayout from "../MainLayout";
import React from "react";

const Header = styled.div`
  margin-bottom: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.color.blue};
`;

const SubTitle = styled.h3`
  font-size: 18px;
`;

const Strong = styled.span`
  border-bottom: 1px solid;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 20px;
`;

const SkillTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

const SkillWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    box-shadow: ${(props) => props.theme.shadow};
  }
`;

const Skills = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <MainLayout ref={ref} order={3}>
      {/*   <Header>
        <TitleContainer>
          <Title>Skills</Title>
          <SubTitle>
            언제나 <Strong>새로운 개발 스택</Strong>을 도전하고,{" "}
            <Strong>효율적인 코드</Strong>를 고민하며,{" "}
            <Strong>언어의 사용 의미</Strong>를 찾기 위해 노력하고 있습니다.
          </SubTitle>
        </TitleContainer>
      </Header> */}
      <SkillContainer>
        <SkillBox>
          <SkillTitle>Frontend</SkillTitle>
          <SkillWrap>
            <img
              alt="html5"
              src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            />
            <img
              alt="css3"
              src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            />
            <img
              alt="javascript"
              src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
            />
            <img
              alt="typescript"
              src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
            />
            <img
              alt="react"
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"
            />
            <img
              alt="redux"
              src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
            />
            <img
              alt="recoil"
              src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"
            />
            <img
              alt="nextdotjs"
              src="https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
            />
            <img
              alt="sass"
              src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
            />
            <img
              alt="tailwindcss"
              src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
            />
            <img
              alt="vuedotjs"
              src="https://img.shields.io/badge/vue-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"
            />
            <img
              alt="reactquery"
              src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"
            />
            <img
              alt="swr"
              src="https://img.shields.io/badge/swr-000000?style=for-the-badge&logo=swr&logoColor=white"
            />
            <img
              alt="reacthookform"
              src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"
            />
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Backend</SkillTitle>
          <SkillWrap>
            <img
              alt="nodedotjs"
              src="https://img.shields.io/badge/node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
            />
            <img
              alt="express"
              src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"
            />
            <img
              alt="firebase"
              src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"
            />
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SkillTitle>DB</SkillTitle>
          <SkillWrap>
            <img
              alt="mongodb"
              src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
            />
            <img
              alt="prisma"
              src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"
            />
            <img
              alt="planetscale"
              src="https://img.shields.io/badge/planetscale-000000?style=for-the-badge&logo=planetscale&logoColor=white"
            />
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Mobile</SkillTitle>
          <SkillWrap>
            <img
              alt="reactnative"
              src="https://img.shields.io/badge/reactnative-61DAFB?style=for-the-badge&logo=react&logoColor=white"
            />
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Control</SkillTitle>
          <SkillWrap>
            <img
              alt="visualstudiocode"
              src="https://img.shields.io/badge/visualstudiocode-5C2D91?style=for-the-badge&logo=visualstudiocode&logoColor=white"
            />
            <img
              alt="git"
              src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"
            />
            <img
              alt="github"
              src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"
            />
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Design</SkillTitle>
          <SkillWrap>
            <img
              alt="adobephotoshop"
              src="https://img.shields.io/badge/adobephotoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"
            />
            <img
              alt="figma"
              src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            />
          </SkillWrap>
        </SkillBox>
      </SkillContainer>
    </MainLayout>
  );
});

export default Skills;
