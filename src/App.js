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
      cityName: 'Brisbane',
      forcastDays:5,
    }
  }

  componentDidMount(){
    const {cityName,forcastDays} = this.state;
    const URL = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}  &q=${cityName} &days=${forcastDays}`;
    Axios.get(URL).then(
      (res) =>{
      return res.data;
      }
    )
    .then(
      (data)=>{
        this.setState({
        temp_c: data.current.temp_c, 
        is_Day: data.current.is_Day, 
        text: data.current.condition.text, 
        icon: data.current.condition.icon
        })
      }
    )
    .catch((err)=>{
      if (err)
      console.error('Weather info cannot found',err);
    });
  }

  render(){
    const {isTrue,city,temp_c,is_Day,text,icon} = this.state;

    return <div className='app-container'>
      <div className='main-container'>
        <div className= "front-part">
        <FrontPart city={city} temp_c={temp_c} is_Day={is_Day} text={text} icon={icon} />
        </div>
      <div className= "end-part">
      <EndPart />
      </div>

      </div>
    </div>;
  }
}

export default App;
