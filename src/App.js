import React from 'react';
import './App.css';
import FetchSimpsons from './components/FetchSimpsons'
import axios from 'axios'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      simpson:[]}
  }


  getSimpson = () => {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data)
        this.setState({
          simpson: data[0]
        });
    });
  }
  
  render(){
    return (
      <div>
        <FetchSimpsons simpson/>
        <button type="button" onClick={this.getSimpson}>Get Simpson</button>
      </div>
    );
  }
}

export default App;
