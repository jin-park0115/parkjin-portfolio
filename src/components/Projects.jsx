import { useState } from "react";
import styled from "styled-components";
import { toyData } from "../toyData";
import Modal from "./Modal";

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Container>
      <p className="title">Projects</p>
      <BoxWrap>
        {toyData.map((item, index) => (
          <Card key={index} onClick={() => setSelectedItem(item)}>
            <Title>{item.title}</Title>
            <ImageWrap>
              <img src={item.image} alt={item.title} />
              <HoverOverlay>클릭 시 자세히 보기</HoverOverlay>
            </ImageWrap>
          </Card>
        ))}
      </BoxWrap>
      {selectedItem && (
        <Modal data={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 100%;
  .title {
    font-weight: bold;
  }
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const BoxWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.educationBg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(5) {
    background-color: transparent;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  img {
    display: block;
    border-radius: inherit;
    transition: transform 0.3s ease;
  }

  ${Card}:hover img {
    transform: scale(1.03);
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.6rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  ${Card}:hover & {
    opacity: 1;
  }
`;
