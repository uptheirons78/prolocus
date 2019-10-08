import React from "react";
import styled, { keyframes } from "styled-components";
import image01 from "../images/hero/image-01.jpg";
import image02 from "../images/hero/image-02.jpg";
import image03 from "../images/hero/image-03.jpg";
import logo from "../images/website-icon.png";

const HeroSlider = () => {
  return (
    <SliderContainer className="hero-container">
      <div className="load"></div>
      <div className="content">
        <div className="principal">
          <div className="logo-container">
            <img src={logo} alt="Pro Loco Nepi" />
          </div>
          <h1>Benvenuto a Nepi</h1>
          <em>
            “Una delle più belle e pittoresche parti della campagna romana è
            quella che incomincia a Nepi, e si stende fino al Tevere per
            larghezza; per lunghezza giunge sino ad Otricoli ed anco fino a
            Narni. I forestieri, i touristi, non ne seppero mai nulla sino ad
            oggi”
          </em>
          <p>Massimo d’Azeglio (1821)</p>
        </div>
      </div>
    </SliderContainer>
  );
};

export default HeroSlider;

const slide = keyframes`
  0% {
    background-image: url(${image01});
  }
  33% {
    background-image: url(${image01});
  }
  33.01% {
    background-image: url(${image02});
  }
  66% {
    background-image: url(${image02});
  }
  66.01% {
    background-image: url(${image03});
  }
  100% {
    background-image: url(${image03});
  }
`;

const SliderContainer = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  animation: ${slide} 40s infinite;

  .load {
    animation: ${slide} 2s;
  }

  .content {
    color: #fff;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .principal {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    letter-spacing: 2px;
    text-align: left;
    max-width: 1200px;
    width: 100%;
    padding: 0 3rem;

    .logo-container {
      width: 10rem;
      margin-bottom: 2vh;

      @media screen and (max-width: 599px) {
        width: 6rem;
      }

      @media screen and (min-width: 600px) and (max-width: 899px) {
        width: 8rem;
      }

      img {
        width: 100%;
      }
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      color: #fff;
      text-transform: uppercase;

      @media screen and (max-width: 599px) {
        font-size: 2.5rem;
      }

      @media screen and (min-width: 600px) and (max-width: 899px) {
        font-size: 3rem;
      }
    }

    em {
      font-size: 1.2rem;
      text-align: justify;
      font-style: italic;
      margin-top: 1rem;
      @media screen and (max-width: 599px) {
        font-size: 1rem;
      }

      @media screen and (min-width: 600px) and (max-width: 899px) {
        font-size: 1.1rem;
      }
    }
    p {
      font-size: 1.2rem;
      text-align: justify;
      margin-top: 1rem;

      @media screen and (max-width: 599px) {
        font-size: 1rem;
      }

      @media screen and (min-width: 600px) and (max-width: 899px) {
        font-size: 1.1rem;
      }
    }
  }
`;
