import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import ProjectHeader from "../components/ProjectDetail/ProjectHeader";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 920px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.div`
  white-space: pre-wrap;
  line-height: 20px;
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: bold;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  font-size: 26px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e6e6e6;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Point = styled.span<{ color: string }>`
  align-self: flex-start;
  padding: 7px 14px;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.color};
  border-radius: 12px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  margin-bottom: 30px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  gap: 15px;
  padding-left: 10px;
  margin-bottom: 30px;
  border-left: 3px solid #000000;
`;

const Part = styled.span`
  opacity: 0.7;
`;

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  padding: 15px;
  border: 1px solid #e6e6e6;
  a {
    font-size: 18px;
    margin-left: 20px;
    color: inherit;
  }
`;

const ProjectDetail = () => {
  const project = {
    title: "Fresh Recipes",
    member: "1인 프로젝트",
    color: "#FF8700",
    description:
      "집에서 요리하기 위해 서는 요리 재료가 필요합니다. 이를 위해 냉장고에 재료를 보관하다 보면 많은 재료들 사이에 사용기한이 끝나갈 때까지 모르는 재료들이 냉장고 쌓이게 될 떄가 있습니다. 이를 위해 냉장고 재료들을 한눈에 확인하고 관리할 수 있는 서비스를 제작해 보았습니다. 재료 추가 및 소진이 가능하고 남은 용량 및 남은 기간을 확인할 수 있습니다. 또한 레시피 등록을 통해 다른 유저들과 레시피를 공유할 수 있습니다.",
    folder: "fresh-recipes",
    images: [
      { file: "fresh-recipes-login.gif", title: "로그인" },
      { file: "fresh-recipes-ingredients.gif", title: "재료 추가" },
      {
        file: "fresh-recipes-purchase.gif",
        title: "재료 소진 및 구입항목 추가",
      },
      { file: "fresh-recipes-recipe.gif", title: "레시피 추가" },
      { file: "fresh-recipes-review.gif", title: "좋아요 및 리뷰" },
    ],
    skills: {
      prontend: ["ES6", "Pug", "Sass"],
      backend: ["NodeJS", "Express", "MongoDB", "Mongoose"],
    },
    technicals: [
      "회원 로그인 인증 및 정보 변경",
      "Open Authorization",
      "재료 및 레시피의 등록이 가능합니다.",
      "현재 위치를 기준으로 거리별 카페정보 나열",
    ],
    github: "https://github.com/kangkyeongseo/fresh-recipes",
    service: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHeader />
      <Container>
        <TitleContainer>
          <Description>1인 프로젝트</Description>
          <Title>{project.title}</Title>
        </TitleContainer>
        <Section>
          <SubTitle>프로젝트 소개</SubTitle>
          <Description>{project.description}</Description>
        </Section>
        <Section>
          <SubTitle>구현화면</SubTitle>
          <Images>
            {project.images.map((image) => (
              <>
                <Point color={project.color}>{image.title}</Point>
                <Image
                  src={`${process.env.PUBLIC_URL}/${project.folder}/${image.file}`}
                  key={image.file}
                />
              </>
            ))}
          </Images>
        </Section>
        <Section>
          <SubTitle>기술스택</SubTitle>
          <Description>프론트엔드</Description>
          <Skills>
            {project.skills.prontend.map((skill) => (
              <Skill front={true} key={skill}>
                {skill}
              </Skill>
            ))}
          </Skills>
          <Description>백엔드</Description>
          <Skills>
            {project.skills.backend.map((skill) => (
              <Skill front={false} key={skill}>
                {skill}
              </Skill>
            ))}
          </Skills>
        </Section>
        <Section>
          <SubTitle>구현 기능</SubTitle>
          <Parts>
            {project.technicals.map((technical) => (
              <Part key={technical}>{technical}</Part>
            ))}
          </Parts>
        </Section>
        <Section>
          <SubTitle>링크</SubTitle>
          {project.github.length > 0 && (
            <LinkBox>
              <FontAwesomeIcon icon={faGithub} />
              <Link to={project.github}>{project.github}</Link>
            </LinkBox>
          )}
          {project.service.length > 0 && (
            <LinkBox>
              <FontAwesomeIcon icon={faTableColumns} />
              {project.service}
            </LinkBox>
          )}
        </Section>
      </Container>
    </>
  );
};

export default ProjectDetail;
