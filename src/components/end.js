import React from "react";


export default class EndPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const {forecastdays} = this.props;
        return <div className = 'end-container'> 
        {forecastdays &&
            forecastdays.map(
                (dayInfo,index) => {
                    return <div className = 'forecast-container'>
                    {
                    <div className = 'end-wrap'>
                        <div className = 'dayInfo'>
                            {dayInfo.date}
                            <br>
                            </br>
                        </div>
                        <div className = 'imageEnd'>
                            <img src = {dayInfo.day.condition.icon} alt='forecastImg'/>
                        </div>
                        <div className = 'textEnd'>
                                { dayInfo.day.avgtemp_c }°
                        </div>
                    </div>
                    }
                </div>;
                }
            )
        }
            
        </div>
    }
}