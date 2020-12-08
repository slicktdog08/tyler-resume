import React from 'react'
import { StyleRoot } from 'radium'
import { connect } from  'react-redux'

import Services from '../../components/aboutMe/services'
import Skills from '../../components/aboutMe/skills'
import Instagram from '../../components/aboutMe/instagram'


const mapStateToProps = state => {
  return state
}


class aboutMe extends React.Component{

    
    
    render(){
      var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
              {this.props.main.details ?
                 <div role="tabpanel" className="tab-pane fade in active" id="about-me" style={AnimationStyles.styles.bounce_in_right}>
                    <div className="inside-sec">
                      {/* Blog */}
                      <section className="about-me padding-top-10" style={AnimationStyles.styles.fade_in_up}> 
                        {/* Personal Info */}
                      
                        <h5 className="tittle">Houston React/NodeJS Developer</h5>
                        <div className="padding-20">
                          {/*Bio Goes Here*/}
                          {this.props.main.details.bioHTML ?
                            <div dangerouslySetInnerHTML={this.props.main.details.bioHTML}/> : <div/>
                          }
                        </div>
                        {/*Services Go Here*/}
                        <Services />
                        {/* Skills */}
                        <Skills/>
                        <Instagram />
                      </section>
                      </div>
                      </div> : <div/>
              }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps)(aboutMe)