import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Header = styled.div``;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-left: 3px solid;
  padding-left: 20px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.color.darkGreen};
  font-size: 32px;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  font-size: 20px;
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;

const SkillBox = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const Frontend = styled(SkillBox)`
  grid-column: 1 /5;
  grid-row: 1 /3;
`;
const Backend = styled(SkillBox)`
  grid-column: 5 /7;
  grid-row: 1 /3;
`;
const Mobile = styled(SkillBox)`
  grid-column: 1 /4;
  grid-row: 3 /4;
`;
const Design = styled(SkillBox)`
  grid-column: 4 /7;
  grid-row: 3 /4;
`;

const SkillTitle = styled(SubTitle)`
  font-weight: bold;
  margin-bottom: 10px;
`;

const SkillWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled.div<{ color: string }>`
  font-size: 20px;
  padding: 7px 10px;
  border-radius: 10px;
  color: #ffffff;
  background-color: ${(props) => props.color};
`;

const Skills = () => {
  return (
    <Container>
      <Header>
        <TitleBox>
          <Title>Skills</Title>
          <SubTitle>새로운 기술에 준비되어있습니다.</SubTitle>
        </TitleBox>
      </Header>
      <SkillContainer>
        <Frontend>
          <SkillTitle>Frontend</SkillTitle>
          <SkillWrap>
            <Skill color="#E76F51">HTML</Skill>
            <Skill color="#0077b6">CSS</Skill>
            <Skill color="#ffb703">Javascript</Skill>
            <Skill color="#0096c7">TypeScript</Skill>
            <Skill color="#48cae4">React</Skill>
            <Skill color="#333333">Next</Skill>
            <Skill color="#0077b6">Recoil</Skill>
            <Skill color="#C56494">Sass</Skill>
            <Skill color="#2a9d8f">Tailwind CSS</Skill>
          </SkillWrap>
        </Frontend>
        <Backend>
          <SkillTitle>Backend</SkillTitle>
          <SkillWrap>
            <Skill color="#6a994e">Node.js</Skill>
            <Skill color="#333333">Express</Skill>
            <Skill color="#386641">MongoDB</Skill>
            <Skill color="#FB8500">Firebase...</Skill>
          </SkillWrap>
        </Backend>
        <Mobile>
          <SkillTitle>Mobile</SkillTitle>
          <SkillWrap>
            <Skill color="#48cae4">React Native</Skill>
          </SkillWrap>
        </Mobile>
        <Design>
          <SkillTitle>Design</SkillTitle>
          <SkillWrap>
            <Skill color="#0077b6">Ps</Skill>
            <Skill color="#ffb703">Ai</Skill>
          </SkillWrap>
        </Design>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
