import React from "react";
import { Link } from "gatsby";
import ArticleCard from "../components/styled/ArticleCard";
import { FaLongArrowAltRight, FaPhone } from "react-icons/fa";
import DefaultImg from "../images/cards/default/dove-mangiare.jpg";
import styled from "styled-components";

const CardRistorante = props => {
  const excerpt = props.data.descrizione.descrizione.slice(0, 120);

  /** Image: Default or Contentful one */
  const img =
    props.data.immagine !== null ? props.data.immagine.fluid.src : DefaultImg;

  return (
    <RistoranteCard>
      <div className="content">
        <div className="thumbnail">
          <figure>
            <img src={img} alt={props.data.nome} />
            <figcaption className="caption">
              <span>
                <FaPhone />{" "}
              </span>
              {props.data.telefono}
            </figcaption>
          </figure>
        </div>
        <Link to={`/dove-mangiare/${props.data.slug}`}>
          <h6>{props.data.nome}</h6>
        </Link>
        <p className="info">
          <strong>Indirizzo:</strong> {props.data.indirizzo}
        </p>
        <p className="info">
          <strong>Orari:</strong> {props.data.orario}
        </p>
        <p>{excerpt} ...</p>
      </div>
      <Link className="read-more" to={`/dove-mangiare/${props.data.slug}`}>
        <span>Leggi tutto </span>
        <span>
          <FaLongArrowAltRight />
        </span>
      </Link>
    </RistoranteCard>
  );
};

export default CardRistorante;

const RistoranteCard = styled(ArticleCard)`
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }

  strong {
    color: ${props => props.theme.green};
  }

  .caption {
    text-transform: none !important;
  }

  .info {
    font-size: 0.9rem;
    margin: 0;
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
    transform: translate(5%, 5%);
  }
`;
