import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "a41f0d6ffbb2b0f161963bcaa75efc88";

class App extends Component {
  //arrow functions allow you to use the 'this' key word independently.
  //how do we make sure when button is clicked in Form component, getWeather in App.js gets called?
    //props!
    //just like html attributes, you can name them whatever you want.
    //prop is named getWeather and will be passed on to the Form component
      //so the Form component will have access to the props in the Form.js file.
    //In form component, I am setting up a prop, and setting up it's value to this function
    //Since I am setting this up in the form component, that means I have access to this function in the Form.js file.
  alertResults = (e) => {
    e.preventDefault();
    console.log('getting results...')
  }
  getWeather = async (e) => {
    e.preventDefault();
    //can use event object to use name attributes in Form.js in App.js

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    
  }
  render(){
    return (
      <div className="center white-text grey darken-4">
        <Titles />
        <Form getWeather={this.getWeather} alertResults={this.alertResults}/>
        <Weather/>
      </div>
    );
  }
}

export default App;