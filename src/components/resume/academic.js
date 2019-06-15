import React from 'react'
import { StyleRoot } from 'radium'

import { connect } from  'react-redux'

import Axios from 'axios'
import { addAcademicBackgrounds } from '../../redux/actions/index'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
      addAcademicBackgrounds: academicBackgrounds => dispatch(addAcademicBackgrounds(academicBackgrounds))
    }
}


class academic extends React.Component{

    componentWillMount(){
        if(!this.props.main.academicBackgrounds){
            Axios({
                method: 'post',
                url: 'https://tylerclay.info/getAcademicBackgrounds'
            })
            .then(res=>{
                this.props.addAcademicBackgrounds(res.data)
            })
        }
    }

    render(){
        var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
                {/* Academic Background */}
                {this.props.main.academicBackgrounds ?
                    <div className="inside-sec margin-top-30" style={AnimationStyles.styles.zoom_in_up}> 
                                {/* Academic Background */}
                                <h5 className="tittle">Academic Background</h5>
                                <div className="padding-30 exp-history"> 
                                    {this.props.main.academicBackgrounds.map(item=>{
                                        return(
                                            <div className="exp">
                                                <div className="media-left"> <span className="sun">{item.startYear} - {item.endYear}</span> </div>
                                                <div className="media-body"> 
                                                    <h6>{item.name}</h6>
                                                    <p>{item.major}</p>
                                                    <p>{item.city}, {item.state}, {item.country}</p>
                                                    <p className="margin-top-10">{item.desc}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div> : <div/>
                }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(academic)