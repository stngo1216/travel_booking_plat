import Loader from "@/components/Loader";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import useGetFeaturedDealsAPI from "../hooks/useGetFeaturedDealsAPI";
import Deal from "./Deal";
import { original } from "@reduxjs/toolkit";

export const featuredDeals = [
  {
    title: "Архангай аялалын багц",
    cityName: "Архангай",
    description:
      "Архангай аймаг нь Монгол орны төв хэсэгт оршдог, байгалийн үзэсгэлэнт газрууд, түүх соёлын дурсгалууд, амралт, аялал жуулчлалын өндөр боломжтой бүс нутаг юм. Тус аймгийн төв нь Цэцэрлэг хот. Доорх нь Архангай аймгийн аяллын онцлох зүйлсийн тойм юм",
    hotelId: 1,
    finalPrice: "1 сая",
    originalRoomPrice: "1 сая",

    hotelName: "УБ-Архангай",
    roomPhotoUrl:
      "https://ublife-cdn-files.sgp1.cdn.digitaloceanspaces.com/img/news/ublife_1527640209.png",
    hotelStarRating: 4,
    children: [
      {
        availability: true,
        capacityOfAdults: 2,
        capacityOfChildren: 1,
        price: "500мянга",
        roomAmenities: [
          {
            name: "Хорго-Тэрхийн цагаан нуур",
            description: "High-speed internet available in all rooms.",
          },
          {
            name: "Тайхар чулуу",
            description: "Flat-screen TV with cable channels.",
          },
          {
            name: "Чулуутын хавцал",
            description: "Individually controlled air conditioning.",
          },
        ],
        roomId: 1,
        roomNumber: 101,
        roomPhotoUrl:
          "https://museum.ar.gov.mn/wp-content/uploads/2024/03/Horgiin-togoo-940x520-1.jpg",
        roomType: "Аялал 1",
      },
    ],
  },
  {
    title: "Баянхонгор аялалын багц",
    cityName: "Баянхонгор",
    description:
      "Баянхонгор аймаг нь Монгол орны баруун өмнөд хэсэгт байрладаг, байгалийн үзэсгэлэнт газар нутаг, түүх, соёлын дурсгал, эмчилгээний рашаан, уул усны шүтлэгтэй аймаг юм. Доорх нь Баянхонгор аймгийн аяллын онцлох зүйлсийн товч, сонирхолтой танилцуулга юм",
    hotelId: 2,
    finalPrice: "1.5 сая",
    originalRoomPrice: "1 сая",

    hotelName: "УБ-Баянхонгор",
    roomPhotoUrl: "https://www.montsame.mn/files/65f7dc3622919.jpeg",
    hotelStarRating: 5,
    children: [
      {
        availability: true,
        capacityOfAdults: 2,
        capacityOfChildren: 1,
        price: "500мянга",
        roomAmenities: [
          {
            name: "Бөөн Цагаан нуур",
            description:
              "Шувуу ажиглагчдын дунд алдартай, олон төрлийн нүүдлийн шувуудын амрах газар.",
          },
          {
            name: "Говийн бүс – Нарийн сухайт, Баянлиг",
            description: "Flat-screen TV with cable channels.",
          },
          {
            name: "Цагаан Агуй",
            description:
              "Хуучин чулуун зэвсгийн үеийн хүн амьдарч байсан түүхт агуй.",
          },
        ],
        roomId: 1,
        roomNumber: 102,
        roomPhotoUrl:
          "https://www.montsame.mn/uploads/content/37138bfa97420564ecae521533e87129.png",
        roomType: "Аялал 1",
      },
    ],
  },
  {
    title: "Баян-өлгий аялалын багц",
    cityName: "Баян-өлгий",
    description:
      "Баян-Өлгий аймаг бол Монголын хамгийн баруун хязгаарт орших, Казах үндэстний соёл, Алтайн сүрлэг уулс, цэвэр байгаль, бүргэдтэй анчид, мөсөн гол, цагаан толгойт сарлаг гээд жинхэнэ өвөрмөц, гайхалтай аялал жуулчлалын бүс нутаг юм.",
    hotelId: 2,
    finalPrice: "1.5 сая",
    originalRoomPrice: "1 сая",

    hotelName: "УБ-Баян-өлгий",
    roomPhotoUrl: "https://www.montsame.mn/files/63beaf2458402.jpeg",
    hotelStarRating: 5,
    children: [
      {
        availability: true,
        capacityOfAdults: 2,
        capacityOfChildren: 1,
        price: "500мянга",
        roomAmenities: [
          {
            name: "Цэнгэл сум – Ховд гол",
            description:
              "Цэвэр устай Ховд голын хөндий, нүүдэлчдийн буурь бүхий үзэсгэлэнт газар.",
          },
          {
            name: "Уулын морин экспедиц ",
            description: "Таван Богдын мөсөн уулыг тойрох",
          },
          {
            name: "Исламын соёл, уламжлалт гэр ахуй",
            description:
              "Казах гэрийн дотор засал, гар урлал (хивс, хатгамал), үндэсний хоол (бешбармак, каз, боорсок) амтлах боломжтой.",
          },
        ],
        roomId: 1,
        roomNumber: 103,
        roomPhotoUrl:
          "https://www.montsame.mn/uploads/content/f25d0d3ce7d2d05446f0124b264edcf1.png",
        roomType: "Аялал 1",
      },
    ],
  },
];
const FeaturedDeals = () => {
  const { isTabletOrLess, isDesktopOrLess } = useMediaQuery();
  // const { featuredDeals, isFetching } = useGetFeaturedDealsAPI();

  const renderFeaturedDeals = featuredDeals.map((deal) => (
    <Deal key={deal.hotelId} deal={deal} />
  ));

  // console.log(featuredDeals);

  const sliderConfigs = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesToShow: isTabletOrLess ? 1 : isDesktopOrLess ? 2 : 3,
    autoplay: true,
  };

  // if (isFetching) return <Loader />;

  return (
    <Container
      id="features deals"
      sx={{ py: { xs: 2, sm: 4 }, overflow: "hidden" }}
    >
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Манай аялалын хөтөлбөрүүд
      </Typography>
      <Slider {...sliderConfigs}>{renderFeaturedDeals}</Slider>
    </Container>
  );
};

export default FeaturedDeals;
