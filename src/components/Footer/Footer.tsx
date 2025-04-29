import logo from "@/assets/images/logo.png";
import StyledContainer from "@/containers/StyledContainer";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./styles.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";

const Footer: FC = () => {
  const { isMobile } = useMediaQuery();
  return (
    <StyledContainer minHeight="auto">
      <Container
        className={styles.container}
        sx={{ textAlign: { sm: "center", md: "left" } }}
      >
        <Grid
          container
          alignItems="center"
          gap={2}
          justifyContent="space-between"
        >
          <Grid item container xs={12} sm={5.5} direction="column" gap={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={logo} width="30px" height="30px" alt="logo of safer" />

              <Typography
                variant="body1"
                sx={{ textDecoration: "none" }}
                color="text.primary"
              >
                MGL Travel
              </Typography>
            </Box>
            {/* <Typography
              variant="body2"
              color="text.secondary"
              textAlign={isMobile ? "center" : "start"}
            >
              {"Copyright © "}
              <Link
                component={RouterLink}
                to={"https://www.linkedin.com/in/salah-al-din-qerem-83833423a/"}
                target="_blank"
              >
                Salah AlDin Qerem&nbsp;
              </Link>
              {new Date().getFullYear()}
            </Typography> */}
          </Grid>
          <Grid
            item
            container
            justifyContent={isMobile ? "center" : "flex-end"}
            spacing={1}
            xs={12}
            sm={5}
            sx={{ color: "text.secondary" }}
          >
            <IconButton
              color="inherit"
              href="https://www.facebook.com/munkhuu2324/"
              target="_blank"
              aria-label="Facebook"
              sx={{ alignSelf: "center" }}
            >
              <Facebook />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default Footer;
