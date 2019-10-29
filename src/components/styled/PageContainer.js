import styled from "styled-components";

export default styled.section`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -30px;
  margin-bottom: 10vh;
  padding: 5vh 5rem 15vh 5rem;
  background-color: #fff;
  box-shadow: ${props => props.theme.bsl};

  @media screen and (max-width: 600px) {
    padding: 2vh 3rem 10vh 3rem;
    margin-top: -20px;
  }
`;
