import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 350px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadow};
`;

const Img = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const SubTitle = styled.h4`
  font-size: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.span<{ front: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.front ? "#0077b6" : "#386641")};
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 5px;
  padding: 7px 10px;
`;

const Point = styled.span`
  align-self: flex-start;
  padding: 5px 12px;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.theme.color.blue};
  border-radius: 12px;
  margin: 10px 0px 5px 0px;
`;

const Project = () => {
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
  return (
    <Link to={"/project/1"}>
      <Container whileHover={{ scale: 1.05 }}>
        <Img />
        <Content>
          <TitleContainer>
            <Title>{project.title}</Title>
            <SubTitle>{project.member}</SubTitle>
          </TitleContainer>
          <Description>
            해당 프로젝트는 평소 일상생활속에서 불편함이 있던 이러한 부분을 보다
            편리하게 만들어주기 위해 계획했습니다.
          </Description>
          <Point>Stack</Point>
          <Skills>
            {project.skills.prontend.map((skill) => (
              <Skill front={true} key={skill}>
                {skill}
              </Skill>
            ))}
          </Skills>
          <Skills>
            {project.skills.backend.map((skill) => (
              <Skill front={false} key={skill}>
                {skill}
              </Skill>
            ))}
          </Skills>
        </Content>
      </Container>
    </Link>
  );
};

export default Project;
