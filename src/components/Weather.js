import React, { Component } from 'react';

class Weather extends Component {

//How to get weather information to only show when button is clicked?
//Using conditional operators 
    render(){
        return (
             <div className="row">
                <div className="col s6 push-s3">
                  <div className="grey darken-4">
                    <div className="white-text">
                    { !this.props.error && this.props.city && this.props.country && <p className="card-panel green white-text darken-1" >Weather Data:</p>}

                    {this.props.city && this.props.country && <span className="card-title">Weather Details:</span>}
                        { this.props.city && this.props.country && <p><i className="fas fa-thumbtack"></i> City: {this.props.city}, {this.props.country}</p>}
                        { this.props.temperature &&  <p><i className="fas fa-thermometer-three-quarters"></i> Temperature: {this.props.temperature}</p>}
                        { this.props.humidity && <p><i className="fas fa-temperature-high"></i> Humidity: {this.props.humidity}</p>}
                        { this.props.description && <p><i className="far fa-clipboard"></i> Conditions: {this.props.description}</p>}
                        { this.props.error && <p className="card-panel red white-text darken-5"><i className="fas fa-exclamation-triangle"></i>  Error: {this.props.error}</p>}
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Weather;