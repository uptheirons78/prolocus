import React from "react";
import styled from "styled-components";

const Video = props => {
  return (
    <StyledVideo>
      <iframe
        title="iframe title"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </StyledVideo>
  );
};

export default Video;

const StyledVideo = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.6),
    0px 3px 20px 8px rgba(0, 0, 0, 0.4);

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
