import React from "react";
import { Link } from "gatsby";
import ArticleCard from "../components/styled/ArticleCard";
import { FaLongArrowAltRight, FaPhone } from "react-icons/fa";
import DefaultImg from "../images/monumenti-default.jpg";
import styled from "styled-components";

const CardAlbergo = props => {
  const excerpt = props.data.descrizione.descrizione.slice(0, 120);

  /** Image: Default or Contentful one */
  const img =
    props.data.immagine !== null ? props.data.immagine.fluid.src : DefaultImg;

  return (
    <AlbergoCard>
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
        <Link to={`/dove-dormire/${props.data.slug}`}>
          <h6>{props.data.nome}</h6>
        </Link>
        <p className="info">
          <strong>Indirizzo:</strong> {props.data.indirizzo}
        </p>
        <p>{excerpt} ...</p>
      </div>
      <Link className="read-more" to={`/dove-dormire/${props.data.slug}`}>
        <span>Leggi tutto </span>
        <span>
          <FaLongArrowAltRight />
        </span>
      </Link>
    </AlbergoCard>
  );
};

export default CardAlbergo;

const AlbergoCard = styled(ArticleCard)`
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }

  strong {
    color: var(--primary-color-lighter);
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
