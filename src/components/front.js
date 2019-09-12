import React from "react";
import Weather from "./weather";

export default class FrontPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return <div className='front-container'> 
            <div className='title'>Weather-App</div>
            <Weather {...this.props} />
            <button className='search'>
                City Search
            </button>
        </div>
    }
}