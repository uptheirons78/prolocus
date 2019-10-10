import React from "react";
import { SectionTitle, SectionSubTitle } from "./styled/Typography";
import Container from "./styled/Container";
import styled from "styled-components";
import image from "../images/fake-image.jpg";

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
          <div className="grid-item">
            <div className="content">
              <h4>titolo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, quia odio? Cumque.
              </p>
            </div>
          </div>
          <div className="grid-item">lorem</div>
          <div className="grid-item">lorem</div>
          <div className="grid-item">lorem</div>
          <div className="grid-item">lorem</div>
          <div className="grid-item">lorem</div>
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
      background-image: url(${image});
      background-size: cover;
      background-position: center;
      position: relative;

      .content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: 0.5s ease;
        color: #fff;
      }

      &:hover .content {
        height: 100%;
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
