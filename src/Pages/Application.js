import styled, { keyframes } from "styled-components";
import Group115 from "../assets/Group115.svg";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.svg";
import HomeMockup from "../assets/HomeMockup.png";
import MapMockup from "../assets/MapMockup.png";
import ResultatMockup from "../assets/ResultatMockup.png";
import questionnaire from "../assets/questionnaire.png";
import calendar from "../assets/calendar.png";
import Humor from "../assets/Humor.png";
import Avis from "../Components/Avis";
import ScrollTop from "../Components/ScrollTop";

function Application() {
  return (
    <StyledApplication>
      <ScrollTop />
      <StyledSection1>
        <div className="container">
          <h1>Application d'orientation sur le</h1>
          <h1>psychotraumatisme</h1>
          <p>
            Le trouble de stress post-traumatique, ou TSPT, désigne un type de
            trouble anxieux sévère qui se manifeste à la suite d'une expérience
            vécue comme traumatisante...
          </p>
          <div>
            <a
              href="https://www.apple.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={applestore} alt="apple store" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.traumapsyinfo.app&gl=FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googleplay} alt="google playstore" />
            </a>
          </div>
        </div>
      </StyledSection1>
      <StyledSection2>
        <div className="section1">
          <h1>Stress & Trauma</h1>
          <p>
            La première application française d'information et de prévention sur
            l'état de stress post-traumatique. Une aide quotidienne pour les
            personnes souffrant de stress post-traumatique, mais également utile
            pour celles qui souhaitent s'informer.
          </p>
        </div>
        <div className="section2">
          <img src={HomeMockup} alt="application page accueil" />
          <div className="blob"></div>
        </div>
      </StyledSection2>
      <StyledSection3>
        <div className="section1">
          <img src={MapMockup} alt="application page carte" />
        </div>
        <div className="section2">
          <h1>Localiser les professionnels</h1>
        </div>
      </StyledSection3>
      <StyledSection4>
        <div className="section1">
          <h1>Suivi personnalisé!</h1>
        </div>
        <div className="section2">
          <img
            src={ResultatMockup}
            alt="application page resultat questionnaire"
          />
          <div>
            <img src={calendar} alt="calendar" />
            <img src={questionnaire} alt="questionnaire" />
            <img src={Humor} alt="humeur" />
          </div>
        </div>
      </StyledSection4>
      <StyledSection5>
        <div className="section1">
          <h1>Avis d'utilisateurs</h1>
        </div>
        <div className="section2">
          <div className="sliderTrack">
            <Avis />
            <Avis />
            <Avis />
            <Avis />
            <Avis />
            <Avis />
            <Avis />
            <Avis />
            <Avis />
            <Avis />
          </div>
        </div>
        <div className="section3">
          <h2>Télécharger Application</h2>
          <div>
            <a
              href="https://www.apple.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={applestore} alt="apple store" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.traumapsyinfo.app&gl=FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googleplay} alt="google playstore" />
            </a>
          </div>
        </div>
      </StyledSection5>
    </StyledApplication>
  );
}

const BlobAnim = keyframes`
  from{
    border-radius: 76% 24% 41% 59% / 56% 80% 20% 44%;
    filter: hue-rotate(0deg);
  }
  to{
    border-radius: 30% 70% 73% 27% / 30% 30% 70% 70%;
    filter: hue-rotate(360deg);
  }
`;
const Scroll = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(calc(5 * -30rem));
  }
`;
const StyledApplication = styled.div`
  width: 100%;
`;
const StyledSection1 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Group115});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-position-x: 100%;
  position: relative;
  .container {
    position: absolute;
    top: 30%;
    left: 10%;
    h1:nth-child(2) {
      color: ${({ theme: { colors } }) => colors.blue};
    }
    p {
      width: clamp(30ch, 50%, 50ch);
      margin: 3rem 0;
    }
    div {
      img {
        height: 50px;
        margin: 0 5px;
      }
    }
  }
`;
const StyledSection2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  .section1 {
    width: 50%;
    height: 100%;
    h1 {
      color: ${({ theme: { colors } }) => colors.blue};
      margin-left: 10vw;
      margin-top: 30vh;
    }
    p {
      margin-left: 10vw;
      margin-top: 2rem;
    }
  }
  .section2 {
    width: 50%;
    height: 100%;
    position: relative;
    display: grid;
    place-items: center;
    img {
      height: 60vh;
    }
    .blob {
      position: absolute;
      height: 80%;
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme: { colors } }) => colors.cyan};
      border-radius: 76% 24% 41% 59% / 56% 80% 20% 44%;
      z-index: -1;
      animation: ${BlobAnim} 15s linear infinite alternate;
    }
  }
`;
const StyledSection3 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  .section2 {
    width: 50%;
    height: 100%;
    h1 {
      color: ${({ theme: { colors } }) => colors.blue};
      margin-left: 10vw;
      margin-top: 30vh;
    }
  }
  .section1 {
    width: 50%;
    height: 100%;
    position: relative;
    display: grid;
    place-items: center;
    img {
      height: 60vh;
    }
  }
`;
const StyledSection4 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  .section1 {
    width: 50%;
    height: 100%;
    h1 {
      color: ${({ theme: { colors } }) => colors.blue};
      margin-left: 10vw;
      margin-top: 30vh;
    }
  }
  .section2 {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    img {
      height: 60vh;
    }
    div {
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 1rem;
      img {
        height: auto;
        width: 150px;
        box-shadow: 0 4px 1rem rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
const StyledSection5 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  .section1 {
    h1 {
      font-family: "Lemon Jelly Personal Use";
      font-size: 5rem;
    }
  }
  .section2 {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    position: relative;
    .sliderTrack {
      width: calc(10 * 30rem);
      display: flex;
      flex-direction: row;
      animation: ${Scroll} 120s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    }
  }
  .section3 {
    margin: 10rem 0;
    h2 {
      text-align: center;
    }
    div {
      img {
        height: 50px;
        margin: 2rem 2rem;
      }
    }
  }
`;

export default Application;
