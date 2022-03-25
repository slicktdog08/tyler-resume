import React from 'react'
import { StyleRoot } from 'radium'

import Axios from 'axios'
import { connect } from  'react-redux'
import { addSkills, addSkillButtons } from '../../redux/actions/index'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
       addSkills: skill => dispatch(addSkills(skill)),
       addSkillButtons: skillButtons => dispatch(addSkillButtons(skillButtons))
    }
}

class skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    componentWillMount(){
        if(this.props.main.skills && this.props.main.skills.WebDevelopment && this.props.main.skills.NetworkAdmin && this.props.main.skills.General && this.props.main.skillButtons){
            //everything needed is loaded
        }
        else{
            Axios({
                method: 'post',
                url: 'https://ap1.tylerthedeveloper.com/getSkills',
            })
            .then( res => {
                this.props.addSkills(res.data)
            })
            Axios({
                method: 'post',
                url: 'https://ap1.tylerthedeveloper.com/getSkillButtons'
            })
            .then(res => {
                this.props.addSkillButtons(res.data)
            })
        }
        
    }
    skillController = (event) =>{
        console.log(event.currentTarget.id)
        var stateClone = Object.assign({}, this.state)
        this.setState({
            [event.currentTarget.id]: stateClone[event.currentTarget.id]  ?  false : true
        }, () => console.log(this.state))
    }
    render(){
        var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
                { this.props.main.skills && this.props.main.skills.WebDevelopment && this.props.main.skills.NetworkAdmin && this.props.main.skills.General && this.props.main.skillButtons ?
                <div className="skills"> 
                                
                                <h5 className="margin-top-30">Skills</h5>

                                <h6>Web Development</h6>
                                {/* Web Dev Skills */}
                                {this.props.main.skills.WebDevelopment.map(skill => {
                                    return(
                                        <div className="panel-group accordion" id="accordion5">
                                            <div className="panel panel-default">
                                                <div className="row">
                                                    <div className="col-sm-4"> 
                                                        {/* PANEL HEADING */}
                                                        <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                <a href="javascript:void(0)" id={`${`web`}_${skill.skillID}`} onClick={this.skillController} className={ this.state[`${`web`}_${skill.skillID}`] ? '': 'collapsed'}> 
                                                                        {skill.name}
                                                                    </a> 
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    {/* Skillls Bars */}
                                                    <div className="col-sm-8">
                                                        <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100} style={{width: `${skill.percentage}%`}}> <span className="sr-only">{skill.percentage}% Complete</span> </div>
                                                        </div>
                                                        {this.state[`${`web`}_${skill.skillID}`] ?
                                                        
                                                            /* Skillls Text */
                                                            <div id="collapseOne5" className="panel-collapse collapse in" style={AnimationStyles.styles.bounce_in_down}>
                                                            <div className="panel-body">
                                                                <p style={AnimationStyles.styles.bounce_in_right}>{skill.desc}</p>
                                                            </div>
                                                            </div> : <div/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )})
                                }
                                <h6>Network Administation</h6>
                                {this.props.main.skills.NetworkAdmin.map(skill => {
                                    return(
                                        <div className="panel-group accordion" id="accordion5">
                                            <div className="panel panel-default">
                                                <div className="row">
                                                    <div className="col-sm-4"> 
                                                        {/* PANEL HEADING */}
                                                        <div className="panel-heading">
                                                        <h4 className="panel-title"> 
                                                            <a href="javascript:void(0)" id={`${`network`}_${skill.skillID}`} onClick={this.skillController} className={ this.state[`${`network`}_${skill.skillID}`] ? '': 'collapsed'}>
                                                             {skill.name}
                                                            </a>
                                                         </h4>
                                                        </div>
                                                    </div>
                                                    {/* Skillls Bars */}
                                                    <div className="col-sm-8">
                                                        <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100} style={{width: `${skill.percentage}%`}}> <span className="sr-only">{skill.percentage}% Complete</span> </div>
                                                        </div>
                                                        {this.state[`${`network`}_${skill.skillID}`] ?
                                                            /* Skillls Text */
                                                            <div id="collapseOne5" className="panel-collapse collapse in" style={AnimationStyles.styles.bounce_in_down}>
                                                            <div className="panel-body">
                                                                <p style={AnimationStyles.styles.bounce_in_right}>{skill.desc}</p>
                                                            </div>
                                                            </div> : <div/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )})
                                }
                                <h6>General</h6>
                                {this.props.main.skills.General.map(skill => {
                                    return(
                                        <div className="panel-group accordion" id="accordion5">
                                            <div className="panel panel-default">
                                                <div className="row">
                                                    <div className="col-sm-4"> 
                                                        {/* PANEL HEADING */}
                                                        <div className="panel-heading">
                                                        <h4 className="panel-title">
                                                        <a href="javascript:void(0)" id={`${`general`}_${skill.skillID}`} onClick={this.skillController} className={ this.state[`${`general`}_${skill.skillID}`] ? '': 'collapsed'}> 
                                                                {skill.name}
                                                        </a> 
                                                         </h4>
                                                        </div>
                                                    </div>
                                                    {/* Skillls Bars */}
                                                    <div className="col-sm-8">
                                                        <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100} style={{width: `${skill.percentage}%`}}> <span className="sr-only">{skill.percentage}% Complete</span> </div>
                                                        </div>
                                                        {this.state[`${`general`}_${skill.skillID}`] ?
                                                            /* Skillls Text */
                                                            <div id="collapseOne5" className="panel-collapse collapse in" style={AnimationStyles.styles.bounce_in_down}>
                                                            <div className="panel-body">
                                                                <p  style={AnimationStyles.styles.bounce_in_right}>{skill.desc}</p>
                                                            </div>
                                                            </div> : <div/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )})
                                }
                                
                                
                         
                                
                            
                                {/* Follow ethical */}
                                <div className="ethical">
                                    <h6>Skill Overview</h6>
                                    {this.props.main.skillButtons.map(skillButton => {
                                        return(
                                            <a href="javascript:void(0)">{skillButton.name}</a>
                                        )
                                    })}
                                    
                                </div>
                            </div> : <div/>
                }
            </StyleRoot>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(skills)