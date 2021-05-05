import styled from "styled-components";
import ScrollTop from "../Components/ScrollTop";

function Blog() {
  return (
    <Container>
      <ScrollTop />
      <h1>Comming soon...</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(245, 247, 251, 0.7);
  display: grid;
  place-items: center;
  h1 {
    font-size: 3.6rem;
  }
`;

export default Blog;
