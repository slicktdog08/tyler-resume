import React from 'react'

import { StyleRoot } from 'radium'
import { connect } from  'react-redux'



class serviceTile extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            icon: this.props.icon,
            desc: this.props.desc
        }
    }

    render(){
        return(
            <StyleRoot>
                <div className="col-md-4 text-center">
                    <div className="icon-box i-large ib-black">
                        <div className="ib-icon"> <i className={this.state.icon} /> </div>
                        <div className="ib-info">
                            <h4 className="h6">{this.state.name}</h4>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        )
    }
}
export default serviceTile