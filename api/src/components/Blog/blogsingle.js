import React, {Component} from 'react'
import axios from 'axios'
import bloglist from "./bloglist"
import ListComment from './ListComment'
import Left from '../layout/left'
import Comment from './Comment'
import Rate from './Rate'

class BlogSingle extends Component {
    constructor(props){
      super(props)
      this.state={
          getData:{},
          getComment: {},
          idCha: ''
      }
      this.addComment = this.addComment.bind(this);
      this.getIdCha = this.getIdCha.bind(this);
  }
  // addComment(data){
  //   this.setState({comment: this.state.comment.concat(data)})
  // }
  getIdCha(id){
    console.log(id)
    this.setState({
      idCha: id
    })
  }
  addComment(data){
    this.setState({
      getComment: this.state.getComment.concat(data)
    })
  }
  componentDidMount(){
      axios.get(`http://localhost/laravel/public/api/blog/detail/`+ this.props.match.params.id)
      .then(res =>{
           const getData = res.data.data;

            // console.log(getData)
           this.setState({
             getData,
             getComment: getData.comment
          });
          // console.log(this.state.getData.id)
      })
      .catch(error => console.log(error));
  }
  
  render(){
    
    let items = this.state.getData;
    return(
      <>
        <Left/>
        <div className="col-sm-9">
                      <div className="blog-post-area">
                        <h2 className="title text-center">Latest From our Blog</h2>
                        <div className="single-blog-post">
                          <h3>{items.title}</h3>
                          <div className="post-meta">
                            <ul>
                              <li><i className="fa fa-user" /> Mac Doe</li>
                              <li><i className="fa fa-clock-o" /> {items.created_at}</li>
                              <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                            <span>
                              <Rate blog_id = {this.props.match.params.id}/>
                            </span>
                          </div>
                          <a href>
                            <img src={"http://localhost/laravel/public/upload/Blog/image/" + items.image} alt="" />
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <br />
                          <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> <br />
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
                            <Rate blog_id = {this.props.match.params.id}/>
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
                        <a href><img src="./frontend/images/blog/socials.png" alt="" /></a>
                      </div>{/*/socials-share*/}
                      <div className="media commnets">
                        <a className="pull-left" href="#">
                          <img className="media-object" src="" alt="" />
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
                          <ListComment getIdCha = {this.getIdCha} dataFromParent={this.state.getComment} />
                        </ul>					
                      </div>{/*/Response-area*/}
                      <Comment addComment ={this.addComment} data={this.state.getData} id ={this.state.idCha}/>
                    </div>
      </>
    )
  }
   
}
export default BlogSingle;