import styled from "styled-components";

const SectionTitle = styled.h4`
  text-align: center;
  color: ${props => props.theme.darkGreen};
  text-transform: uppercase;
`;
const SectionSubTitle = styled.p`
  text-align: center;
  padding: 1rem 0.8rem;
  color: ${props => props.theme.meta};
`;

const EventiSectionSubTitle = styled(SectionSubTitle)`
  color: ${props => props.theme.black};
`;

const HeroTitle = styled(SectionTitle)`
  color: ${props => props.theme.green};
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`;
const HeroSubTitle = styled(SectionSubTitle)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.white};
  padding: 1rem 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export {
  SectionTitle,
  SectionSubTitle,
  EventiSectionSubTitle,
  HeroTitle,
  HeroSubTitle,
};
