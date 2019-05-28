import React, { Component } from 'react';

class Weather extends Component {
    render(){
        return (
            
                
                <div className="row">
                <div className="col s6 push-s3">
                  <div className="card grey darken-4">
                    <div className="card-content white-text">
                      <span className="card-title">Weather Details:</span>
                      {this.props.temperature} <br />
                      {this.props.city} <br />
                      {this.props.country} <br />
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Weather;