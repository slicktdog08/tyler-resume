import React from 'react'
import { StyleRoot } from 'radium'

export default class portfolio extends React.Component{

    render(){
        var AnimationStyles = require('../../utils/animation')
        return(
            <StyleRoot>
                {/* PORTFOLIO */}
                <div role="tabpanel" className="tab-pane" id="portfolio" style={AnimationStyles.styles.bounce_in_right}>
                        <div className="inside-sec"> 
                            {/* BIO AND SKILLS */}
                            <h5 className="tittle" style={AnimationStyles.styles.slide_in_right}>PORTFOLIO</h5>
                            {/* PORTFOLIO */}
                            <section className="portfolio padding-top-50 padding-bottom-50" style={AnimationStyles.styles.fade_in_up}> 
                            <div>
                                Majority of the websites I create are designed to streamline internal business processess.
                                Many of these websites sit behind login walls and I am unable to share credentials due to NDA I have in place.
                            </div>
                            <br/>
                            <div>More examples of previous work can be provided upon request - I don't have a large quanity of projects I can present, but the projects I do have are high in quality</div>
                            <br/>
                            <div>Here are links to a few of my projects that I am able to share: </div>
                            <br />
                            <ul className='portfolioList'>
                                <li ><a href='https://www.benchmarkbroker.com' target='__blank'>Benchmark Insurance Group Homepage</a></li><br/>
                                <li><a href='https://www.benchmarkbroker.com/service' target='__blank'>Benchmark Customer Service Request Intake</a></li><br/>
                                <li>The site you are on was created by me using React, Redux, Node.JS, Express, MySQL, AWS S3, AWS Elastic Beanstalk, and AWS RDS.
                                    This site is database driven!
                                </li>
                            </ul>
                            </section>
                        </div>
                        </div>
            </StyleRoot>
        )
    }
}