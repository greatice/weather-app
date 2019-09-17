import React from 'react';
import EventEmmiter from 'events'; 

export default class Store extends React.Component {
    constructor(props){
        super(props);
        //This is the main App state

        this.eventEmmiter = new EventEmmiter();

        this.state = {
            appName: "Weather-App"
        };
    }

    render () {
        return React.Children.map(this.props.children, (child)=> {
            return React.cloneElement(child,{ ...this.state,
            eventEmmiter : this.eventEmmiter
            });
        });
    }
}

//Try to traverse every child props