import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCaretLeft,
  faCircleChevronLeft,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 0px 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 40px;
`;

const BackBtn = styled.button`
  cursor: pointer;
  margin-right: 10px;
  border: none;
  background-color: inherit;
  font-size: 28px;
  &:hover {
    color: red;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 26px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Item = styled.div`
  font-size: 18px;
`;

const Point = styled.span<{ color: string }>`
  display: inline-block;
  padding: 7px 15px;
  font-size: 14px;
  color: #ffffff;
  background-color: ${(props) => props.color};
  border-radius: 15px;
`;

const Row = styled.div<{ space: string }>`
  margin-bottom: ${(props) => props.space};
`;

const Description = styled.div`
  margin-top: 10px;
  padding: 20px;
  font-size: 15px;
  line-height: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Img = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const LinkBox = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const LinkTitle = styled.span`
  margin-right: 10px;
`;

const Link = styled.a`
  cursor: pointer;
  opacity: 0.5;
  text-decoration: underline;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div``;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  padding-left: 10px;
  border-left: 3px solid #000000;
`;

const Skill = styled.span<{ front: boolean }>`
  color: ${(props) => (props.front ? "#0077b6" : "#386641")};
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 7px 10px;
`;

const Parts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  padding-left: 10px;
  border-left: 3px solid #000000;
`;

const Part = styled.span`
  opacity: 0.7;
`;

const ProjectDetail = () => {
  const project = {
    title: "Caffeine Station",
    description:
      "사용자 위치 및 선택한 장소를 기준으로 가까운 카페를 가격대별로 검색합니다.",
    service: "www.project.com",
    github: "github.com",
    skills: {
      prontend: [
        "Javascript",
        "Typescript",
        "React",
        "Recoil",
        "React Router Dom",
        "React Hook Form",
        "Styled Component",
      ],
      backend: ["NodeJS", "Express", "MongoDB", "Mongoose"],
    },
    summary: "",
    part: {
      protend: [
        "회원가입, 로그인, 마이페이지, 비밀번호 변경",
        "카카오맵API를 이용해 불러온 카페정보 나열",
        "커피 가격별로 정한 키워드를 통해 카페정보 나열",
        "현재 위치를 기준으로 거리별 카페정보 나열",
      ],
      backend: ["유저 회원가입 및 로그인", "카페 좋아요 생성 및 삭제"],
    },
  };
  const navigate = useNavigate();
  const onBackBtnClick = () => {
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header>
        <BackBtn onClick={onBackBtnClick}>
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </BackBtn>
        <Title>{project.title}</Title>
      </Header>
      <Row space="50px">
        <Point color="#0077b6">해당 프로젝트는...</Point>
        <Description>{project.description}</Description>
      </Row>
      <Row space="30px">
        <Imgs>
          <Img />
          <Img />
        </Imgs>
      </Row>
      <Row space="50px">
        <Point color="#386641">경험해보세요!</Point>
        <LinkContainer>
          <LinkBox>
            <LinkTitle>
              <FontAwesomeIcon
                icon={faTableColumns}
                style={{ marginRight: 5 }}
              />
              서비스 둘러보기
            </LinkTitle>
            <Link>{project.service}</Link>
          </LinkBox>
          <LinkBox>
            <LinkTitle>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: 5 }} />
              깃허브
            </LinkTitle>
            <Link>{project.github}</Link>
          </LinkBox>
        </LinkContainer>
      </Row>
      <Row space="50px">
        <Point color="#FB8500">README</Point>
        <Description></Description>
      </Row>
      <Row space="50px">
        <SubTitle>기술스택</SubTitle>
        <Box>
          <Column>
            <Item>프론트엔드</Item>
            <Skills>
              {project.skills.prontend.map((skill) => (
                <Skill front={true} key={skill}>
                  {skill}
                </Skill>
              ))}
            </Skills>
          </Column>
          <Column>
            <Item>백엔드</Item>
            <Skills>
              {project.skills.backend.map((skill) => (
                <Skill front={false} key={skill}>
                  {skill}
                </Skill>
              ))}
            </Skills>
          </Column>
        </Box>
      </Row>
      <Row space="50px">
        <SubTitle>파트설명</SubTitle>
        <Box>
          <Column>
            <Item>프론트엔드</Item>
            <Parts>
              {project.part.protend.map((part) => (
                <Part key={part}>{part}</Part>
              ))}
            </Parts>
          </Column>
          <Column>
            <Item>백엔드</Item>
            <Parts>
              {project.part.backend.map((part) => (
                <Part key={part}>{part}</Part>
              ))}
            </Parts>
          </Column>
        </Box>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
