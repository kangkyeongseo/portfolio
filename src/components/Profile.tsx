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
  @media ${(props) => props.theme.media.mobile} {
    display: flex;
    flex-direction: column;
  }

  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: flex-start;
  gap: 10px;
`;

const Box = styled.div``;

const Title = styled.h2`
  @media ${(props) => props.theme.media.mobile} {
    font-size: 20px;
    margin-bottom: 10px;
  }
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const SubTitle = styled.h3`
  @media ${(props) => props.theme.media.mobile} {
    font-size: 15px;
  }
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Intro = styled.p`
  @media ${(props) => props.theme.media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 22px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Item = styled.div`
  @media ${(props) => props.theme.media.mobile} {
    font-size: 12px;
  }
`;

const Text = styled.span`
  margin-left: 10px;
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
      transition: { type: "Tween", duration: 0.7 },
    },
  };
  return (
    <Container variants={containerVars} initial="start" animate="end">
      <Box>
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
      </Box>
      <Box>
        <Items>
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
        </Items>
      </Box>
    </Container>
  );
};

export default Profile;
