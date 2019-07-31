import React, { Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import styles from "./Map.module.css";

export default class LeafletMap extends Component {
  state = {
    lat: 53.9061114,
    lng: 27.5651102,
    zoom: 15,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} className = {styles.sizeMap}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        </Marker>
      </Map>
    )
  }
}
