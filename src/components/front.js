import React from "react";
import Weather from "./weather";
import { Manager, Reference, Popper } from 'react-popper';
//use react-popper to 
export default class FrontPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return <div className='front-container'> 
            <div className='title'>Weather-App</div>
            <Weather {...this.props} />
            <Manager>
                <Reference>
                {({ ref }) => (
                    <button className='search' ref={ref}>
                        City Search
                    </button>
                )}
                </Reference>
                <Popper placement="top">
                {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                    Popper element
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                    </div>
                )}
                </Popper>
            </Manager>

        </div>
    }
}