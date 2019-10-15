import React from "react";
import { Link } from "gatsby";
// import image from "../images/fake-image.jpg";
import ArticleCard from "../components/styled/ArticleCard";
import { FaLongArrowAltRight } from "react-icons/fa";

const CardEvento = props => {
  const excerpt = props.data.descrizione.descrizione.slice(0, 120);
  return (
    <ArticleCard>
      <div className="thumbnail">
        <figure>
          <img src={props.data.immagine.fluid.src} alt={props.data.titolo} />
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
