import styled from "styled-components";
import profileImg from "../assets/profileImg.png";
const Profile = () => {
  return (
    <ProfileWrap>
      <ImgStyle>
        <img className="profile_img" src={profileImg} alt="박진 프로필" />
      </ImgStyle>
      <NameStyle>Park Jin</NameStyle>
      <IntroStyle>Frontend 개발자.</IntroStyle>
      <WorkLink>Notion</WorkLink>
    </ProfileWrap>
  );
};

export default Profile;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgStyle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  .profile_img {
    border-radius: 50%;
  }
`;

const NameStyle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;

const IntroStyle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const WorkLink = styled.div`
  position: relative;
  display: inline-block;
  padding: 4px 15px;
  border-radius: 9px;
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.linkButton};
  color: ${(props) => props.theme.linkText};
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s;

  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    transition: left 0.4s ease;
    z-index: 0;
  }

  &:hover::after {
    left: 120%;
  }
`;
