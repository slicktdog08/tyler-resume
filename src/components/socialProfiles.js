import React from 'react'
import { StyleRoot } from 'radium'
import { connect } from  'react-redux'
import { addSocialProfiles } from '../redux/actions/index'
import Axios from 'axios';

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return{
        addSocialProfiles: socialProfiles => dispatch(addSocialProfiles(socialProfiles))
    }
}
  

class socialProfiles extends React.Component{
    
    componentWillMount(){
        if(!this.props.main.socialProfiles){
            Axios({
                method: 'post',
                url: 'https://ap1.tylerthedeveloper.com/getSocialProfiles'
            })
            .then(res => {
                this.props.addSocialProfiles(res.data)
            })
        }
    }
  

    render(){
       
        return(
            <StyleRoot>
                {this.props.main.socialProfiles ?
                    <div>
                        <h5 className="tittle">Social Profiles</h5>
                        <div className="social-icon bor-btm padding-25">
                            <ul>
                                {this.props.main.socialProfiles.map(profile => {
                                    return(
                                        <li key={profile.name}> 
                                            <a href={profile.url} target="_blank">
                                                <i className={profile.icon} />
                                            </a> 
                                        </li>
                                    )
                                })}
                                
                            </ul>
                        </div>
                    </div> : <div/>
                }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(socialProfiles)