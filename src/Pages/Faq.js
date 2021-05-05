import ScrollTop from "../Components/ScrollTop";
import styled from "styled-components";

function Faq() {
  return (
    <StyledFaq>
      <ScrollTop />
      <h1>Foire aux questions</h1>
      <div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h3>
      </div>
    </StyledFaq>
  );
}
const StyledFaq = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 3rem 0;
  }
  h3 {
    padding: 1rem 0;
  }
`;
export default Faq;
