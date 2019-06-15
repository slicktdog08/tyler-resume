import React from 'react'
import { StyleRoot } from 'radium'
import { connect } from  'react-redux'


const mapStateToProps = state => {
    return state
}

class professionalDetails extends React.Component{
   
    render(){
        var AnimationStyles = require('../utils/animation')
        return(
            
            <StyleRoot>
                {this.props.main.details ?
                    <div style={AnimationStyles.styles.zoom_in_up}>
                        <h5 className="tittle">Professional Details</h5>
                        <img src={this.props.main.details.imageURL} className="img-responsive profile-img" alt />
                        <ul className="personal-info">
                                <li>
                                <p> <span> Name</span> {this.props.main.details.name} </p>
                                </li>
                                <li>
                                <p> <span> Age</span> {this.props.main.details.age} </p>
                                </li>
                                <li>
                                <p> <span> Location</span> {this.props.main.details.city}, {this.props.main.details.state} </p>
                                </li>
                                <li>
                                <p> <span> Experience</span> {this.props.main.details.experience} </p>
                                </li>
                                <li>
                                <p> <span> Degree</span> {this.props.main.details.degree} </p>
                                </li>
                                <li>
                                <p> <span> Career Level</span> {this.props.main.details.careerLevel} </p>
                                </li>
                                <li>
                                <p> <span> Phone</span> 
                                    <a href={`tel:${this.props.main.details.phone}`}> 
                                        {this.props.main.details.parsedPhone}
                                    </a> 
                                </p>
                                </li>
                                
                                <li>
                                <p> 
                                    <span> E-Mail</span> 
                                    <a href={`mailto:${this.props.main.details.email}`}>{this.props.main.details.email}</a> 
                                </p>
                                </li>
                                <li>
                                <p> <span> Website</span><a href={this.props.main.details.website}> {this.props.main.details.website} </a></p>
                                </li>
                            </ul>
                        </div> : <div/>
                }
        </StyleRoot>
        )
    }
}
export default connect(mapStateToProps)(professionalDetails)