import React, {Component} from 'react';
import Axios from 'axios';
import Left from '../layout/left';
import BoxComment1 from './BoxComment1';


class Blogdetail1 extends Component {
    constructor(props){
        super(props)
        this.state={
            getData: []
        }
    }

    componentDidMount(){ 
        let url = `http://localhost/laravel/public/api/blog/detail/`
        Axios.get(url + this.props.match.params.id)
        .then(res => {
            this.setState({
                getData: res.data.data
            })
            
        })
    }

    render(){
        let Data = this.state.getData
        return(
            <>
                <Left/>
                <div className="col-sm-9">
                    <div className="blog-post-area">
                    <h2 className="title text-center">{Data.title}</h2>
                    <div className="single-blog-post">
                        <h3>Girls Pink T Shirt arrived in store</h3>
                        <div className="post-meta">
                        <ul>
                            <li><i className="fa fa-user" /> Mac Doe</li>
                            <li><i className="fa fa-clock-o" />{Data.created_at}</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                        </ul>
                        <span>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                        </span>
                        </div>
                        <a href>
                        <img src={"http://localhost/laravel/public/upload/Blog/image/" + Data.image} alt="" />
                        </a>
                        <p>
                            {Data.description}
                        </p>
                        <div className="pager-area">
                        <ul className="pager pull-right">
                            <li><a href="#">Pre</a></li>
                            <li><a href="#">Next</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>{/*/blog-post-area*/}
                    <div className="rating-area">
                    <ul className="ratings">
                        <li className="rate-this">Rate this item:</li>
                        <li>
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star color" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        </li>
                        <li className="color">(6 votes)</li>
                    </ul>
                    <ul className="tag">
                        <li>TAG:</li>
                        <li><a className="color" href>Pink <span>/</span></a></li>
                        <li><a className="color" href>T-Shirt <span>/</span></a></li>
                        <li><a className="color" href>Girls</a></li>
                    </ul>
                    </div>{/*/rating-area*/}
                    <div className="socials-share">
                    <a href><img src="images/blog/socials.png" alt="" /></a>
                    </div>{/*/socials-share*/}
                    <div className="media commnets">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/blog/man-one.jpg" alt="" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Annie Davis</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="blog-socials">
                        <ul>
                            <li><a href><i className="fa fa-facebook" /></a></li>
                            <li><a href><i className="fa fa-twitter" /></a></li>
                            <li><a href><i className="fa fa-dribbble" /></a></li>
                            <li><a href><i className="fa fa-google-plus" /></a></li>
                        </ul>
                        <a className="btn btn-primary" href>Other Posts</a>
                        </div>
                    </div>
                    </div>{/*Comments*/}
                    <div className="response-area">
                    <h2>3 RESPONSES</h2>
                    <ul className="media-list">
                        <li className="media">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/blog/man-two.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user" />Janis Gallagher</li>
                            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
                        </div>
                        </li>
                        <li className="media second-media">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/blog/man-three.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user" />Janis Gallagher</li>
                            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
                        </div>
                        </li>
                        <li className="media">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/blog/man-four.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user" />Janis Gallagher</li>
                            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
                        </div>
                        </li>
                    </ul>					
                    </div>{/*/Response-area*/}
                    <BoxComment1 data={this.props.match.params.id}/>
                </div>

            </>
        )
    }
    
}
export default Blogdetail1;