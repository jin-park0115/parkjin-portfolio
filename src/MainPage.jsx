import styled from "styled-components";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Thumnail from "./components/Thumnail";

const MainPage = () => {
  return (
    <Container>
      <Profile />
      <Thumnail />
      <Education />
      <Skill />
      <Projects />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 2.5rem;
  background-color: ${(props) => props.theme.bgColor};
  padding: 1rem 3rem;
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export default MainPage;
