import React from 'react'
import { StyleRoot } from 'radium'
import { connect } from  'react-redux'

import Axios from 'axios'
import { addAboutMeSkills } from '../../redux/actions/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addAboutMeSkills: skills => dispatch(addAboutMeSkills(skills))
    }
}
const mapStateToProps = state => {
    return state
}

class skills extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    componentWillMount(){

        if(this.props.main.aboutMeSkills){
            Axios({
                url: 'https://ap1.tylerclay.tech/getAboutMeSkills',
                method: 'post'
            })
            .then(res=>{
                this.props.addAboutMeSkills(res.data)
            })
        }
        
    }
    skillToggle = (event) => {
        console.log(event.currentTarget.id);
        this.setState({
            [event.currentTarget.id]: this.state[event.currentTarget.id] ? false : true
        })
    }
    render(){
        var AnimationStyle = require('../../utils/animation')
        return(
            <StyleRoot>
                {this.props.main.aboutMeSkills ?
                    <div>
                    <h5 className="tittle">Skills</h5>
                    {this.props.main.aboutMeSkills.map(skill => {
                        return(
                            <div className="panel-group accordion padding-20" id="accordion">

                                <div className="panel panel-default">
                                    <div className="row">
                                    <div className="col-sm-4"> 
                                        {/* PANEL HEADING */}
                                        <div className="panel-heading">
                                        <h4 className="panel-title"> 
                                            
                                            <a href="javascript:void(0)"
                                            onClick={this.skillToggle} id={skill.name} 
                                            className={this.state[skill.name] ? '': 'collapsed'} >
                                            {skill.name}
                                            </a>
                                        </h4>
                                        </div>
                                    </div>
                                    {/* Skillls Bars */}
                                    <div className="col-sm-8">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={skill.progress} aria-valuemin={0} aria-valuemax={100} style={{width: `${skill.progress}%`}}> <span className="sr-only">60% Complete</span> </div>
                                        </div>
                                        {/* Skillls Text */}
                                        {this.state[skill.name] ?
                                            <div id="collapseOne" className="panel-collapse" style={AnimationStyle.styles.bounce_in_right}>
                                            <div className="panel-body">
                                                <p style={AnimationStyle.styles.fade_in_up}>{skill.desc}</p>
                                            </div>
                                            </div> : <div/>
                                        }
                                    </div>
                                    </div>
                                </div>
                                
                                
                                </div>
                        )
                    })}
                    </div> : <div/>
                }
                
                           
                            
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(skills)