import { selectThemeMode } from "@/features/AppSettings/selectors";
import { useAppSelector } from "@/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, PropsWithChildren } from "react";
import getSaferTheme from "./getSaferTheme";

const SaferThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeMode = useAppSelector(selectThemeMode);
  const saferTheme = createTheme(getSaferTheme(themeMode));

  return (
    <ThemeProvider theme={saferTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default SaferThemeProvider;
