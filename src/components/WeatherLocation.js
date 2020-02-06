import React, { Component } from 'react';
import Location from './Location';
//import WeatherData from './WeatherData/WeatherData';
import WeatherData from './WeatherData';
import './WeatherLocationStyles.css';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN, 
    SNOW, 
    WINDY, 
} from './../constants/constans/weathers';

const data = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 10,
    wind: '10m/s',
};

const data2 = {
    temperature: 20,
    weatherState: CLOUDY,
    humidity: 20,
    wind: '5m/s',
};

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Madrid',
            data: data, 
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");
        this.setState ({
            city: 'Pamplona',
            data: data2,
        });
    }

    render () {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city= {city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;