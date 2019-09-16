import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import InnerHTML from 'dangerously-set-inner-html'
import Moment from'moment'
import withStyles from 'react-jss'
//This is needed for custom HTML that is imported dangerously from the API
import '../../assets/css/blogDetail.css'

const styles = {
    blue: {
        color: '#337AB7',
        padding: '5px'
    },
    html: {
        padding: '5px',
        margin: '5px',
        lineHeight: '2'
    },
    callToAction: {
        padding: '5px'
    },
    callToActionLink: {
        color: '#35D6A3',
        fontWeight: '600',
        fontSize: '1.3em'
    }
}

class blogDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogData: null,
        }
        
    }
    componentWillMount(){
        var slug =  typeof(this.props.match.params.slug) != 'undefined' && this.props.match.params.slug != null ? this.props.match.params.slug : '';
        
        if(typeof(slug) != null && slug != '' && slug){
            Axios({
                method: 'get',
                url: `https://api.clickficks.com/blog/getBlogPost/${slug}`
            })
            .then(res=>{
                this.setState({
                    blogData: res.data
                })
            })
            .catch(err=>{
                console.log('Error occurred while fetching blog data', err);
            })
        }
        
    }

    render(){
        const {classes} = this.props;
        const CallToAction = (
            <div className={classes.callToAction}>
                <a href='https://clickficks.com/quote' className={classes.callToActionLink}>
                    Click here to get a <b>FREE</b> business consultation for all of your <u>Web Development</u> and <u>Marketing</u> needs!
                </a>
            </div>
        )
        return(
            <div role="tabpanel" className="tab-pane" id="blog">
                <div className="inside-sec"> 
                    <section className="blog blog-page padding-20 padding-top-50 padding-bottom-50 ">
                        {this.state.blogData === null ?
                            <div>
                                <h5>
                                    Sorry we are unable to find the specified blog post! Maybe it does not exist :(
                                </h5>

                                <Link to='/blog'>Click here to see list of blogs!</Link>
                            </div> : 
                            <div>
                                <img className="img-responsive" 
                                        src={typeof(this.state.blogData.images) != 'undefined' && this.state.blogData.images != null && this.state.blogData.images.length > 0 ? this.state.blogData.images[0].url : ''} 
                                        alt={typeof(this.state.blogData.images) != 'undefined' && this.state.blogData.images != null && this.state.blogData.images.length > 0 ? this.state.blogData.images[0].alt : 'No alternative text found for image'}
                                />

                                <h1>
                                    {this.state.blogData.title}
                                </h1>
                                {CallToAction}
                                <div className={classes.blue}><b>Author:</b> {this.state.blogData.authorName}</div> <br/>
                                <div className={classes.blue}><b>Category:</b> {this.state.blogData.category}</div> <br/>
                                <div className={classes.blue}><b>Date:</b> {Moment(this.state.blogData.dateCreated).format('MM-DD-YYYY')}</div>
                                <div className={classes.html}>
                                    <InnerHTML html={this.state.blogData.html}/>
                                </div>
                                {CallToAction}
                            </div>
                        }
                    </section>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(blogDetail)