import styled from "styled-components";

const handleSizeType = size => {
  switch (size) {
    case "large":
      return "1rem 3rem";
    case "small":
      return "0.3rem 1.5rem";
    default:
      return "0.6rem 2rem";
  }
};

export default styled.a`
  margin: 1rem 0.5rem;
  color: #fff;
  background: var(--primary-color);
  padding: ${({ size }) => handleSizeType(size)};
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #6dbeec;
  }
`;
