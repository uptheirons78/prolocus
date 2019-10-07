import React from "react";
import { Link } from "gatsby";
import image from "../images/fake-image.jpg";
import ArticleCard from "../components/styled/ArticleCard";

const CardEvento = props => {
  const excerpt = props.data.descrizione.descrizione.slice(0, 120);
  return (
    <ArticleCard>
      <div className="thumbnail">
        <figure>
          <img src={image} alt={props.data.titolo} />
          <figcaption>{props.data.data}</figcaption>
        </figure>
      </div>
      <Link to={`/eventi/${props.data.slug}`}>
        <h6>{props.data.titolo}</h6>
      </Link>
      <p>{excerpt} ...</p>
      <Link className="read-more" to={`/eventi/${props.data.slug}`}>
        Continua a leggere
      </Link>
    </ArticleCard>
  );
};

export default CardEvento;
