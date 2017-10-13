import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import './App.css';
import './GoogleMap.css';

const AnyReactComponent = ({ text }) => 
<div className="test">{text}
<img src='/map_pin.png' /></div>;
  
class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 50.5, lng: 8.666667},
    zoom: 1,
  };

  render() {
    var location = {
      lat: parseFloat(this.props.lat),
      lng: parseFloat(this.props.lng)
    }
    return (
      <div className="mappchen">
        <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCT43ttWymiJdocurTTRja2tglpdyBUMG4'
        }}
        center={location}
        defaultZoom={this.props.zoom}>
        <AnyReactComponent 
          lat={this.props.lat} 
          lng={this.props.lng} 
        />
      </GoogleMapReact>
    </div>
    );
  }
}
export default GoogleMap