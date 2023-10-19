import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Thumbnail = styled.img`
  width: 160px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadow};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.color.blue};
`;

const SubTitle = styled.h3`
  font-size: 18px;
`;

const Strong = styled.span`
  border-bottom: 1px solid;
`;

const ProfileHeader = () => {
  return (
    <Header>
      <Thumbnail src="profile.png" />
      <Container>
        <TitleContainer>
          <Title>Profile</Title>
          <SubTitle>
            새로운 도전을 시도하는 <Strong>프론트엔드 개발자 강경서</Strong>{" "}
            입니다.
          </SubTitle>
        </TitleContainer>
        <ProfileInfo />
      </Container>
    </Header>
  );
};

export default ProfileHeader;
