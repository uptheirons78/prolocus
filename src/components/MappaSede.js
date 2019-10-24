import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import Container from "../components/styled/Container";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

function Map({ coordinate }) {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 42.242075, lng: 12.347944 }}
    >
      {coordinate.map((item, index) => (
        <Marker
          key={index}
          position={{
            lat: item.lat,
            lng: item.lng,
          }}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MappaSede = props => {
  return (
    <MapSection className="mappa">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            config={{ delay: 350, duration: 2500 }}
            to={{ opacity: isVisible ? 1 : 0 }}
          >
            {({ opacity }) => (
              <Container style={{ opacity }}>
                <div className="map-container">
                  <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GMAPS_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    coordinate={props.coordinate}
                  />
                </div>
              </Container>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </MapSection>
  );
};

export default MappaSede;

const MapSection = styled.section`
  .map-container {
    margin: 3vh auto;
    max-width: 1200px;
    width: 100%;
    height: 420px;
  }
`;
