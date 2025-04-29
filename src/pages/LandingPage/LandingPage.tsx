import SearchForm from "@/components/SearchForm";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { Container, Link, Stack, Typography } from "@mui/material";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentlyVisitedHotels from "./components/RecentlyVisitedHotels";
import TrendingDestinations from "./components/TrendingDestinations";
import styles from "./style.module.css";

const LandingPage = () => {
  return (
    <StyledContainer id="header" minHeight="auto">
      <Container sx={{ pt: 20 }}>
        <Stack
          spacing={2}
          mb={5}
          sx={{ width: { xs: "100%", sm: "80%" }, mx: "auto" }}
        >
          <Typography variant="h1" className={styles.headerTitle}>
            Аялал нь&nbsp;
            <Typography component="span" variant="h1" color="primary">
              дурсамж&nbsp;
            </Typography>
            бүтээх үүд хаалгыг нээж өгдөг
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Тал нутагт шингэх нарны туяа, цэнхэр тэнгэрийг тольдсон тунгалаг
            нуур, мөнх цаст уулсын сүр хүч — энэ бүхэн бол Монголын байгаль. Энэ
            бол таны сэтгэл амар тайван амьдрах, өөрийгөө дахин нээх, жинхэнэ
            аялал жуулчлалын утгыг мэдрэх газар юм.
          </Typography>
        </Stack>
        {/* <SearchForm /> */}
      </Container>
      <FeaturedDeals />
      <TrendingDestinations />
      {/* <RecentlyVisitedHotels /> */}
    </StyledContainer>
  );
};

export default LandingPage;
