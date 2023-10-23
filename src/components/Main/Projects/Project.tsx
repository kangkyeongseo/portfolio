import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjectProp {
  id: number;
}

interface Project {
  id: number;
  title: string;
  member: string;
  color: string;
  description: string;
  summary: string;
  folder: string;
  images: { file: string; title: string; thumbnail: boolean }[];
  skills: {
    prontend: string[];
    backend: string[];
  };
  technicals: string[];
  github: string;
  service: string;
}

const Container = styled(motion.div)`
  width: 350px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadow};
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const SubTitle = styled.h4`
  font-size: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.span<{ front: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.front ? "#0077b6" : "#386641")};
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 7px 10px;
`;

const Point = styled.span`
  align-self: flex-start;
  padding: 5px 12px;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.theme.color.blue};
  border-radius: 12px;
  margin: 10px 0px 5px 0px;
`;

const Project = ({ id }: ProjectProp) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Fresh Recipes",
      member: "1인 프로젝트",
      color: "#FF8700",
      description:
        "집에서 요리하기 위해 서는 요리 재료가 필요합니다. 이를 위해 냉장고에 재료를 보관하다 보면 많은 재료들 사이에 사용기한이 끝나갈 때까지 모르는 재료들이 냉장고 쌓이게 될 떄가 있습니다. 이를 위해 냉장고 재료들을 한눈에 확인하고 관리할 수 있는 서비스를 제작해 보았습니다. 재료 추가 및 소진이 가능하고 남은 용량 및 남은 기간을 확인할 수 있습니다. 또한 레시피 등록을 통해 다른 유저들과 레시피를 공유할 수 있습니다.",
      summary: "냉장고의 재료들을 관리하고 레시피를 공유하자, Fresh Recipes",
      folder: "fresh-recipes",
      images: [
        { file: "fresh-recipes-login.gif", title: "로그인", thumbnail: false },
        {
          file: "fresh-recipes-ingredients.gif",
          title: "재료 추가",
          thumbnail: false,
        },
        {
          file: "fresh-recipes-purchase.gif",
          title: "재료 소진 및 구입항목 추가",
          thumbnail: true,
        },
        {
          file: "fresh-recipes-recipe.gif",
          title: "레시피 추가",
          thumbnail: false,
        },
        {
          file: "fresh-recipes-review.gif",
          title: "좋아요 및 리뷰",
          thumbnail: false,
        },
      ],
      skills: {
        prontend: ["ES6", "Pug", "Sass"],
        backend: ["NodeJS", "Express", "MongoDB", "Mongoose"],
      },
      technicals: [
        "유저 관련 페이지(회원가입, 로그인, 마이페이지)",
        "Open Authorization",
        "재료 및 레시피 관련 페이지",
        "레시피 페이지 찜기능 및 댓글기능",
        "REST API 설계",
        "Express와 MongoDB를 이용한 데이터 CRUD",
      ],
      github: "https://github.com/kangkyeongseo/fresh-recipes",
      service: "",
    },
    {
      id: 2,
      title: "Caffeine Station",
      member: "1인 프로젝트",
      color: "#226854",
      description:
        "비싸지는 커피값에 테이크아웃을 하는 커피는 가성비 있는 카페를 자주 찾게 되었습니다. 주변에 어떤 저가형 프렌차이즈 커피가 위치하는지 알고 더 나아가 가격별 프렌차이즈를 필터링하여 지도로 카페의 위치를 표시하고 싶었습니다.",
      summary: "내 주변의 카페를 찾아보자, Caffeine Station",
      folder: "caffeine-station",
      images: [
        {
          file: "caffeine-station-login.gif",
          title: "로그인",
          thumbnail: false,
        },
        { file: "caffeine-station-home.gif", title: "홈", thumbnail: true },
        {
          file: "caffeine-station-search.gif",
          title: "검색",
          thumbnail: false,
        },
        {
          file: "caffeine-station-like.gif",
          title: "찜하기",
          thumbnail: false,
        },
      ],
      skills: {
        prontend: [
          "TypeScript",
          "React",
          "Recoil",
          "ReactHookForm",
          "StyledComponent",
          "Framer",
        ],
        backend: ["NodeJS", "Express", "MongoDB", "Mongoose"],
      },
      technicals: [
        "유저 관련 페이지(회원가입, 로그인, 마이페이지)",
        "Kakao 지도 API",
        "주변의 카페를 가격별(프렌차이즈) 필터링이 가능하고 반경을 조정하여 지도에 표시.",
        "무한 스크롤을 통해 카페 데이터를 표시",
        "카페 찜기능",
        "Recoil를 이용한 전역 상태관리",
      ],
      github: "https://github.com/kangkyeongseo/caffeine-station",
      service: "",
    },
    {
      id: 3,
      title: "Card Diary",
      member: "1인 프로젝트",
      color: "#3B81F6",
      description:
        "일상에서 자주 사용하는 투두 리스트, 다이어리 그리고 메모를 한번에 관리하는 웹페이지를 만들었습니다. 카드 형태로 표시하여 한눈에 관리가 가능한 서비스를 기획했습니다.",
      summary: "투두 리스트, 다이어리 그리고 메모, Card Diary",
      folder: "card-diary",
      images: [
        {
          file: "card-diary-login.gif",
          title: "로그인",
          thumbnail: false,
        },
        {
          file: "card-diary-card.gif",
          title: "카드 등록하기",
          thumbnail: true,
        },
        {
          file: "card-diary-edit-card.gif",
          title: "카드 수정하기",
          thumbnail: false,
        },
        {
          file: "card-diary-list.gif",
          title: "리스트 등록하기",
          thumbnail: false,
        },
        {
          file: "card-diary-edit-list.gif",
          title: "리스트 수정하기",
          thumbnail: false,
        },
        {
          file: "card-diary-category.gif",
          title: "카데고리",
          thumbnail: false,
        },
      ],
      skills: {
        prontend: [
          "TypeScript",
          "Next",
          "React",
          "SWR",
          "ReactHookForm",
          "Tailwind",
        ],
        backend: ["PlanetScale", "Prisma"],
      },
      technicals: [
        "유저 관련 페이지(회원가입, 로그인, 마이페이지)",
        "카드 및 리스트 관련 페이지(생성, 수정, 삭제)",
        "SWR를 이용한 데이터 관리",
        "REST API 설계",
        "PlanetScale과 Prisma를 이용한 데이터 CRUD",
      ],
      github: "https://github.com/kangkyeongseo/card-diary",
      service: "",
    },
    {
      id: 4,
      title: "PoinT",
      member: "4인 프로젝트",
      color: "#2D63EA",
      description:
        "통증 관리 전문가들을 위한 올인원 고객 관리 전문 SaaS, 포인티, 회원 계정관리, 퍼스널 레포트 목록 및 상세 조회 가능하고 센터에서 생성된 그룹 수업을 예약할 수 있는 시스템을 개발했습니다.",
      summary: "Piehealthcare - PoinT, 센터 회원용 웹앱 서비스 제작(모바일)",
      folder: "point",
      images: [
        {
          file: "point-login.gif",
          title: "로그인",
          thumbnail: false,
        },
        {
          file: "point-detail.gif",
          title: "퍼스널 디테일 페이지",
          thumbnail: true,
        },
        {
          file: "point-list.gif",
          title: "퍼스널 리스트 페이지",
          thumbnail: false,
        },
        {
          file: "point-reservation.gif",
          title: "예약 페이지",
          thumbnail: false,
        },
        {
          file: "point-alarm.gif",
          title: "알람 및 마이페이지",
          thumbnail: false,
        },
      ],
      skills: {
        prontend: [
          "TypeScript",
          "React",
          "Vite",
          "Axios",
          "Eslint",
          "SWR",
          "Recoil",
          "Tailwind",
        ],
        backend: [],
      },
      technicals: [
        "SWR를 이용한 데이터 관리",
        "미디어 데이터(이미지, 비디오)를 모달창으로 표시",
        "아카이브 링크(유튜브, 인스타그램, 틱톡)의 메타데이터를 파싱하여 리스트로 표시",
        "통증 데이터를 항목별로 그래프로 표시",
        "카카오톡 공유 API를 사용하여 링크를 공유",
      ],
      github: "https://github.com/pie-sfac/4-19-19px#personal-detail",
      service: "https://4-19-19px-fmny.vercel.app/",
    },
  ];
  const [project, setProject] = useState<Project>();
  const [thumbnail, setThumbnail] = useState("");
  useEffect(() => {
    projects.filter((project) => {
      if (project.id === id) {
        setProject(project);
      }
    });
  }, [id]);
  useEffect(() => {
    project?.images.filter((image) => {
      if (image.thumbnail) {
        setThumbnail(
          `${process.env.PUBLIC_URL}/${project.folder}/${image.file}`
        );
      }
    });
  }, [project]);
  return (
    <Link to={`${process.env.PUBLIC_URL}/project/${id}`}>
      {project && (
        <Container whileHover={{ scale: 1.05 }}>
          <Img src={thumbnail} />
          <Content>
            <TitleContainer>
              <Title>{project.title}</Title>
              <SubTitle>{project.member}</SubTitle>
            </TitleContainer>
            <Description>{project.summary}</Description>
            <Point>Stack</Point>
            <Skills>
              {project.skills.prontend.map((skill) => (
                <Skill front={true} key={skill}>
                  {skill}
                </Skill>
              ))}
            </Skills>
            <Skills>
              {project.skills.backend.map((skill) => (
                <Skill front={false} key={skill}>
                  {skill}
                </Skill>
              ))}
            </Skills>
          </Content>
        </Container>
      )}
    </Link>
  );
};

export default Project;
