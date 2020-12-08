import React from 'react'
import { StyleRoot } from 'radium'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {Col, Row, Container} from 'reactstrap'
import withStyles from 'react-jss'
import Masonry from 'react-masonry-component';



const styles = {
    portfolioContainer: {
        width: '48%',
        margin: '1%',
        display: 'inline-block',
        background: '#000',
        minHeight: '260px'
    },
    portfolioName: {
        textAlign: 'center',
        color: '#fff',
        fontSize: '1.3em',
        padding: '10px',
        borderBottom: '2px solid #346ABB',
        transition: 'all .2s ease-in-out',
        '&:hover':{
            fontSize: '1.4em'
        }


    },
    portfolioViewButton: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: '1.1em',
        padding: '10px',
        fontWeight: '600',
        borderTop: '2px solid #346ABB',
        background: '#346ABB',
        //borderBottomLeftRadius: '10px',
        //borderBottomRightRadius: '10px',
        transition: 'all .2s ease-in-out',
        '&:hover, &:active': {
            background: '#000',
            borderTop: '3px solid #346ABB',
            fontSize: '1.2em'
        }
    },
    portfolioImgDiv: {
        overflow: 'hidden'
    },
    portfolioImg: {
        transition: 'all .2s ease-in-out',
        overflow: 'hidden',
        '&:hover':{
            transform: 'scale(1.2)'
        }
    }
}

const masonryOptions = {
    transitionDuration: 0
};

class portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfolio: null
        }
    }
    componentWillMount(){
        Axios({
            method: 'get',
            url: 'https://api.clickficks.com/portfolio'
        })
        .then(res=>{
            this.setState({portfolio:res.data})
        })
        .catch(err=>{
            console.log('An error occurred while pulling portfolio data! ', err)
        })
    }
    render(){
        var AnimationStyles = require('../../utils/animation');
        const {classes} = this.props;
        const childElements = typeof(this.state.portfolio) != 'undefined' &&
            this.state.portfolio != null &&
            this.state.portfolio.length > 0 &&
            this.state.portfolio.map(p=>{
                return(
                        <div className={classes.portfolioContainer}>
                            <Link to={`/portfolio/${p.slug}`}>
                                <div className={classes.portfolioName}>{p.name}</div>
                                <div className={classes.portfolioImgDiv}>
                                    <img src={p.images[0].imgSrc} className={`img-responsive ${classes.portfolioImg}`}/>
                                </div>
                                <div className={classes.portfolioViewButton}>
                                    View Details
                                </div>
                            </Link>
                        </div>
                )
        })
        return(
            <StyleRoot>
                {/* PORTFOLIO */}
                <div role="tabpanel" className="tab-panel" id="portfolio" style={AnimationStyles.styles.bounce_in_right}>
                    <div className="inside-sec"> 
                    <Masonry
                        className={'default'} // default ''
                        options={masonryOptions}
                        elementType={'div'} // default 'div'
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        {childElements}
                    </Masonry>
                    </div>
                </div>
            </StyleRoot>
        )
    }
}

export default withStyles(styles)(portfolio)

/*
<h5 className="tittle" style={AnimationStyles.styles.slide_in_right}>PORTFOLIO</h5>
                           
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

                            */