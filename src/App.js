import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FrontPart from './components/front.js'
import EndPart from './components/end.js'

class App extends React.Component {
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
