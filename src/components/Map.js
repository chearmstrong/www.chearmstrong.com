import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import config from '../config'

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.keys.GOOGLE_MAPS_KEY }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lon }}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap;