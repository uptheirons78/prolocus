import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <StyledVideo>
      <iframe
        title="iframe title"
        src="https://www.youtube.com/embed/mvJHw64fxgQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
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

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
