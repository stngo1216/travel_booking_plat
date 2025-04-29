import fullLogo from "@/assets/images/logo.png";
import { toggleThemeMode } from "@/features/AppSettings";
import { selectThemeMode } from "@/features/AppSettings/selectors";
import { selectCartItemsCount } from "@/features/Cart";
import { logout, selectIsUser } from "@/features/User";
import useNavbarNavigationItems from "@/hooks/useNavbarNavigationItems";
import { useAppDispatch, useAppSelector } from "@/store";
import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import { LogOut, Menu } from "lucide-react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StyledMenuItem, StyledToolbar } from "./StyledElements";
import ToggleColorMode from "./ToggleColorMode";
import styles from "./styles.module.css";
import useSession from "@/hooks/useSession";

const Navbar: FC = () => {
  const themeMode = useSelector(selectThemeMode);
  const cartItemsCount = useAppSelector(selectCartItemsCount);
  const isUser = useAppSelector(selectIsUser);
  const { isLoggedIn } = useSession();
  console.log(isLoggedIn);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { navigationItems } = useNavbarNavigationItems();

  const toggleDrawer = (newIsOpen: boolean) => () => {
    setIsDrawerOpen(newIsOpen);
  };

  const Logout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
    window.location.reload();
  };

  const Login = () => {
    navigate("/login");
  };

  const scrollToSection = (sectionId: string, hasTo: boolean) => {
    if (hasTo) return;
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    } else {
      navigate("");
    }
  };

  const renderNavigationsItems = navigationItems.map((item) => (
    <StyledMenuItem
      key={item.id}
      onClick={() => scrollToSection(item.id, !!item.to)}
    >
      {item.to ? (
        <NavLink to={item.to} className={styles.navLink}>
          <Typography variant="body2" color="text.primary">
            {item.label}
          </Typography>
        </NavLink>
      ) : (
        <Typography variant="body2" color="text.primary">
          {item.label}
        </Typography>
      )}
    </StyledMenuItem>
  ));

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        backgroundColor: "transparent",
        marginTop: 2,
      }}
    >
      <Container>
        <StyledToolbar variant="regular">
          <Stack direction="row" flexGrow={1} ml={-1}>
            <Link to={isUser ? "/" : "/hotels"}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src={fullLogo}
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
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, px: 3 }}>
              {renderNavigationsItems}
            </Box>
          </Stack>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <ToggleColorMode
              mode={themeMode}
              toggleColorMode={() => dispatch(toggleThemeMode())}
            />
            {isUser && (
              <Button
                size="small"
                component={Link}
                to={"/checkout"}
                className={styles.cartBtn}
              >
                <Badge badgeContent={cartItemsCount} color="primary">
                  <ShoppingCart color="primary" />
                </Badge>
              </Button>
            )}
            {isLoggedIn ? (
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={Logout}
                endIcon={<LogOut size={20} />}
              >
                Гарах
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={Login}
                endIcon={<LogOut size={20} />}
              >
                Нэвтрэх
              </Button>
            )}
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className={styles.menuBtn}
            >
              <Menu />
            </Button>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                p={2}
                flexGrow={1}
                sx={{
                  minWidth: "60dvw",
                  backgroundColor: "background.paper",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="end"
                  flexGrow={1}
                  gap={3}
                  mb={2}
                >
                  <ToggleColorMode
                    mode={themeMode}
                    toggleColorMode={() => dispatch(toggleThemeMode())}
                  />
                  {isUser && (
                    <Button
                      size="small"
                      component={Link}
                      to={"/checkout"}
                      className={styles.cartBtn}
                    >
                      <Badge badgeContent={cartItemsCount} color="primary">
                        <ShoppingCart color="primary" />
                      </Badge>
                    </Button>
                  )}
                  {isLoggedIn ? (
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={Logout}
                      endIcon={<LogOut size={20} />}
                    >
                      Гарах
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={Login}
                      endIcon={<LogOut size={20} />}
                    >
                      Нэвтрэх
                    </Button>
                  )}
                </Stack>
                <Divider />
                {renderNavigationsItems}
                <Divider />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
