import React from 'react';
import SunnyPic from '../img/Sunny.png';

export default class Weather extends React.Component{
    constructor (props){
        super(props);
        this.state = {};
        
    }
    render(){
        return <div className ='weather-container'>
            <div className='front'>
                    city name
            </div>
            <div className ='inside-container'>
                <div className='image'>
                    <img src={SunnyPic} alt=''/>
                </div>
                <div className = 'weather-degree'>
                        20
                </div>
            </div>
            <div className = 'end'>
                Sunny
            </div>

        </div>
    }

}