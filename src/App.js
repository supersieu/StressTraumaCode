import GlobalStyle from "./Styles/GlobalStyle";
import styled from "styled-components";
import "./Styles/Fonts/LemonJelly.ttf";
import Theme from "./Styles/Theme";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Application from "./Pages/Application";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Pro from "./Pages/Pro";
import Faq from "./Pages/Faq";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Theme>
      <StyledApp>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/app">
            <Application />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/pro">
            <Pro />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Theme>
  );
}
const StyledApp = styled.div`
  min-height: 100vh;
  width: 100vw;
`;
export default App;
