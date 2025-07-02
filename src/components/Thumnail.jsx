import styled from "styled-components";
import thumnail01 from "../assets/thumnail01.png";
import thumnail02 from "../assets/thumnail02.png";
import thumnail03 from "../assets/thumnail03.png";

const cardItems = [
  {
    thumnail: thumnail01,
    rotate: -3,
  },
  {
    thumnail: thumnail02,
    rotate: 2,
  },
  {
    thumnail: thumnail03,
    rotate: -3,
  },
];

const Thumnail = () => {
  return (
    <Container>
      {cardItems.map((item, idx) => (
        <Card className="card" key={idx} $rotate={item.rotate}>
          <img src={item.thumnail} alt="포트폴리오 썸네일" />
        </Card>
      ))}
    </Container>
  );
};

export default Thumnail;

const Container = styled.div`
  width: 130%;
  display: flex;
  gap: 10px;
  &:hover .card {
    transform: rotate(0deg);
  }
  @media (max-width: 1200px) {
    width: 150%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Card = styled.div`
  flex: 1;
  transform: rotate(${(props) => props.$rotate}deg);
  transition: transform 0.3s ease;

  img {
    border-radius: 14px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.08);
    @media (max-width: 425px) {
      border-radius: 4px;
    }
  }
`;
