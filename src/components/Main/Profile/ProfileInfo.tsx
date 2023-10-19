import { Link } from "react-router-dom";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faCube,
  faEnvelope,
  faPhone,
  faUserAlt,
  faV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Info = styled.div`
  display: flex;
  gap: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemTitle = styled.h3`
  align-self: flex-start;
  font-size: 12px;
  padding: 7px 14px;
  border-radius: 30px;
  color: #fff;
  background-color: ${(props) => props.theme.color.blue};
  box-shadow: ${(props) => props.theme.shadow};
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemText = styled.span`
  font-size: 15px;
  letter-spacing: 1px;
`;

const LinkBoxs = styled.div`
  display: flex;
  gap: 5px;
`;

const LinkBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #282828;
    color: #fff;
  }
`;

const ProfileInfo = () => {
  return (
    <Info>
      <Column>
        <ItemTitle>About me</ItemTitle>
        <ItemContainer>
          <Item>
            <FontAwesomeIcon icon={faUserAlt} />
            <ItemText>강경서</ItemText>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faCalendar} />
            <ItemText>1994.07.18</ItemText>
          </Item>
        </ItemContainer>
      </Column>
      <Column>
        <ItemTitle>Contact</ItemTitle>
        <ItemContainer>
          <Item>
            <FontAwesomeIcon icon={faPhone} />
            <ItemText>010-6415-5062</ItemText>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faEnvelope} />
            <ItemText as="a" href="mailto:kks_big@naver.com">
              kks_big@naver.com
            </ItemText>
          </Item>
        </ItemContainer>
      </Column>
      <Column>
        <ItemTitle>Channel</ItemTitle>
        <LinkBoxs>
          <Link to={"https://github.com/kangkyeongseo"}>
            <LinkBox>
              <FontAwesomeIcon icon={faGithub} />
              Github
            </LinkBox>
          </Link>
          <Link
            to={
              "https://www.notion.so/Kangkyeongseo-cbe75d4d06c84ab7aa6de618311bd371"
            }
          >
            <LinkBox>
              <FontAwesomeIcon icon={faCube} />
              Notion
            </LinkBox>
          </Link>
          <Link to={"https://velog.io/@kldream"}>
            <LinkBox>
              <FontAwesomeIcon icon={faV} />
              Velog
            </LinkBox>
          </Link>
        </LinkBoxs>
      </Column>
    </Info>
  );
};

export default ProfileInfo;
