import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";
import MainPage from "./MainPage";

function App() {
  const [isDark, setIsDark] = useState(false);

  const onToggle = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <ToggleButton onClick={onToggle}>{isDark ? "🌝" : "🌚"}</ToggleButton>
        <MainPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor2};
  color: ${(props) => props.theme.textColor};
`;

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.linkText};
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  right: 25.5%;
  font-size: 2rem;
  @media (max-width: 768px) {
    right: 15%;
  }
  @media (max-width: 435px) {
    right: 5%;
  }
`;
