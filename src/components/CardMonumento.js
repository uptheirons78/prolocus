import React from "react";
import { Link } from "gatsby";
import ArticleCard from "../components/styled/ArticleCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import DefaultImg from "../images/cards/default/monumenti.jpg";
import styled from "styled-components";

const CardMonumento = props => {
  const excerpt = props.data.descrizione.descrizione.slice(0, 120);

  /** Image: Default or Contentful one */
  const img =
    props.data.immagine !== null ? props.data.immagine.fluid.src : DefaultImg;

  return (
    <MonumentoCard>
      <div className="content">
        <div className="thumbnail">
          <figure>
            <img src={img} alt={props.data.titolo} />
            <figcaption className="caption">{props.data.indirizzo}</figcaption>
          </figure>
        </div>
        <Link to={`/cosa-vedere/${props.data.slug}`}>
          <h6>{props.data.titolo}</h6>
        </Link>
        <p className="info">
          <strong>Orari:</strong> {props.data.orari}
        </p>
        <p>{excerpt} ...</p>
      </div>
      <Link className="read-more" to={`/cosa-vedere/${props.data.slug}`}>
        <span>Leggi tutto </span>
        <span>
          <FaLongArrowAltRight />
        </span>
      </Link>
    </MonumentoCard>
  );
};

export default CardMonumento;

const MonumentoCard = styled(ArticleCard)`
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
  }
`;
