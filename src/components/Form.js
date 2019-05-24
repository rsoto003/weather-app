import React, { Component } from 'react';

class Form extends Component {
    render(){
        return (
          <div>
            <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="City"/>
              <input type="text" name="country" placeholder="Country"/>
              <button className="waves-effect  purple accent-2 waves-light btn-large">Get Weather!</button>
            </form>
          </div>
        );
    }
}

export default Form;