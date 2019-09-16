import React from 'react'
import { StyleRoot } from 'radium'
import { withRouter } from 'react-router-dom'

class navbar extends React.Component{
    constructor(props){
      super(props);
      //should read current state
      this.state = {
        page: 'aboutMe',
        expanded: false
      }
    }
    componentWillMount(){
     var path = window.location.pathname;
     path =  path.substring(1);
     var newState = Object.assign({}, this.state.page);
     console.log('Path is currently ', path)
     switch(path){
      case 'aboutMe':
        newState = 'aboutMe';
        break;
      case 'resume':
        newState = 'resume'
        break;
      case 'portfolio':
        newState = 'portfolio';
        break;
      case 'blog':
        newState = 'blog'
        break;
      case 'contact':
        newState = 'contact'
        break;
      default:
        //try to detect if this is a blog route
        if(this.detectBlogRoute(path)){
          newState = 'blog'
        }
        else{
          if(this.detectPortfolioRoute(path)){
            newState = 'portfolio'
          }
          else{
            newState = 'aboutUs'
          }
          
        }
     }
     this.setState({
       page: newState
     }, ()=> {
       console.log(this.state.page)
     })
    }

    detectBlogRoute = (route) => {
      //will take a route and determine if this is a blog route
      //Will return true if blog route and false if not
      var path = String(route).substring(0,4);
      console.log('Path in detectBlogRoute is ', path)
      if(path === 'blog'){
        return true
      }
      else{
        return false
      }
    }

    detectPortfolioRoute = (route) => {
      //will take a route and determine if this is a portfolio route
      //Will return true if portfolio route is detected and false if not
      var path = String(route).substring(0,9);
      if(path === 'portfolio'){
        return true
      }
      else{
        return false
      }
    }

    navbarController = (event) =>{
      this.setState({
        page: event.target.id
      }, ()=>{
        this.props.history.push(`/${this.state.page}`)
      })
    }
    mobileMenuToggle = () =>{
      var oldState = Object.assign({}, this.state)
      this.setState({
        expanded: oldState.expanded ? false : true
      })
    }

    render(){
      var AnimationStyle = require('../utils/animation')
        return(
            <StyleRoot>
                <nav> 
                  {/* Brand and toggle get grouped for better mobile display */}
                  <button type="button" className="navbar-toggle collapsed" onClick={this.mobileMenuToggle}> <span className="tittle">MENU</span> <span className="fa fa-navicon icon-nav" /> </button>
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className={this.state.expanded ? 'navbar-collapse' : 'collapse navbar-collapse'} id="nav-tabis" style={AnimationStyle.styles.bounce_in_left}>
                    <ul className="isop-filter nav nav-pills">
                      <li role="presentation" className={this.state.page === 'aboutMe' ? 'active': ''} >
                        <a href="javascript:void(0)" id="aboutMe" role="tab" data-toggle="tab" onClick={this.navbarController}>
                          <i className="icon-user" /> ABOUT ME
                        </a>
                      </li>
                      <li role="presentation" className={this.state.page === 'resume' ? 'active': ''}>
                        <a href="javascript:void(0)" id="resume" role="tab" data-toggle="tab" onClick={this.navbarController}>
                          <i className="icon-book-open" />RESUME
                        </a>
                      </li>
                      <li role="presentation" className={this.state.page === 'portfolio' ? 'active': ''}>
                        <a href="javascript:void(0)" id="portfolio" role="tab" data-toggle="tab" onClick={this.navbarController}>
                          <i className="icon-rocket" />PORTFOLIO
                        </a>
                      </li>
                      <li role="presentation" className={this.state.page === 'blog' ? 'active': ''}>
                        <a href="javascript:void(0)" id="blog" role="tab" data-toggle="tab" onClick={this.navbarController}>
                          <i className="icon-note" />BLOG
                        </a>
                      </li>
                      <li role="presentation" className={this.state.page === 'contact' ? 'active': ''}>
                        <a href="javascript:void(0)" id="contact" role="tab" data-toggle="tab" onClick={this.navbarController}>
                          <i className="icon-pencil" />CONTACT ME
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </StyleRoot>
        )
    }
}
export default withRouter(navbar)