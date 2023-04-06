import styled from "styled-components";
import Typing from "./Typing";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Typing />
    </Container>
  );
};

export default Header;
