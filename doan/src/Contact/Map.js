import React, { Component } from 'react';
class Map extends Component {
    render() {
        return (
            <div className="App">
                <div className="contact-map">

                    <iframe src="https://map.coccoc.com/map/158541189274965"
                        className="map" allowfullscreen=""></iframe>
                </div>
            </div>
        );
    }
}
export default Map;