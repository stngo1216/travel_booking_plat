import saferLogo from "@/assets/images/logo.png";
import loginImg from "@/assets/images/login.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm/LoginForm";

const LoginPage = () => {
  const { isTabletOrLess } = useMediaQuery();

  return (
    <Container
      sx={{ py: { xs: 4, sm: 8 }, maxWidth: { lg: 1400 }, height: "100vh" }}
    >
      <Grid
        container
        height="100%"
        borderRadius={"10px"}
        sx={{ overflow: "hidden" }}
      >
        {!isTabletOrLess && (
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: "100%",
              }}
            >
              <Stack justifyContent="center" alignItems="center" height="100%">
                <img src={loginImg} alt="booking" width="65%" />
              </Stack>
            </Card>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Stack
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{ bgcolor: (theme) => theme.palette.primary.main }}
          >
            <Card sx={{ p: 3, m: 2, maxWidth: "70%" }}>
              <Stack direction="row" justifyContent="center" mb={3} py={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src={saferLogo}
                    width="30px"
                    height="30px"
                    alt="logo of safer"
                  />

                  <Typography
                    variant="body1"
                    sx={{ textDecoration: "none" }}
                    color="text.primary"
                  >
                    MGL Travel
                  </Typography>
                </Box>
              </Stack>
              <LoginForm />
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
