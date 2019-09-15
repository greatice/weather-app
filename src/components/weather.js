import React from 'react';

export default class Weather extends React.Component{
    constructor (props){
        super(props);
        this.state = {};
        
    }
    render(){
        const {city,temp_c,is_Day,text,icon} = this.props;
        

        return <div className ='weather-container'>
            <div className='front'>
                    {city}
            </div>
            <div className ='inside-container'>
                <div className='image'>
                    <img src={icon} alt=''/>
                </div>
                <div className = 'weather-degree'>
                        {temp_c}°
                </div>
            </div>
            <div className = 'end'>
                {text}
            </div>

        </div>
    }

}