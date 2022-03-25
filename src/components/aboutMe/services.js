import React from 'react'
import { StyleRoot } from 'radium'
import { connect } from  'react-redux'

import ServiceTile from '../../components/aboutMe/serviceTile'
import Axios from 'axios'
import { addServices } from '../../redux/actions/index'

const mapDispatchToProps = (dispatch) => {
    return {
      addServices: services => dispatch(addServices(services))
    }
}
const mapStateToProps = state => {
    return state
}

class services extends React.Component{
    componentWillMount(){
      if(!this.props.main.services){
        Axios({
          method: 'post',
          url: 'https://ap1.tylerthedeveloper.com/getServices'
        })
        .then(res=>{
          this.props.addServices(res.data)
        })
      }
        
    }

    render(){
        return(
            <StyleRoot>
              {this.props.main.services ?
                <div>
                {/* Services */}
                <h5 className="tittle">Services</h5>
                        <div className="row padding-20 margin-top-50"> 
                          {/* Icon */}
                          <ServiceTile
                            name={this.props.main.services[0].name}
                            icon={this.props.main.services[0].iconName}
                            desc={this.props.main.services[0].desc}/>
                          {/* Icon */}
                          <ServiceTile
                            name={this.props.main.services[1].name}
                            icon={this.props.main.services[1].iconName}
                            desc={this.props.main.services[1].desc}/>
                          {/* Icon */}
                          <ServiceTile
                            name={this.props.main.services[2].name}
                            icon={this.props.main.services[2].iconName}
                            desc={this.props.main.services[2].desc}/>
                        </div>
                        {/* Icon Row */}
                        <div className="row padding-20 margin-bottom-50"> 
                          {/* Icon */}
                          <ServiceTile
                            name={this.props.main.services[3].name}
                            icon={this.props.main.services[3].iconName}
                            desc={this.props.main.services[3].desc}/>
                          {/* Icon */}
                          <ServiceTile
                            name={this.props.main.services[4].name}
                            icon={this.props.main.services[4].iconName}
                            desc={this.props.main.services[4].desc}/>
                          {/* Icon */}
                          <ServiceTile
                            name={this.props.main.services[5].name}
                            icon={this.props.main.services[5].iconName}
                            desc={this.props.main.services[5].desc}/>
                        </div>
                  </div> :<div/>
              }
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(services)