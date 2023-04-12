import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 5fr 4fr;
  width: 400px;
  height: 450px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
`;

const Img = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
  margin-bottom: 10px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.div<{ color: string }>`
  padding: 5px 7px;
  margin-right: 7px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: #ffffff;
  background-color: ${(props) => props.color};
`;
const Project = () => {
  return (
    <Container>
      <Img />
      <Content>
        <Title>프로젝트 이름</Title>
        <Description>
          해당 프로젝트는 평소 일상생활속에서 불편함이 있던 이러한 부분을 보다
          편리하게 만들어주기 위해 계획했습니다.
        </Description>
        <Skills>
          <Skill color="#48cae4">React</Skill>
          <Skill color="#0096c7">TypeScript</Skill>
          <Skill color="#6a994e">Node.js</Skill>
          <Skill color="#333333">Express</Skill>
          <Skill color="#386641">MongoDB</Skill>
        </Skills>
      </Content>
    </Container>
  );
};

export default Project;
