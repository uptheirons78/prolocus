import styled from "styled-components";

export default styled.article`
  margin-top: 2vh;
  padding: 0.7rem;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);

  .thumbnail {
    width: 100%;

    figure {
      position: relative;
    }
    img {
      width: 100%;
    }

    figcaption {
      position: absolute;
      top: 0;
      right: 0;
      background: var(--primary-color);
      color: #fff;
      padding: 0.5rem;
      text-transform: capitalize;
    }
  }

  h6 {
    color: var(--primary-color);
    font-size: 1.3rem;
    line-height: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    color: var(--paragraph-color);
    font-size: 1rem;
    text-align: justify;
    margin-top: 1rem;
    line-height: 1.5rem;
  }

  .read-more {
    display: inline-block;
    margin-top: 1rem;
    background: var(--primary-color);
    color: #fff;
    padding: 0.3rem 0.5rem;
  }
`;
