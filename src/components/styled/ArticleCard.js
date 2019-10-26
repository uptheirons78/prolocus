import styled from "styled-components";

export default styled.article`
  margin-top: 2vh;
  padding: 0.7rem;
  box-shadow: ${props => props.theme.bsl};
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-2%);
    box-shadow: ${props => props.theme.bsh};
  }

  .thumbnail {
    width: 100%;

    figure {
      position: relative;
    }
    img {
      width: 100%;
      height: 200px;
    }

    figcaption {
      position: absolute;
      top: 0;
      right: 0;
      background: ${props => props.theme.green};
      color: #fff;
      padding: 0.5rem;
      text-transform: capitalize;
    }
  }

  h6 {
    color: ${props => props.theme.green};
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    color: ${props => props.theme.lightBlack};
    font-size: 1rem;
    text-align: justify;
    margin-top: 1rem;
    line-height: 1.5rem;
  }

  .read-more {
    display: inline-block;
    margin-top: 1rem;
    color: ${props => props.theme.green};
    font-weight: 400;
    svg {
      transform: translate(20%, 15%);
    }
  }
`;
