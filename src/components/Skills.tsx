import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Header = styled.div``;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SkillBox = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const SkillWrap = styled.div`
  display: flex;
`;

const Skill = styled.div<{ color: string }>`
  font-size: 18px;
  padding: 7px 10px;
  margin-right: 10px;
  border-radius: 10px;
  color: #ffffff;
  background-color: ${(props) => props.color};
`;

const Skills = () => {
  return (
    <Container>
      <Header>
        <Title>Skills</Title>
      </Header>
      <SkillContainer>
        <SkillBox>
          <SubTitle>Frontend</SubTitle>
          <SkillWrap>
            <Skill color="#E76F51">HTML</Skill>
            <Skill color="#0077b6">CSS</Skill>
            <Skill color="#ffb703">Javascript</Skill>
            <Skill color="#0096c7">TypeScript</Skill>
            <Skill color="#48cae4">React</Skill>
            <Skill color="#333333">Next</Skill>
            <Skill color="#0077b6">Recoil</Skill>
            <Skill color="#2a9d8f">Tailwind CSS</Skill>
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SubTitle>Backend</SubTitle>
          <SkillWrap>
            <Skill color="#6a994e">Node.js</Skill>
            <Skill color="#333333">Express</Skill>
            <Skill color="#386641">MongoDB</Skill>
            <Skill color="#FB8500">Firebase...</Skill>
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SubTitle>Mobile</SubTitle>
          <SkillWrap>
            <Skill color="#48cae4">React Native</Skill>
          </SkillWrap>
        </SkillBox>
        <SkillBox>
          <SubTitle>Design</SubTitle>
          <SkillWrap>
            <Skill color="#0077b6">Ps</Skill>
            <Skill color="#ffb703">Ai</Skill>
          </SkillWrap>
        </SkillBox>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
