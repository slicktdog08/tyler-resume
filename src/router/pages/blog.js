import React from 'react'
import { StyleRoot } from 'radium'

export default class blog extends React.Component{

    render(){
        return(
            <StyleRoot>
                {/* BLOG */}
                <div role="tabpanel" className="tab-pane" id="blog">
                        <div className="inside-sec"> 
                            {/* BIO AND SKILLS */}
                            <h5 className="tittle">BLOG</h5>
                            {/* Blog */}
                            <section className="blog blog-page padding-20 padding-top-50 padding-bottom-50 "> 
                            {/* Blog Post */}

                            <article> <img className="img-responsive" src="images/blog-img-1.jpg" alt />
                                <div className="post-info">
                                <div className="post-in">
                                    <div className="extra"> <span><i className="icon-calendar" />Aug 29, 2015</span> <span className="margin-left-15"><i className="icon-user" />Admin</span> <span className="margin-left-15"><i className="icon-bubbles" /> Featured</span></div>
                                    <a href="#." className="tittle-post"> ENJOYING THE SMALL THINGS </a>
                                    <p>t's time to play the music. It's time to light the lights. It's time to meet the Muppets on the Muppet Show tonight! Boy the way Glen Miller played Songs the hit parade. Guys like us we had it made. Those were the days. These Happy Days are yours and mine Happy Days.</p>
                                    <a href="#." className="btn-1">Read MOre <i className="fa fa-angle-right" /></a> </div>
                                </div>
                            </article>
                            
                            {/* Pagination */}
                            <ul className="pagination">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                            </section>
                        </div>
                </div>
            </StyleRoot>
        )
    }
}