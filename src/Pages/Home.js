import styled, { keyframes } from "styled-components";
import { StyledSection1, Svg } from "../Styles/HomeStyled";
import expand from "../assets/expand.svg";
import wave from "../assets/wave.svg";
import HomeMockup from "../assets/HomeMockup.png";
import Evt from "../assets/Evt.png";
import Bilan from "../assets/Bilan.png";
import Partenaires from "../Components/Partenaires";
import ScrollTop from "../Components/ScrollTop";
import { useState, useEffect } from "react";
import { partenairesData } from "./data";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(partenairesData);
  }, []);
  return (
    <StyledHome>
      <ScrollTop />
      <StyledSection1>
        <div className="layer"></div>
        <div className="header">
          <Svg />
        </div>
        <div className="circle">
          <a href="#s2">
            <img src={expand} alt="voir plus" />
          </a>
        </div>
      </StyledSection1>
      <StyledSection2 id="s2">
        <div className="header">
          <h1>Qui sommes nous</h1>
        </div>
        <div className="text">
          <p>
            Stress & Trauma est une association fondée par Nicolas Cazenave,
            Maître de Conférences à l’université Jean Jaures, qui développe la
            première application française d'information et de prévention sur
            l'état de stress post-traumatique. Une aide quotidienne pour les
            personnes souffrant de stress post-traumatique, mais également utile
            pour celles qui souhaitent s'informer.
          </p>
        </div>
        <div className="slider">
          <div className="sliderTrack">
            <div className="part1">
              {data &&
                data.map((e) => (
                  <Partenaires src={e.imgURL} alt={e.title} key={e.id} />
                ))}
            </div>
            <div className="part2">
              {data &&
                data.map((e) => (
                  <Partenaires src={e.imgURL} alt={e.title} key={e.id} />
                ))}
            </div>
          </div>
        </div>
        <div className="line"></div>
      </StyledSection2>
      <StyledSection3>
        <div className="header">
          <h1>Notre application</h1>
        </div>
        <div className="appPhoto">
          <img src={Bilan} alt="blian" />
          <img src={HomeMockup} alt="home" />
          <img src={Evt} alt="evenement" />
        </div>
        <Link to="/app">Découvrir</Link>
      </StyledSection3>
    </StyledHome>
  );
}

export default Home;

const Scroll = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(calc(${partenairesData.length} * -200px));
  }
`;

const StyledHome = styled.div`
  width: 100%;
`;

const StyledSection2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .header {
    padding: 5rem 0;
    h1 {
      font-family: "Lemon Jelly Personal Use";
      font-size: 5rem;
    }
  }
  .text {
    padding: 2rem 0;
    width: clamp(45ch, 50%, 75ch);
    p {
      text-align: justify;
      text-indent: 5ch;
    }
  }
  .slider {
    height: 25rem;
    margin: auto;
    position: relative;
    width: 100%;
    display: grid;
    place-items: center;
    margin: 5rem 0;
    &::before,
    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 15%;
      z-index: 2;
      background: linear-gradient(to right, #fff 0%, transparent 100%);
    }
    &::before {
      top: 0;
      left: 0;
    }
    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }
  }
  .sliderTrack {
    width: calc(${partenairesData.length} * 2 * 200px);
    display: flex;
    flex-direction: row;
    animation: ${Scroll} 120s linear infinite;
    div {
      width: 50%;
      display: flex;
      flex-direction: row;
    }
  }
  .line {
    width: 60%;
    height: 2px;
    background: #ccc;
  }
`;
const StyledSection3 = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(245, 247, 251, 0.7);
  background-image: url(${wave});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position-y: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    padding: 5rem 0;
    h1 {
      font-family: "Lemon Jelly Personal Use";
      font-size: 5rem;
    }
  }
  .appPhoto {
    width: 80%;
    height: 450px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      height: 100%;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    margin: 5rem 0;
    padding: 2rem 2.5rem;
    background-color: ${({ theme: { colors } }) => colors.blue};
    border-radius: 10px;
  }
`;
