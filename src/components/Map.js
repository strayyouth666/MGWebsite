import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from "react";
class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: '40%',
      height: '30%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -7.259767439677641,
          lng: 112.79603342010017,
        }}
      > 
        <Marker position={{ lat: -7.259767439677641, lng: 112.79603342010017}} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCO2Vzt4reSvS_rmxtzQy-tPpZPpG42v30',
})(MapContainer);
