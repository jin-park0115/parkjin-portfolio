import { useEffect } from "react";
import styled from "styled-components";

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalBox>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        <PeriodText>
          {Array.isArray(data.period) ? data.period.join(" ~ ") : data.period}
        </PeriodText>
        <h2>{data.title}</h2>
        <SubTitle>{data.subTitle}</SubTitle>
        <SectionTitle>Tech :</SectionTitle>
        <SkillList>
          {data.skill.map((skill, idx) => (
            <Tag key={idx}>{skill}</Tag>
          ))}
        </SkillList>

        <LinkWrap>
          {data.link && (
            <StyledLink
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 프로젝트 보러가기
            </StyledLink>
          )}
          {data.githublink && (
            <StyledLink
              href={data.githublink}
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 Source Code
            </StyledLink>
          )}
        </LinkWrap>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PeriodText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

const SectionTitle = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

const SkillList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "#eee" : "#374151"};
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
`;

const LinkWrap = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
