import React from "react";
import { Link } from "gatsby";
import ArticleCard from "../components/styled/ArticleCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import DefaultImg from "../images/cards/default/eventi.jpg";

const CardEvento = props => {
  const excerpt = props.data.descrizione.descrizione.slice(0, 120);

  /** Image: Default or Contentful one */
  const img =
    props.data.immagine !== null ? props.data.immagine.fluid.src : DefaultImg;

  return (
    <ArticleCard style={{ background: "#fff" }}>
      <div className="thumbnail">
        <figure>
          <img src={img} alt={props.data.titolo} />
          <figcaption>{props.data.data}</figcaption>
        </figure>
      </div>
      <Link to={`/eventi/${props.data.slug}`}>
        <h6>{props.data.titolo}</h6>
      </Link>
      <p>{excerpt} ...</p>
      <Link className="read-more" to={`/eventi/${props.data.slug}`}>
        <span>Leggi tutto </span>
        <span>
          <FaLongArrowAltRight />
        </span>
      </Link>
    </ArticleCard>
  );
};

export default CardEvento;
