// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// class MapContainer extends React.Component {
//   render() {
//     const mapStyles = {
//       width: '40%',
//       height: '30%',
//     };

//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: -7.259767439677641,
//           lng: 112.79603342010017,
//         }}
//       > 
//         <Marker position={{ lat: -7.259767439677641, lng: 112.79603342010017}} />
//       </Map>
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCO2Vzt4reSvS_rmxtzQy-tPpZPpG42v30',
// })(MapContainer);



const containerStyle = {
  width: '500px',
  height: '300px'
};

const center = {
  lat: -7.259767439677641,
  lng: 112.79603342010017,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCO2Vzt4reSvS_rmxtzQy-tPpZPpG42v30"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
  
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)