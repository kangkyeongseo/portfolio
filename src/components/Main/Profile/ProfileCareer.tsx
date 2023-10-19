import styled from "styled-components";

const Career = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h3`
  align-self: flex-start;
  font-size: 12px;
  padding: 7px 14px;
  border-radius: 30px;
  color: #fff;
  background-color: ${(props) => props.theme.color.blue};
  box-shadow: ${(props) => props.theme.shadow};
`;

const CareerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CareerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CareerTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #3f72af;
`;

const CareerDate = styled.span`
  letter-spacing: 2px;
`;

const CareerContent = styled.span`
  font-weight: lighter;
`;

const ProfileCareer = () => {
  const careerArray = [
    {
      title: "(주)와이케이무역",
      startDate: "2019.10",
      endDate: "2022.03",
      content: "디자인팀 과장",
    },
    {
      title: "웅진씽크빅 Udemy [10주완성 프로젝트 캠프]",
      startDate: "2022.06.05",
      endDate: "2022.08.11",
      content: "우수수료상",
    },
  ];
  return (
    <Career>
      <Title>Career</Title>
      <CareerItems>
        {careerArray.map((career) => (
          <CareerItem key={career.title}>
            <CareerTitle>{career.title}</CareerTitle>
            <CareerDate>
              {career.startDate} ~ {career.endDate}
            </CareerDate>
            <CareerContent>{career.content}</CareerContent>
          </CareerItem>
        ))}
      </CareerItems>
    </Career>
  );
};

export default ProfileCareer;
