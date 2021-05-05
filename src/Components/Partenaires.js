import styled from "styled-components";

export default function Partenaires(props) {
  return (
    <StyledContainer>
      <img src={props.src} alt={props.alt} />
    </StyledContainer>
  );
}

export const StyledContainer = styled.div`
  height: 15rem;
  img {
    width: 20rem;
    height: 15rem;
    object-fit: contain;
  }
`;
