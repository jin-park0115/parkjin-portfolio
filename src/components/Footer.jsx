import styled from "styled-components";
import sign from "../assets/sign.svg";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <Wrap>
      <ImgStyle>
        <img src={sign} alt="parkjin-logo" />
      </ImgStyle>
      <TitleStyle>
        <p>너무나도 성장하고 싶은 저의 포트폴리오를</p>
        <p>끝까지 봐주셔서 감사합니다.</p>
      </TitleStyle>
      <SosicalWrap>
        <MailStyle href="mailto:parkjin0115@naver.com">
          <IoIosMail />
        </MailStyle>
        <GithubStyle
          href="https://github.com/jin-park0115"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </GithubStyle>
        <NotionStyle
          href="https://www.notion.so/2bc5f6d2e76144238d2be0747421af97?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNotion />
        </NotionStyle>
      </SosicalWrap>
    </Wrap>
  );
};
export default Footer;

const iconStyle = `
  display: flex;
  border-radius: 50%;
  padding: 10px;
  font-size: 1.5rem;
  &:hover {
    scale: 1.1;
  }
  transition: all 0.3s ease-in-out;
  @media (max-width: 540px) {
    padding: 8px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;
`;
const ImgStyle = styled.div`
  img {
    ${({ theme }) =>
      theme.mode === "dark" ? "filter: invert(1);" : "filter: invert(0);"}
  }
`;

const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  @media (max-width: 540px) {
    font-size: 0.9rem;
  }
`;

const SosicalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MailStyle = styled.a`
  ${iconStyle}
  color: ${({ theme }) => theme.iconColor};
  background-color: ${({ theme }) => theme.icon};
  border: 1px solid ${({ theme }) => theme.icon};
  @media (max-width: 540px) {
    padding: 8px;
  }
`;

const GithubStyle = styled.a`
  ${iconStyle}
  color: ${({ theme }) => theme.iconColor};
  background-color: ${({ theme }) => theme.icon};
  border: 1px solid ${({ theme }) => theme.icon};
  @media (max-width: 540px) {
    padding: 8px;
  }
`;

const NotionStyle = styled.a`
  ${iconStyle}
  color: ${({ theme }) => theme.iconColor};
  background-color: ${({ theme }) => theme.icon};
  border: 1px solid ${({ theme }) => theme.icon};
  @media (max-width: 540px) {
    padding: 8px;
  }
`;
