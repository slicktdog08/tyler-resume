import React, { useEffect, useState } from 'react';
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
import RingLoader from "react-spinners/RingLoader";


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addDetails: details => dispatch(addDetails(details))
  }
}

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const {addDetails} = props;
  useEffect(() => {
    if(!props.main.details){
      Axios({
        method: 'post',
        url: 'https://ap1.tylerclay.tech/getDetails'
      })
      .then(res =>{
        addDetails(res.data[0]);
        setLoading(false)
      })
    }
  }, [])
 
  return (
    <>
      {!loading ? 
        <Router/> : 
        <div className="sweet-loading">
          <RingLoader color={'#60DBFB'} size={150} class/>
        </div>
      }
    </>
  );
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
