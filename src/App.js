import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FrontPart from './components/front.js'
import EndPart from './components/end.js'
import Axios from 'axios';

const API_KEY = '05fa14e773434825be0193343191301';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: 'Sydney',
      forcastDays:5,
    }
  }

  componentDidMount(){
    const {cityName,forcastDays} = this.state;
    const URL = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}  &q=${cityName} &days=${forcastDays}`;
    Axios.get(URL).then(
      (res) =>{
      console.log('Weather Info:',res);
      }
    ).catch((err)=>{
      if (err)
      console.error('Weather info cannot found',err);
    });
  }

  render(){
    return <div className='app-container'>
      <div className='main-container'>
        <div className= "front-part">
          <FrontPart />
        </div>
        <div className= "end-part">
          <EndPart />
        </div>

      </div>
    </div>;
  }
}

export default App;
