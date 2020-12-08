import React from 'react'
import { StyleRoot } from 'radium'

import { connect } from  'react-redux'

import Axios from 'axios'
import { addProfessionalExperience } from '../../redux/actions/index'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
      addProfessionalExperience: professionalExperience => dispatch(addProfessionalExperience(professionalExperience))
    }
}

class professionalExperience extends React.Component{

    componentWillMount(){
        if(!this.props.main.professionalExperience){
            Axios({
                method: 'post',
                url: 'https://ap1.tylerclay.tech/getProfessionalExperiences'
            })
            .then(res=>{
                this.props.addProfessionalExperience(res.data)
            })
        }
    }

    render(){
        return(
            <StyleRoot>
                {/* Professional Experience */}
                {this.props.main.professionalExperience ?
                    <div className="inside-sec margin-top-30"> 
                                {/* Professional Experience */}
                                <h5 className="tittle">Professional Experience</h5>
                                <div className="padding-30 exp-history"> 
                                    
                                    {this.props.main.professionalExperience.map(item=>{
                                        return(
                                            <div className="exp">
                                                <div className="media-left"> <span className="sun">{item.startYear} - {item.endYear}</span> </div>
                                                <div className="media-body"> 
                                                {/* Company Logo */}
                                                <div className="company-logo"> <img src={item.logoUrl} alt /> </div>
                                                <h6>{item.name}</h6>
                                                <p>{item.jobTitle}</p>
                                                <p>{item.city}, {item.state}, {item.country}</p>
                                                <div id='professionalExerienceDetails' className="margin-top-10" dangerouslySetInnerHTML={item}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                    
                                
                                </div>
                            </div> : <div/>
                }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(professionalExperience)