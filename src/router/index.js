import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StyleRoot } from 'radium'


import ProfessionalDetails from '../components/professionalDetails'
import Attachments from '../components/attachments'
import SocialProfiles from '../components/socialProfiles'
import ContactMeWidget from '../components/contactMeWidget'
import Navbar from '../components/navbar'


import AboutMe from './pages/aboutMe'
import Resume from './pages/resume'
import Portfolio from './pages/portfolio'
import PortfolioDetail from './pages/portfolioDetail'
import Blog from './pages/blog'
import BlogDetail from './pages/blogDetail'
import Contact from './pages/contact'
import Admin from './pages/admin/index'


export default class extends React.Component{

    editResume = () =>{
        alert('Your location does not match the geographic location of the person who can edit this resume. You will not be allowed to attempt authentication!')
    }

    render(){
        return(
    
        <StyleRoot>
            <div id="wrap"> 
    
            {/* Content */}
            <main className="cd-main-content">
                <div id="content">
                <div className="resume">
                    <div className="container"> 
                    {/* TOP HEAD */}
                    <div className="top-head">
                        <div className="row">
                        <div className="col-sm-6">
                            <h4>TYLER CLAY FULL-STACK JAVASCRIPT DEVELOPER </h4>
                            
                            </div>
                        
                        </div>
                    </div>
                    {/* Resume */}
                    <div className="row"> 
                        {/* Sidebar */}
                        <div className="col-md-4">
                        <div className="side-bar"> 
                            {/* Professional Details */}
                            
                            <ProfessionalDetails/>
                            {/* Attachments */}
                            <Attachments/>
                            {/* Social Profiles */}
                            <SocialProfiles/>
                            {/* Contact Me */}
                            <ContactMeWidget/>
                        </div>
                        </div>
                            <div className="col-md-8">
                                        
                            <BrowserRouter>
                                <div> 
                                <Navbar/>
                                    <Switch> 
                                            <Route path='/' component={AboutMe} exact/>
                                            <Route path='/aboutMe' component={AboutMe}/>
                                            <Route path='/resume' component={Resume}/>
                                            <Route path='/portfolio' exact component={Portfolio}/>
                                            <Route path='/portfolio/:slug' component={PortfolioDetail}/>
                                            <Route path='/blog' exact component={Blog}/>
                                            <Route path='/blog/:slug' component={BlogDetail}/>
                                            <Route path='/contact' component={Contact}/>
                                            <Route path='/admin' component={Admin}/>
                                    </Switch>
                                </div>
                            </BrowserRouter>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            {/* End Content */} 
            {/* Footer */}
            <footer className="footer">
                <div className="rights">
                <p>© Copyright 2019 Tyler Clay. All right reserved.</p>
                <p>This site is powered by React, Redux, Node.JS, Express, MySQL!</p>
                 <p>Hosting is all powered by AWS via S3, Elastic Beanstalk, RDS, CloudFront, Route 53, Load Balancer, and Certificate Manager</p>
                </div>
            </footer>
            {/* End Footer */} 
            </div>
        </StyleRoot>
    )
        }
    }