import cookImg from "./assets/toy03.png";
import filmImg from "./assets/toy04.png";
import todoImg from "./assets/toy01.png";
import gdImg from "./assets/toy05.png";
import tripImg from "./assets/toy06.png";
import janagganaImg from "./assets/toy07.png";
import kioskImg from "./assets/toy08.png";

export const toyData = [
  {
    image: `${janagganaImg}`,
    link: "https://janaggana.netlify.app/",
    githublink: "https://github.com/jin-park0115/janaggana",
    title: "JanaGGana",
    subTitle: "영어 단어 외우기 웹/앱입니다.",
    period: ["2025.06.23"],
    skill: [
      "Typescript",
      "React",
      "Zustand",
      "Axios",
      "Swiper",
      "Styled-components",
      "FireBase",
    ],
    work: "All",
  },
  {
    image: `${gdImg}`,
    githublink: "https://github.com/jin-park0115/Gdragon-fan",
    title: "GD-FanPage",
    subTitle: "지드래곤 팬이 만든 앨범소개 사이트",
    period: ["2025.06.19", " 2025.06.20"],
    skill: ["React", "Swiper", "Styled-components"],
    work: "All",
  },
  {
    image: `${kioskImg}`,
    link: "https://subtle-heliotrope-d2bbb5.netlify.app/",
    githublink: "",
    title: "jin-kiosk",
    subTitle: "bootstrap 연습과 localstorage를 이용한 kiosk 사이트 입니다.",
    period: ["2025.06.04", "2025.06.17"],
    skill: ["Typescript", "React", "Styled-components", "Bootstrap"],
    work: "All",
  },
  {
    image: `${todoImg}`,
    link: "https://dapper-melomakarona-84e047.netlify.app/",
    githublink: "https://github.com/jin-park0115/todoList",
    title: "todoList",
    subTitle: "bootStrap UI구현한 간단한 TodoApp 입니다.",
    period: ["2025.05.26"],
    skill: ["React", "Bootstrap"],
    work: "All",
  },
  {
    image: `${cookImg}`,
    link: "https://melodic-halva-a4cbb0.netlify.app/",
    githublink: "https://github.com/jin-park0115/cook-recipe",
    title: "cook-recipe",
    subTitle: "외부 API를 활용한 요리 레시피 사이트 입니다.",
    period: ["2024.10.25", "2024.11.02"],
    skill: ["React", "Axios", "Styled-components", "FireBase"],
    work: "All",
  },
  {
    image: `${tripImg}`,
    link: "https://triptalk.vercel.app/",
    githublink: "https://github.com/triptalk-4/triptalk-frontend",
    title: "triptalk",
    subTitle: "여행 경험을 공유하고 연결할 수 있는 사이트 입니다.",
    period: ["2023.09.14", "2023.11.14"],
    skill: ["Typescript", "React", "Redux", "Axios", "Styled-components"],
    work: "3/5",
  },
  {
    image: `${filmImg}`,
    link: "https://film-flame.vercel.app/",
    githublink: "https://github.com/jin-park0115/film",
    title: "Film",
    subTitle: "영화 API를 활용한 영화 사이트 입니다.",
    period: ["2023.06"],
    skill: ["React", "Axios", "Styled-components", "FireBase"],
    work: "All",
  },
];
