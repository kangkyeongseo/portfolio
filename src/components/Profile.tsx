import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faPhone,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 22px;
  margin-bottom: 30px;
`;

const Item = styled.div`
  margin-bottom: 10px;
`;

const Text = styled.span`
  margin-left: 5px;
`;

const Box = styled.div`
  margin-bottom: 30px;
`;

const Skills = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Skill = styled.div<{ color: string }>`
  padding: 5px 7px;
  margin-right: 7px;
  border-radius: 5px;
  color: #ffffff;
  background-color: ${(props) => props.color};
`;

interface Prop {
  order: number;
}

const Profile = ({ order }: Prop) => {
  const containerVars = {
    start: { y: 200, opacity: 0 },
    end: {
      y: order === 2 ? 0 : 200,
      opacity: order === 2 ? 1 : 0,
      transition: { type: "Tween", duration: 0.5 },
    },
  };
  return (
    <Container variants={containerVars} initial="start" animate="end">
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
        <Item>
          <FontAwesomeIcon icon={faUserAlt} color="#333333" />
          <Text>강경서</Text>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCalendar} color="#333333" />
          <Text>1994.07.18</Text>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faPhone} color="#333333" />
          <Text>010-6415-5062</Text>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faEnvelope} color="#333333" />
          <Text>kks_big@naver.com</Text>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faGithub} color="#333333" />
          <Text>Github</Text>
        </Item>
      </Column>
      <Column>
        <Title>Skills</Title>
        <Box>
          <SubTitle>Frontend</SubTitle>
          <Skills>
            <Skill color="#E76F51">HTML</Skill>
            <Skill color="#0077b6">CSS</Skill>
            <Skill color="#ffb703">Javascript</Skill>
          </Skills>
          <Skills>
            <Skill color="#0096c7">TypeScript</Skill>
            <Skill color="#48cae4">React</Skill>
            <Skill color="#333333">Next</Skill>
          </Skills>
          <Skills>
            <Skill color="#0077b6">Recoil</Skill>
            <Skill color="#2a9d8f">Tailwind CSS ...</Skill>
          </Skills>
        </Box>
        <Box>
          <SubTitle>Backend</SubTitle>
          <Skills>
            <Skill color="#6a994e">Node.js</Skill>
            <Skill color="#333333">Express</Skill>
          </Skills>
          <Skills>
            <Skill color="#386641">MongoDB</Skill>
            <Skill color="#FB8500">Firebase...</Skill>
          </Skills>
        </Box>
        <Box>
          <SubTitle>Mobile</SubTitle>
          <Skills>
            <Skill color="#48cae4">React Native</Skill>
          </Skills>
        </Box>
        <Box>
          <SubTitle>Design</SubTitle>
          <Skills>
            <Skill color="#0077b6">Ps</Skill>
            <Skill color="#ffb703">Ai</Skill>
          </Skills>
        </Box>
      </Column>
    </Container>
  );
};

export default Profile;
