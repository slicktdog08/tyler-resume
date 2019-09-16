import React from 'react'
import { StyleRoot } from 'radium'
import SimpleReactValidation from 'simple-react-validator'
import { connect } from  'react-redux'
import Axios from 'axios'

const mapStateToProps = state => {
    return state
}


class contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            submitSuccess: false,
            successMessage: ''
        }
        this.validator = new SimpleReactValidation()
    }
    
    componentWillMount(){
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script)
    }
    handleChange = (event) =>{
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        }, () => console.log(this.state))
    }
    handleSubmit = () =>{
        if(this.validator.allValid()){
            Axios({
                method: 'post',
                url: 'https://tylerclay.info/postContactUs',
                data: {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
                }
            })
            .then(res=>{
                if(res.status === 200){
                    this.setState({
                        submitSuccess: true,
                        successMessage: res.data,
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                }
                else{
                    alert('Unable to post your information. Please call me at 713-269-2011')
                }
            })
            .catch(err=>{
                alert('Unable to reach server. Please call me at 713-269-2011')
            })
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    
    render(){
        var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
                {/* Contact */}
                <div role="tabpanel" className="tab-pane" id="contact" style={AnimationStyles.styles.bounce_in_right}>
                        <div className="inside-sec"> 
                            {/* BIO AND SKILLS */}
                            <h5 className="tittle" style={AnimationStyles.styles.zoom_in_up}>CONATCT ME</h5>
                            {/* Conatct Pages  */}
                            <section>
                            <div className="padding-left-30 padding-right-30 padding-top-50 padding-bottom-50" style={AnimationStyles.styles.fade_in_up}>
                                <div className="row "> 
                                {/* Phone Number  */}
                                <div className="col-md-4 text-center">
                                    <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-xlarge dark-text">
                                    <a href={`tel:${this.props.main.details.phone}`}>
                                       <div className="ib-icon"> <i className="fa fa-mobile text-primary" /> </div>
                                    </a>
                                    <div className="ib-info text-dark">
                                        <a href={`tel:${this.props.main.details.phone}`}><p>{this.props.main.details.parsedPhone}</p></a>
                                        
                                    </div>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="col-md-4 text-center">
                                    <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                                    <div className="ib-icon"> <i className="fa fa-map-marker text-primary" /> </div>
                                    <div className="ib-info text-dark">
                                        <p>{this.props.main.details.city}, {this.props.main.details.state}</p>
                                    </div>
                                    </div>
                                </div>
                                {/* Email  */}
                                <div className="col-md-4 text-center">
                                    <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                                    <a href={`mailto:${this.props.main.details.email}`}>
                                        <div className="ib-icon"> 
                                            <i className="fa fa-envelope-o text-primary" /> 
                                        </div>
                                    </a>
                                    <div className="ib-info text-dark">
                                        <p className="no-margin-bottom">
                                            <a href={`mailto:${this.props.main.details.email}`}
                                                className="text-white">
                                                {this.props.main.details.email}
                                            </a>
                                        </p>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Calendly */}
                          
                            <div className="calendly-inline-widget" data-url="https://calendly.com/clickficks/schedule" style={{minWidth: '320px', height: '580px'}}></div>
                        
                            {/* Contact  */}
                            <h5 className="tittle">SAY HELLO</h5>
                            <div className="contact style-3 light-border padding-top-50 padding-bottom-50 padding-left-20 padding-right-20"> 
                                {/* Form  */}
                                <div className="contact-right"> 
                                {/* Success Msg */}
                                {this.state.submitSuccess ?
                                    <div id="contact_message_1" className="success-msg">
                                    <i className="fa fa-paper-plane-o" />
                                    {this.state.successMessage}
                                    </div> : <div/>
                                }
                                {/* FORM */}
                                <div id="contact_form_1" className="contact-form">
                                    <ul className="row">
                                    <li className="col-sm-4">
                                        <label>
                                        <input type="text" className="form-control" id="name" placeholder="NAME" onChange={this.handleChange} value={this.state.name} />
                                        {this.validator.message('Name', this.state.name, 'required')}
                                        </label>
                                    </li>
                                    <li className="col-sm-4">
                                        <label>
                                        <input type="text" className="form-control" id="email" placeholder="EMAIL" onChange={this.handleChange} value={this.state.email} />
                                        {this.validator.message('Email', this.state.email, 'required|email')}
                                        </label>
                                    </li>
                                    <li className="col-sm-4">
                                        <label>
                                        <input type="text" className="form-control" id="subject" placeholder="SUBJECT" onChange={this.handleChange} value={this.state.subject}/>
                                        {this.validator.message('Subject', this.state.subject, 'required')}
                                        </label>
                                    </li>
                                    <li className="col-sm-12">
                                        <label>
                                        <textarea className="form-control" id="message" rows={5} placeholder="MESSAGE ..." onChange={this.handleChange} value={this.state.message} />
                                        {this.validator.message('Message', this.state.message, 'required|max:10000')}
                                        </label>
                                    </li>
                                    <li className="col-sm-12">
                                        <button type="button" onClick={this.handleSubmit} >SEND ME</button>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>
                        </div>
            </StyleRoot>
        )
    }
    
}
export default connect(mapStateToProps)(contact)