import React, { Component } from 'react';

class GoogleMap extends Component {
    componentWillMount() {
        new GoogleMap.maps.Map(this.refs.map, {
            xoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref='map'/>;
    }
}

export default GoogleMap;