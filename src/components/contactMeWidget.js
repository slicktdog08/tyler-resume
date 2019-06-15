import React from 'react'
import { StyleRoot } from 'radium'
import SimpleReactValidator from 'simple-react-validator'
import Axios from 'axios'

export default class contactMeWidget extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        email: '',
        subject: '',
        message: '',
        submitSuccess: false,
        formSubmitMessage: ''
      }
      this.validator = new SimpleReactValidator();
    }
    handleChange = (event) => {
      this.setState({
        [event.currentTarget.id]: event.currentTarget.value
      })
    }
    handleSubmit = () =>{
      if(this.validator.allValid()){
        Axios({
          url: `https://tylerclay.info/postContactUs`,
          method: 'post',
          data:{
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
              formSubmitMessage: res.data,
              email: '',
              subject: '',
              message: ''
            })
          }
          else{
            alert('Unable to post your information. Please give me a call at 713-269-2011')
          }
        })
        .catch(err=>{
          alert('Unable to reach server. Please give me a call at 713-269-2011')
        })
      }
      else{
        this.validator.showMessages();
        this.forceUpdate()
      }
    }
    render(){
        return(
            <StyleRoot>
                 <h5 className="tittle">Contact Me</h5>
                  <div className="contact padding-25"> 
                    {/* Success Msg */}
                    {this.state.submitSuccess ?
                    <div id="contact_message" className="success-msg"> 
                      <i className="fa fa-paper-plane-o" />{this.state.formSubmitMessage} 
                    </div> : <div/>
                    }
                    {/* FORM */}
                    <form role="form" id="contact_form" className="contact-form">
                      <ul className="row">
                        <li className="col-sm-12">
                          <label>
                            <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                            {this.validator.message('Email', this.state.email, 'required|email')}
                          </label>
                        </li>
                        <li className="col-sm-12">
                          <label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject" onChange={this.handleChange} value={this.state.subject} />
                            {this.validator.message('Subject', this.state.subject, 'required')}
                          </label>
                        </li>
                        <li className="col-sm-12">
                          <label>
                            <textarea className="form-control" id="message" rows={5} placeholder="Message" defaultValue={""} onChange={this.handleChange} value={this.state.message}/>
                            {this.validator.message('Message', this.state.message, 'required|max:10000')}
                          </label>
                        </li>
                        <li className="col-sm-12">
                          <button type="button" onClick={this.handleSubmit} >Send Message</button>
                        </li>
                      </ul>
                    </form>
                  </div>
            </StyleRoot>
        )
    }
}