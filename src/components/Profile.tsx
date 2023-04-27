import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faCube,
  faEnvelope,
  faPhone,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`;

const Box = styled.div``;

const Header = styled.div`
  grid-column: 1 /4;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

const Thumbnail = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-left: 2px solid;
  padding-left: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Strong = styled.span`
  padding: 2px 4px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
`;

const Intro = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 28px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  margin-bottom: 15px;
`;

const Item = styled.div``;

const Text = styled.span`
  letter-spacing: 1px;
  opacity: 0.6;
  margin-left: 10px;
`;

const LinkBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  a {
    margin-left: 10px;
  }
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
      <Header>
        <Thumbnail src="thumbnail.jpg" />
        <TitleBox>
          <Title>Profile</Title>
          <SubTitle>
            새로운 도전을 시도하는 <Strong>강경서</Strong> 입니다.
          </SubTitle>
        </TitleBox>
      </Header>
      <Box>
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
          <Strong>최적의 경험을 제공</Strong> 하기위해 노력할 수 있었습니다.
          <br />
          <br />
          앞으로도 <Strong>기본을 중요시하고</Strong> 다양한 시도를 통해 발전을
          꾀하며
          <br />
          <Strong>사용자와 팀을 위한 일을 최우선</Strong>으로 생각하는
          <br />
          프론트엔드 개발자를 지향하고 있습니다.
        </Intro>
      </Box>
      <Box>
        <Items>
          <SubTitle>About me</SubTitle>
          <Item>
            <FontAwesomeIcon icon={faUserAlt} />
            <Text>강경서</Text>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faCalendar} />
            <Text>1994.07.18</Text>
          </Item>
        </Items>
        <Items>
          <SubTitle>Contact</SubTitle>
          <Item>
            <FontAwesomeIcon icon={faPhone} />
            <Text>010-6415-5062</Text>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faEnvelope} />
            <Text>kks_big@naver.com</Text>
          </Item>
        </Items>
        <Items>
          <SubTitle>Channel</SubTitle>
          <LinkBox>
            <FontAwesomeIcon icon={faGithub} />
            <Link to={"/"}>Github</Link>
          </LinkBox>
          <LinkBox>
            <FontAwesomeIcon icon={faCube} />
            <Link to={"/"}>Notion</Link>
          </LinkBox>
        </Items>
      </Box>
    </Container>
  );
};

export default Profile;
