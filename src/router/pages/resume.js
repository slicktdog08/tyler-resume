import React from 'react'
import { StyleRoot } from 'radium'
import BioAndSkills from '../../components/resume/bioAndSkills'
import ProfessionalExperience from '../../components/resume/professionalExperience'
import AcademicExperience from '../../components/resume/academic'

export default class resume extends React.Component{

    render(){
        var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
                <div role="tabpanel" className="tab-pane" id="resume" style={AnimationStyles.styles.slide_in_right}>
                        <BioAndSkills/>
                        <ProfessionalExperience/>
                        <AcademicExperience/>
                </div>
            </StyleRoot>
        )
    }
}