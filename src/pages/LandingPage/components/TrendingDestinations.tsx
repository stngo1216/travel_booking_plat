import Loader from "@/components/Loader";
import { Container, Grid, Typography } from "@mui/material";
import useGetTrendingDestinationsAPI from "../hooks/useGetTrendingDestinationsAPI";
import Destination from "./Destination";

export const trendingDestinations = [
  {
    cityId: 1,
    cityName: "Хөвсгөл нуур",
    countryName: "Palestine",
    description:
      "Explore the vibrant city of Ramallah, known for its rich history and cultural diversity. Discover historical landmarks, bustling markets, and enjoy the warmth of Palestinian hospitality.",
    thumbnailUrl:
      "https://news.mn/wp-content/uploads/2020/09/%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB_%D0%BD%D1%83%D1%83%D1%80.jpg",
  },
  {
    cityId: 3,
    cityName: "Хонгорын элс (Говийн их хайрхан)",
    countryName: "United States",
    description:
      "Experience the iconic cityscape of New York, where skyscrapers touch the clouds and diverse cultures converge. Visit famous landmarks, explore Central Park, and indulge in world-class dining.",
    thumbnailUrl:
      "https://www.arav.mn/images/news/main/54eabb7d5164bc5a4cf5e2023529cfcb.jpg",
  },
  {
    cityId: 6,
    cityName: "Орхоны хөндийн байгалийн цогцолборт газар (Өвөрхангай)",
    countryName: "France",
    description:
      "Fall in love with the romantic charm of Paris, the 'City of Lights.' Admire the Eiffel Tower, stroll along the Seine River, and savor delicious pastries in charming cafes.",
    thumbnailUrl:
      "https://resource4.sodonsolution.org/assa/photo/2015/11/4877a22b8e53c766/8f486988fba7b0a6.jpg",
  },
  {
    cityId: 7,
    cityName: "Алтай таван богд уул (Баян-Өлгий)",
    countryName: "Japan",
    description:
      "Immerse yourself in the futuristic cityscape of Tokyo. Discover a perfect blend of traditional temples and modern technology. Experience vibrant street life and exquisite Japanese cuisine.",
    thumbnailUrl: "https://montsame.mn/files/667399f904664.jpeg",
  },
];
const TrendingDestinations = () => {
  const isFetching = false;
  // const { trendingDestinations, isFetching } = useGetTrendingDestinationsAPI();
  console.log(trendingDestinations);
  const renderTrendingDestinations = trendingDestinations.map(
    (destination, index) => (
      <Grid item key={destination.cityId} xs={12} md={6} xl={index > 1 ? 4 : 6}>
        <Destination destination={destination} />
      </Grid>
    )
  );

  if (isFetching) return <Loader />;

  return (
    <Container id="trending destinations" sx={{ py: { xs: 2, sm: 4 } }}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Монголын үзэсгэлэнт газрууд
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderTrendingDestinations}
      </Grid>
    </Container>
  );
};

export default TrendingDestinations;
