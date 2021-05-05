import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import loupe from "../assets/loupe.png";
import styled from "styled-components";
import ScrollTop from "../Components/ScrollTop";

function Pro() {
  return (
    <StyledPro>
      <ScrollTop />
      <div className="search">
        <input type="text" placeholder="Recherche..." />
        <img src={loupe} alt="loupe" />
      </div>
      <MapContainer
        center={[48.833, 2.333]}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </StyledPro>
  );
}
const StyledPro = styled.div`
  padding-top: 10vh;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .search {
    position: absolute;
    background: #fff;
    z-index: 2;
    top: 15vh;
    left: 2rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 5px;
    input {
      outline: none;
      border: none;
      padding: 1rem 2rem;
    }
    img {
      width: 18px;
    }
  }
`;
export default Pro;
