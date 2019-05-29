import React, { Component } from 'react';

class Titles extends Component {
    render(){
        return (
            <div>
                {!this.props.city && <h4>Find Your Weather <i className="fas fa-cloud"></i></h4>}
                {this.props.city && <h4>Here's the weather currently in... <span><em>{this.props.city}, {this.props.country}</em></span></h4>}
            </div>
        )
    }
}

export default Titles;