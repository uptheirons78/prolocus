import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import DefaultImg from "../images/pages/convenzioni.jpg";
import styled from "styled-components";

const CardEvento = props => {
  /** Image: Default or Contentful one */
  const img =
    props.data.immagine !== null ? props.data.immagine.fluid.src : DefaultImg;

  return (
    <ConvenzioniCard>
      <div className="convenzioni-content">
        <div className="thumbnail">
          <figure>
            <img src={img} alt={props.data.nome} />
            <figcaption>{props.data.sconto}</figcaption>
          </figure>
        </div>
        <h6>{props.data.nome}</h6>
        <p className="tipologia">{props.data.tipologia}</p>
        <p>{props.data.descrizione.descrizione}</p>
      </div>
      <div className="convenzioni-bottom">
        <a className="read-more" href={props.data.webPage}>
          <span>Website </span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </a>
      </div>
    </ConvenzioniCard>
  );
};

export default CardEvento;

const ConvenzioniCard = styled.article`
  margin-top: 2vh;
  padding: 0.7rem;
  box-shadow: ${props => props.theme.bsl};
  transition: all 0.35s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2%);
    box-shadow: ${props => props.theme.bsh};
  }

  .convenzioni-content {
    flex: 1;
  }

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
      background: ${props => props.theme.green};
      color: #ffffff;
      padding: 0.5rem;
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

  .tipologia {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: ${props => props.theme.green};
    color: ${props => props.theme.white};
    display: inline-block;
    padding: 0.1rem 0.3rem;
    margin-top: 0;
  }
  p {
    color: ${props => props.theme.lightBlack};
    font-size: 0.9rem;
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
