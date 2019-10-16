import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import Container from "../components/styled/Container";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import styled from "styled-components";

function Map({ coordinate }) {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 42.242075, lng: 12.347944 }}
    >
      {coordinate.map(item => (
        <Marker
          key={item.name}
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

const Mappa = props => {
  return (
    <MapSection className="mappa">
      <Container>
        <SectionTitle>Dove Trovarci</SectionTitle>
        <SectionSubTitle>
          I nostri uffici situati in Via G. Matteotti n. 32 nel centro di Nepi
          sono aperti ogni giorno dalle ore 17 alle ore 19 circa e la Domenica
          dalle ore 10:30 alle ore 12:30. Vi aspettiamo. Venite a trovarci.
        </SectionSubTitle>
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
    </MapSection>
  );
};

export default Mappa;

const MapSection = styled.section`
  .map-container {
    margin: 3vh auto;
    max-width: 1200px;
    width: 100%;
    height: 420px;
  }
`;
