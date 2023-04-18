import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 28px;
  margin-top: 50px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Text = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  padding: 15px;
  font-size: 18px;
  line-height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Imgs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 390px;
  aspect-ratio: 16/9;
  background-color: rgba(0, 0, 0, 0.1);
`;

const LinkContainer = styled.div``;

const LinkTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const Link = styled.a``;

const Main = styled.div``;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 50px;
`;

const SkillContainer = styled.div``;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Skill = styled.span`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const Parts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

const Part = styled.span``;

const ProjectDetail = () => {
  const project = {
    title: "Project",
    description: "이 프로젝트는 생활의 편리함을 더해줍니다.",
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
    mainDescription:
      "이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다. 이 프로젝트는 생활의 편리함을 더해줍니다.",
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Imgs>
          <Img />
          <Img />
        </Imgs>
        <LinkContainer>
          <LinkTitle>서비스 :</LinkTitle>
          <Link>{project.service}</Link>
        </LinkContainer>
        <LinkContainer>
          <LinkTitle>깃허브 :</LinkTitle>
          <Link>{project.github}</Link>
        </LinkContainer>
      </Header>
      <Main>
        <>
          <SubTitle>기술스택</SubTitle>
          <Box>
            <SkillContainer>
              <Text>프론트엔드</Text>
              <Skills>
                {project.skills.prontend.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </Skills>
            </SkillContainer>
            <SkillContainer>
              <Text>백엔드</Text>
              <Skills>
                {project.skills.backend.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </Skills>
            </SkillContainer>
          </Box>
        </>
        <Description>{project.mainDescription}</Description>
        <>
          <SubTitle>파트</SubTitle>
          <Box>
            <SkillContainer>
              <Text>프론트엔드</Text>
              <Parts>
                {project.part.protend.map((part) => (
                  <Part key={part}>{part}</Part>
                ))}
              </Parts>
            </SkillContainer>
            <SkillContainer>
              <Text>백엔드</Text>
              <Parts>
                {project.part.backend.map((part) => (
                  <Part key={part}>{part}</Part>
                ))}
              </Parts>
            </SkillContainer>
          </Box>
        </>
        <Description>{project.mainDescription}</Description>
      </Main>
    </Container>
  );
};

export default ProjectDetail;
