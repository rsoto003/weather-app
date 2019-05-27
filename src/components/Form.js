import React, { Component } from 'react';

class Form extends Component {
    render(){
        return (

  <div className="row">
    <div className="col s6 push-s3">
      <div className="card grey darken-2">
        <div className="card-content white-text">
          <span className="card-title">type your location...</span>
          <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="City"/>
              <input type="text" name="country" placeholder="Country"/>
              <button className="waves-effect   red darken-3 waves-light btn-large">Get Weather!</button>
            </form>
      </div>
    </div>
      <button onClick={this.props.alertResults} className="waves-effect waves-light btn">Testing Props</button>
    </div>
  </div>
        );
    }
}

export default Form;