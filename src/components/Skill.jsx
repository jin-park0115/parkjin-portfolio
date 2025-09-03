import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML & CSS", level: 90, color: "#99649B" },
  { name: "JavaScript", level: 85, color: "#F7DF1E" },
  { name: "React", level: 80, color: "#61DAFB" },
  { name: "TypeScript", level: 75, color: "#3178C6" },
  { name: "Styled-Components", level: 75, color: "#DB7093" },
  { name: "Zustand", level: 65, color: "#FFD400" },
  { name: "Redux", level: 65, color: "#764ABC" },
  { name: "Axios", level: 65, color: "#5A29E4" },
  { name: "Tailwind CSS", level: 50, color: "#38BDF8" },
];

const Skill = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Container ref={ref}>
      <Title>Skills</Title>
      <SkillList>
        {skills.map((skill) => (
          <SkillItem key={skill.name}>
            <SkillName $color={skill.color}>{skill.name}</SkillName>
            <ProgressBar>
              <ProgressFill $level={inView ? skill.level : 0} />
            </ProgressBar>
            <Level>{skill.level}%</Level>
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
};

export default Skill;

const Container = styled.div`
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 1.2rem;
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem 3rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 430px) {
    gap: 1rem 2rem;
  }
`;

const SkillItem = styled.div``;

const SkillName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: ${({ $color }) => $color || "#222"};
`;

const ProgressBar = styled.div`
  background: #e5e7eb;
  border-radius: 999px;
  height: 12px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${({ $level }) => `${$level}%`};
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  transition: width 1.2s ease-in-out;
`;

const Level = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.3rem;
  display: inline-block;
`;
