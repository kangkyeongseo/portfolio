import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  height: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: 3fr 1fr;
  max-width: 800px;
  margin: 0 auto;
`;

const Column = styled.div``;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Intro = styled.p`
  font-size: 18px;
  margin-bottom: 50px;
`;

const Item = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  margin-bottom: 20px;
`;

const Skills = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Skill = styled.div`
  padding: 5px 7px;
  margin-right: 7px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

interface Prop {
  order: number;
}

const Profile = ({ order }: Prop) => {
  return (
    <Container>
      <Column>
        <Title>Profile</Title>
        <Intro>
          안녕하세요.
          <br />
          <br />
          저는 웹을 웹디자이너로 일을 하며 처음으로 접했습니다.
          <br />
          사용자의 좋은 경험을 위해 디자인을 고민하던 중
          <br />
          웹을 직접 드려다보게 되면서 프로그래밍 언어와 만나게 되었습니다.
          <br />
          <br />
          덕분에 웹을 개발하면서 항상 작은 부분도 사용자의
          <br />
          최적의 경험을 제공하기위해 노력할 수 있었습니다.
          <br />
          <br />
          앞으로도 기본을 중요시하고, 다양한 시도를 통해 발전을 꾀하며
          <br />
          사용자와 팀을 위한 일을 최우선으로 생각하는
          <br />
          프론트엔드 개발자를 지향하고 있습니다.
        </Intro>
        <Item>강경서</Item>
        <Item>1994.07.18</Item>
        <Item>010-6415-5062</Item>
        <Item>kks_big@naver.com</Item>
        <Item>Github</Item>
      </Column>
      <Column>
        <Title>Skills</Title>
        <Box>
          <SubTitle>Frontend</SubTitle>
          <Skills>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>Javascript</Skill>
          </Skills>
          <Skills>
            <Skill>TypeScript</Skill>
            <Skill>React</Skill>
            <Skill>Next</Skill>
          </Skills>
          <Skills>
            <Skill>Recoil</Skill>
            <Skill>Tailwind CSS ...</Skill>
          </Skills>
        </Box>
        <Box>
          <SubTitle>Backend</SubTitle>
          <Skills>
            <Skill>Node.js</Skill>
            <Skill>Express</Skill>
          </Skills>
          <Skills>
            <Skill>MongoDB</Skill>
            <Skill>Firebase</Skill>
          </Skills>
        </Box>
        <Box>
          <SubTitle>Mobile</SubTitle>
          <Skills>
            <Skill>React Native</Skill>
          </Skills>
        </Box>
        <Box>
          <SubTitle>Design</SubTitle>
          <Skills>
            <Skill>Ps</Skill>
            <Skill>Ai</Skill>
          </Skills>
        </Box>
      </Column>
    </Container>
  );
};

export default Profile;
