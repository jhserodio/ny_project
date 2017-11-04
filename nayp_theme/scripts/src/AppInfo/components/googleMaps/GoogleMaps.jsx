import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker} from 'react-gmaps';

const coords = {
  lat: -25.4353676,
  lng: -49.278431
};

const stylesArray = [
  {
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

export default class App extends Component {

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={14}
        styler={stylesArray}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyDlEyZ_acJRpOYj5_715_4_1GLTRshO7Lc'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          icon="public/svg/marker.svg"
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  }
}
