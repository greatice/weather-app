import React from "react";
import Weather from "./weather";
import { Manager, Reference, Popper } from 'react-popper';
//use react-popper added to the button
export default class FrontPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonPress : false,
        };
    }


    render(){ 
        const {buttonPress} = this.state;
        //const { eventEmmiter } = this.props;
        return <div className='front-container'> 
            <div className='title'>Weather-App</div>
            <Weather {...this.props} />
            <Manager>
                <Reference>
                {({ ref }) => (
                    <button className='search' ref={ref} onClick={()=>{
                        this.setState(
                            (prevState) => { 
                               return { buttonPress: !prevState.buttonPress }
                            }
                        );
                    }}>
                        City Search
                    </button>
                )}
                </Reference>
                <Popper placement="top">
                {({ ref, style, placement, arrowProps }) => ( buttonPress &&
                    <div className = 'dialog-container' ref={ref} style={style} data-placement={placement}>
                        <div className='table-container'>
                            <label htmlFor="city-name">
                                Input City Name:
                            </label>
                            <input 
                                id='city-name'
                                type=''
                                placeholder='City Name'
                                onChange={
                                   (e)=> this.setState({cityName: e.target.value})
                                }
                            />
                            <button className='search' 
                            onClick={()=>{
                                            const {cityName} = this.state;
                                            const { eventEmmiter } = this.props;
                                            eventEmmiter.emit('location', cityName);
                                            this.setState({buttonPress: false}); //when finished search, the popper will disappear and show the weather on main screen
                                        }
                                    } >
                                Submit
                            </button>
                        </div>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                    </div>
                )}
                </Popper>
            </Manager>

        </div>
    }
}