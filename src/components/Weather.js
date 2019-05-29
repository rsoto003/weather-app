import React, { Component } from 'react';

class Weather extends Component {

//How to get weather information to only show when button is clicked?
//
    render(){
        return (
             <div className="row">
                <div className="col s6 push-s3">
                  <div className="card grey darken-4">
                    <div className="card-content white-text">
                    {this.props.city && this.props.country && <span className="card-title">Weather Details:</span>}
                        { this.props.city && this.props.country && <p>City: {this.props.city}, {this.props.country}</p>}
                        { this.props.temperature &&  <p>Temperature: {this.props.temperature}</p>}
                        { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                        { this.props.description && <p>Conditions: {this.props.description}</p>}
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Weather;