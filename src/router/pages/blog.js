import React from 'react'
import { StyleRoot } from 'radium'
import Axios from 'axios'
import Moment from 'moment'
import {Link} from 'react-router-dom'

export default class blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogPosts: null
        }
    }
    componentWillMount(){
        Axios({
            method: 'get',
            url: 'https://api.clickficks.com/blog/getBlogPosts'
        })
        .then(res=>{
            this.setState({
                blogPosts: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    stripHtml(html){
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    render(){
        return(
            <StyleRoot>
                {/* BLOG */}
                
                <div role="tabpanel" className="tab-pane" id="blog">
                    <div className="inside-sec"> 
                        <section className="blog blog-page padding-20 padding-top-50 padding-bottom-50 ">
                        {typeof(this.state.blogPosts) != 'undefined' && this.state.blogPosts != null && this.state.blogPosts.length > 0 && this.state.blogPosts.map(b=>{
                            return(
                                <article> 
                                    <img className="img-responsive" 
                                        src={typeof(b.images) != 'undefined' && b.images != null && b.images.length > 0 ? b.images[0].url : ''} 
                                        alt={typeof(b.images) != 'undefined' && b.images != null && b.images.length > 0 ? b.images[0].alt : 'No alternative text found for image'}
                                    />
                                    <div className="post-info">
                                        <div className="post-in">
                                            <div className="extra"> 
                                                <span><i className="icon-calendar" />{Moment(b.dateCreated).format('MM-DD-YYYY')}</span>
                                                <span className="margin-left-15"><i className="icon-user" />{b.authorName}</span>
                                                <span className="margin-left-15"><i className="icon-bubbles" />{b.category}</span>
                                            </div>
                                        <Link to={`/blog/${b.slug}`} className="tittle-post">{b.title}</Link>
                                        <p>
                                            {String(this.stripHtml(b.html)).substring(0,250) + '...'}
                                        </p>
                                        <Link to={`/blog/${b.slug}`} className="btn-1">Read MOre <i className="fa fa-angle-right" /></Link> </div>
                                    </div>
                                </article> 
                            )
                        })}    
                        </section>
                    </div>
                        
                </div>
            </StyleRoot>
        )
    }
}


/*

<div className="inside-sec"> 
                            {/* BIO AND SKILLS *}
                            <h5 className="tittle">BLOG</h5>
                            {/* Blog *}
                            <section className="blog blog-page padding-20 padding-top-50 padding-bottom-50 "> 
                            {/* Blog Post *}

                            <article> <img className="img-responsive" src="images/blog-img-1.jpg" alt />
                                <div className="post-info">
                                <div className="post-in">
                                    <div className="extra"> <span><i className="icon-calendar" />Aug 29, 2015</span> <span className="margin-left-15"><i className="icon-user" />Admin</span> <span className="margin-left-15"><i className="icon-bubbles" /> Featured</span></div>
                                    <a href="#." className="tittle-post"> ENJOYING THE SMALL THINGS </a>
                                    <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                                    <a href="#." className="btn-1">Read MOre <i className="fa fa-angle-right" /></a> </div>
                                </div>
                            </article>
                            
                            {/* Pagination *}
                            <ul className="pagination">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                            </section>
                        </div>

                        */



/*
<h4>Blog content for this website is coming soon!</h4>
                            <p style={{fontSize: '1.4em', marginTop: '20px'}}>
                                <a href='https://clickficks.com/blog' style={{color: '#7297CE'}}>
                                    Please click here to check out the blog posts for my
                                    development and marketing company Clickficks Software &amp; Marketing
                                </a>
                            </p>

*/