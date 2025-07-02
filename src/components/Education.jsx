import styled from "styled-components";

const Education = () => {
  const cardItems = [
    {
      time: "2024 - 졸업예정",
      title: "한국방송통신대학교",
      learn:
        "컴퓨터공학의 핵심 이론과 프로그래밍 실무를 학습하였으며, 다양한 전공 과목을 통해 문제 해결 역량과 개발 기반 지식을 체계적으로 쌓았습니다.",
    },
    {
      time: "2023.04 - 2023.11",
      title: "제로베이스 프론트엔드 스쿨",
      learn:
        "제로베이스 프론트엔드 스쿨에서 React, JavaScript, TypeScript, HTML, CSS 등 웹 개발 전반에 걸친 기술을 집중적으로 학습하였으며, Git을 활용한 팀 프로젝트 경험을 통해 실무 중심의 협업 역량을 쌓았습니다.",
    },
    {
      time: "2018.03 - 2022.02",
      title: "서영대학교",
      learn:
        "호텔외식조리학과 전공을 통해 고객 중심 사고와 팀워크의 중요성을 배우며 서비스 마인드와 커뮤니케이션 역량을 키웠습니다.",
    },
  ];

  return (
    <EducationWrap>
      <Title>Eductaion</Title>
      {cardItems.map((item, idx) => (
        <Card key={idx}>
          <Time>{item.time}</Time>
          <CardTitle>{item.title}</CardTitle>
          <Learn>{item.learn}</Learn>
        </Card>
      ))}
    </EducationWrap>
  );
};

export default Education;

const EducationWrap = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
const Title = styled.p`
  font-weight: bold;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.educationBg};

  &:nth-child(odd) {
    background-color: transparent;
  }
`;

const Time = styled.p`
  font-style: italic;
  font-weight: 300;
  font-size: 0.8rem;
  color: #a8a2a2;
`;

const CardTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  @media (max-width: 430px) {
    font-size: 0.9rem;
  }
`;

const Learn = styled.p`
  font-size: 0.9rem;
  @media (max-width: 430px) {
    font-size: 0.7rem;
  }
`;
