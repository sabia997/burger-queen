import  React from 'react';
import './App.css';
import Header from './componenents/Header';
import Main from './componenents/Main';

export default class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header/>
        <Main/>
      </React.Fragment>
    ) 
  }
}
