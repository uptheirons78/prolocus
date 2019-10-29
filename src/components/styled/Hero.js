import styled from "styled-components";

export default styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 50vh;
  position: relative;
  z-index: -1;
  padding-top: 20rem;
  padding-bottom: 2rem;

  @media (max-width: 500px) {
    padding-top: 27rem;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
