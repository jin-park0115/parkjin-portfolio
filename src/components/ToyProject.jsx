import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import styled from "styled-components";
import { toyData } from "../toyData";

const toyDatas = toyData;

const ToyProject = () => {
  return (
    <Wrap>
      <h3>Toy Projects</h3>
      <SwiperStyle
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        loop={false}
      >
        {toyDatas.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Card>
              <div className="action_hover"></div>
              <img src={item.image} alt={`toy-${idx}`} />
            </Card>
          </SwiperSlide>
        ))}
      </SwiperStyle>
    </Wrap>
  );
};

export default ToyProject;

const Wrap = styled.div`
  width: 100%;
`;

const SwiperStyle = styled(Swiper)`
  margin-top: 1rem;
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.buttonBg};
    opacity: 0.5;
    @media (max-width: 430px) {
      width: 6px;
      height: 6px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.linkButton};
    opacity: 1;
  }
`;

const Card = styled.div`
  border-radius: 12px;
  margin-bottom: 2.2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  img {
    border-radius: inherit;
  }
  .action_hover {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: inherit;
  }
  &:hover {
    .action_hover {
      display: flex;
      transition: all 0.8s ease-in-out;
    }
  }
  @media (max-width: 430px) {
    border-radius: 4px;
  }
`;
