import ScrollTop from "../Components/ScrollTop";
import styled from "styled-components";

function Contact() {
  return (
    <StyledContact>
      <ScrollTop />
      <form action="">
        <div>
          <h2>Envoyer un message</h2>
        </div>
        <div>
          <input type="text" placeholder="Nom" autoComplete="off" />
          <input type="text" placeholder="Prénom" autoComplete="off" />
        </div>
        <div>
          <input type="text" placeholder="Email" autoComplete="off" />
        </div>
        <div>
          <textarea
            name="msg"
            id=""
            cols=""
            rows=""
            autoComplete="off"
            placeholder="Entrer votre message ici.."
          ></textarea>
        </div>
        <div>
          <button>Envoyer</button>
        </div>
      </form>
    </StyledContact>
  );
}
const StyledContact = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  padding-top: 10vh;
  form {
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 4px 2rem rgba(0, 0, 0, 0.1);
    div {
      display: flex;
      width: 50%;
      height: auto;
      margin: 2rem 0;
    }
    div:nth-child(1) {
      margin-top: 2rem;
    }
    div:nth-child(2) {
      flex-wrap: wrap;
      justify-content: space-between;
    }
    div:nth-child(4) {
      height: 6rem;
    }
    div:nth-child(5) {
      justify-content: center;
    }
    input {
      height: 3rem;
      padding: 0 1rem;
      border: none;
      outline: none;
      border-bottom: 1px solid #ccc;
    }
    textarea {
      padding: 1rem;
      resize: none;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      border-bottom: 1px solid #ccc;
    }
    button {
      padding: 1rem 2rem;
      background-color: ${({ theme: { colors } }) => colors.blue};
      color: white;
      border: none;
      outline: none;
      text-decoration: none;
    }
  }
`;
export default Contact;
