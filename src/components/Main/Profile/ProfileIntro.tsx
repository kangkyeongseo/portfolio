import styled from "styled-components";

const Intro = styled.p`
  font-size: 18px;
  font-weight: lighter;
  letter-spacing: 1px;
  line-height: 28px;
  padding-right: 30px;
`;

const Strong = styled.span`
  font-weight: bold;
  color: #3f72af;
`;

const ProfileIntro = () => {
  return (
    <Intro>
      안녕하세요.
      <br />
      <br />
      저는 웹을 웹디자이너로 일하며 처음으로 접했습니다.
      <br />
      <Strong>사용자의 좋은 경험</Strong> 을 위해 디자인을 고민하던 중
      <br />
      웹을 직접 들여다보게 되면서 프로그래밍 언어와 만나게 되었습니다.
      <br />
      <br />
      덕분에 웹을 개발하면서 항상 작은 부분도 사용자의
      <br />
      <Strong>최적의 경험을 제공</Strong> 하기 위해 노력할 수 있었습니다.
      <br />
      <br />
      앞으로도 <Strong>기본을 중요시하고</Strong> 다양한 시도를 통해 발전을
      꾀하며
      <br />
      <Strong>사용자와 팀을 위한 일을 최우선</Strong> 으로 생각하는
      <br />
      프론트엔드 개발자를 지향하고 있습니다.
    </Intro>
  );
};

export default ProfileIntro;
