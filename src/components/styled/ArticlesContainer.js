import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.gtc270};
  grid-gap: 1.5rem;
  margin-top: 2vh;
  width: 100%;
`;
