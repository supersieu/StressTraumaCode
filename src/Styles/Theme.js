import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#154D99",
    lightBlue: "#6491CC",
    cyan: "#C6FCFF",
    orange: "#FF7003",
    yellow: "#FFE83C",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
