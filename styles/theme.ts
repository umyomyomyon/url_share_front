import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

const createdTheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

const theme = responsiveFontSizes(createdTheme);

export default theme;
