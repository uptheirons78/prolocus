import styled from "styled-components";
import PageContainer from "./PageContainer";

export default styled(PageContainer)`
  @media screen and (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${props => props.theme.green};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  strong {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.green};
    display: block;
  }

  ol {
    padding: 0 1rem;

    li {
      margin: 0.7rem 0;
      text-align: justify;
    }
  }

  ul {
    li {
      margin: 0.7rem 0;
    }
  }
`;
