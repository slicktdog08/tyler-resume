import React from 'react'
import { StyleRoot } from 'radium'
import { withRouter, Link } from 'react-router-dom'

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
                      <li role="presentation" className={this.props.location.pathname === '/aboutMe' || this.props.location.pathname === '/' ? 'active': ''} >
                        <Link to='/aboutMe' role="tab" data-toggle="tab" >
                          <i className="icon-user" /> ABOUT ME
                        </Link>
                      </li>
                      <li role="presentation" className={this.props.location.pathname === '/resume' ? 'active': ''}>
                        <Link to='/resume' role="tab" data-toggle="tab">
                          <i className="icon-book-open" />RESUME
                        </Link>
                      </li>
                      <li role="presentation" className={String(this.props.location.pathname).substring(0,10) === '/portfolio' ? 'active': ''}>
                        <Link to='/portfolio' role="tab" data-toggle="tab">
                          <i className="icon-rocket" />PORTFOLIO
                        </Link>
                      </li>
                      <li role="presentation" className={String(this.props.location.pathname).substring(0,5) === '/blog'  ? 'active': ''}>
                        <Link to='/blog' role="tab" data-toggle="tab">
                          <i className="icon-note" />BLOG
                        </Link>
                      </li>
                      <li role="presentation" className={this.props.location.pathname === '/contact' ? 'active': ''}>
                        <Link to='/contact' role="tab" data-toggle="tab">
                          <i className="icon-pencil" />CONTACT ME
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
            </StyleRoot>
        )
    }
}
export default withRouter(navbar)