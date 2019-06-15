import React, { Component } from 'react';
import Router from './router/index'
import "./assets/css/ionicons.min.css";
import "./assets/css/bootstrap/bootstrap.min.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/main.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import 'babel-polyfill'

import Axios from 'axios'
import { connect } from 'react-redux'
import { addDetails } from './redux/actions/index'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addDetails: details => dispatch(addDetails(details))
  }
}

class App extends Component {

  componentWillMount(){
    if(!this.props.main.details){
      Axios({
        method: 'post',
        url: 'https://tylerclay.info/getDetails'
      })
      .then(res =>{
        this.props.addDetails(res.data[0])
      })
    }
    
  }
  render() {
    return (
      <Router/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
