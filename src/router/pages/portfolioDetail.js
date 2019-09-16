import React from 'react'
import withStyles from 'react-jss'
import Axios from 'axios'
import Moment from 'moment'
import InnerHTML from 'dangerously-set-inner-html'
import {Button} from 'reactstrap'

//this is an ineffiecent component as it is pulling all of the portfolio data for no reason

const styles = {
    projectDetails: {
        fontSize: '1.3em',
        lineHeight: '1.2',
        display: 'inline-block'
    },
    portfolioDesc: {
        fontSize: '1.4em',
        lineHeight: '1.5'
    },
    portfolioLinkURL: {
        color: '#346ABB',
        fontSize: '2em',
    }
}

class portfolioDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfolios: null,
            portfolio: null //this is the real data for the page
        }
    }
    componentWillMount(){
        var slug = this.props.match.params.slug;
        this.fetchAllPortfolios()
            .then(()=>{
                this.findPortfolioBySlug(slug)
                    .then(()=>{
                        console.log('data was found!')
                    })
                    .catch(err=>{
                        console.log('findPortfolioBySlug failed ', err)
                    })
            })
            .catch(err=>{
                console.log('fetchAllPortfolios failed ', err)
            })
        
    }
    fetchAllPortfolios = () => {
        return(
            new Promise((resolve, reject)=> {
                Axios({
                    method: 'get',
                    url: 'https://api.clickficks.com/portfolio'
                })
                .then(res=> {
                   this.setState({
                       portfolios: res.data
                   }, () => {
                       resolve()
                   })
                })
                .catch(err=> {
                    reject('Unable to fetch all portfolio details')
                })
            })
        )
    }
    findPortfolioBySlug = (slug) => {
        return(
            new Promise((resolve, reject)=>{
                for(var i=0; i < this.state.portfolios.length; i++){
                    if(this.state.portfolios[i].slug === slug){
                        this.setState({
                            portfolio: this.state.portfolios[i]
                        }, ()=> {
                            resolve()
                        })
                    }
                }
            })
        )
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                {typeof(this.state.portfolio) != 'undefined' && this.state.portfolio != null ?
                    <div>
                        <img src={this.state.portfolio.images[0].imgSrc} alt={this.state.portfolio.images[0].imgAlt} className='img-responsive'/>
                        <h1>{this.state.portfolio.headerText} - {this.state.portfolio.name}</h1> <br/>
                        <p className={classes.projectDetails}>
                            <b>Date:</b> {Moment(this.state.portfolio.date).format('MM-DD-YYYY')}<br/><br/>
                            <b>City:</b> {this.state.portfolio.city}<br/><br/>
                            <b>Company:</b> {this.state.portfolio.company}<br/>
                        </p>
                        <p className={classes.portfolioDesc}>
                            <InnerHTML html={this.state.portfolio.desc}/>
                        </p> <br />
                        <a href={this.state.portfolio.url} className={classes.portfolioLinkURL}>
                            <Button type='button'>View Website</Button>
                        </a> 

                    </div> 
                    :
                    <div>Sorry we could not find that portfolio item!</div>
                }
            </div>
        )
    }
}

export default withStyles(styles)(portfolioDetail)
