import React from 'react'
import { StyleRoot } from 'radium'

import Axios from 'axios'
import { addResumeBio } from '../../redux/actions/index'
import { connect } from  'react-redux'
import Skills from '../resume/skills'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addResumeBio: resumeBio => dispatch(addResumeBio(resumeBio))
    }
}

class bioAndSkills extends React.Component{


    componentWillMount(){
        
        if(!this.props.main.resumeBio){
            Axios({
                method: 'post',
                url: 'https://tylerclay.info/getResumeBio'
            })
            .then(res=> {
                this.props.addResumeBio(res.data);
            
            })
        }
        
    }

    render(){
        var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
                {this.props.main.resumeBio ?
                    <div className="inside-sec" style={AnimationStyles.styles.bounce_in_right}> 
                                {/* BIO AND SKILLS */}
                                <h5 className="tittle" style={AnimationStyles.styles.zoom_in_up}>Bio &amp; Skills</h5>
                                <div className="bio-info padding-30" style={AnimationStyles.styles.fade_in_up}>
                                <div dangerouslySetInnerHTML={this.props.main.resumeBio}/>

                                <Skills/>
                                </div>
                    </div> : <div/>
                }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(bioAndSkills)