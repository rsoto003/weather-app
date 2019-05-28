import React, { Component } from 'react';

class Form extends Component {
    render(){
        return (

  <div className="row">
    <div className="col s6 push-s3">
      <div className="card grey darken-4">
        <div className="card-content white-text">
          <span className="card-title">type your location...</span>
          <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="City" className="grey darken-4 white-text validate"/>
              <input type="text" name="country" placeholder="Country" className="grey darken-4 white-text validate"/>
              <button className="waves-effect red darken-3 waves-light btn-large">Get Weather!</button>
            </form>
        </div>
      </div>
    </div>
  </div>
        );
    }
}

export default Form;