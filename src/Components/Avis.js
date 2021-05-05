import styled from "styled-components";
import man from "../assets/man.png";
function Avis() {
  return (
    <StyledAvis>
      <div className="text">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          scelerisque blandit risus ut dapibus."
        </p>
      </div>
      <div className="image">
        <img src={man} alt="man" />
        <span>John Doe</span>
      </div>
    </StyledAvis>
  );
}
const StyledAvis = styled.div`
  height: 20rem;
  width: 30rem;
  box-shadow: 0 4px 1rem rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .text p {
    padding: 1rem;
  }
  .image {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    img {
      margin: 0 2rem;
      border-radius: 50%;
    }
  }
`;

export default Avis;
