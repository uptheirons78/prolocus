import React from "react";
import { Link } from "gatsby";
import { SectionTitle, SectionSubTitle } from "./styled/Typography";
import Container from "./styled/Container";
import styled from "styled-components";
import image from "../images/fake-image.jpg";
import { items } from "../data/data";

const Mosaic = () => {
  return (
    <SectionDiscoverUs>
      <Container>
        <SectionTitle>Vieni a trovarci</SectionTitle>
        <SectionSubTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
          reprehenderit adipisci.
        </SectionSubTitle>
        <div className="grid-container">
          {items.map(item => (
            <div
              className="grid-item"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <Link to={item.url}>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </SectionDiscoverUs>
  );
};

export default Mosaic;

const SectionDiscoverUs = styled.section`
  padding: 3vh 0;

  .grid-container {
    margin: 3vh auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 15rem);
    grid-gap: 0.5rem;


    @media screen and (max-width: 820px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 15rem);
    }
    @media screen and (max-width: 501px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 15rem);
    }

    .grid-item {
      /* background-image: url(${image}); */
      background-size: cover;
      background-position: center;
      position: relative;

      .content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        width: 100%;
        height: 25%;
        transition: all 0.5s ease;
        color: var(--white);
        padding: 1rem 1.5rem;
        background-color: rgba(0, 0, 0, 0);

        h4 {
          display: inline-block;
          color: #fff;
          background-color: var(--primary-color-lighter);
          font-weight: 700;
          font-size: 1rem;
          /* text-shadow: 2px 2px var(--primary-color); */
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 0.3rem;
        }
        p {
          font-size: 0.9rem;
        }
      }

      &:hover .content {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
      }

      &:nth-child(1) {
        grid-column: span 2;

        @media screen and (max-width: 501px) {
          grid-column: span 1;
        }
      }
      &:nth-child(2) {
        grid-column: span 1;
      }
      &:nth-child(3) {
        grid-column: span 1;
      }
      &:nth-child(4) {
        grid-column: span 1;

        @media screen and (max-width: 820px) {
          grid-column: span 2;
        }
        @media screen and (max-width: 501px) {
          grid-column: span 1;
        }
      }
      &:nth-child(5) {
        grid-column: span 1;
      }
      &:nth-child(6) {
        grid-column: span 2;

        @media screen and (max-width: 820px) {
          grid-column: span 1;
        }
      }
    }
  }
`;
