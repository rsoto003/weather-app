import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "a41f0d6ffbb2b0f161963bcaa75efc88";

class App extends Component {
  //initializes state 
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  //arrow functions allow you to use the 'this' key word independently.
  //how do we make sure when button is clicked in Form component, getWeather in App.js gets called?
    //props!
    //just like html attributes, you can name them whatever you want.
    //prop is named getWeather and will be passed on to the Form component
      //so the Form component will have access to the props in the Form.js file.
    //In form component, I am setting up a prop, and setting up it's value to this function
    //Since I am setting this up in the form component, that means I have access to this function in the Form.js file.

    //Displaying API results on the screen: 
    //This is where state comes into play
    //State is an object that lives within a component
      //is responsible for keeping track of changing data within a component

  getWeather = async (e) => {
    e.preventDefault();
    //can use event object to use name attributes in Form.js in App.js

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    });
    console.log(this.state)
  }
  //define props in components to have access to the props in their component file
  render(){
    return (
      <div className="center white-text grey darken-4">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;