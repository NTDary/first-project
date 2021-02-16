import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import Rate from './Rate'
import Left from '../layout/left'

class BlogList extends Component {
    constructor(props){
      super(props)
      this.state={
          getData:[]
      }
      this.fetchData = this.fetchData.bind(this)
  }
  
  componentDidMount(){
      axios.get(`http://localhost/laravel/public/api/blog`)
      .then(res =>{
          const getData = res.data.blog.data;

          this.setState({
            getData,
          });
          
          //console.log(getData);
      })
      .catch(error => console.log(error));
  }

  fetchData(){
      let items = this.state.getData
      if(items){
        //console.log("alo"+ items.length)
      }
     
      if(items.length > 0){
          return items.map((object, i) =>{
              this.state={
                id: object.id
              }
              return(
                  <div key={i} index={i} className="single-blog-post">
                        <h3>{object.title}</h3>
                        <div className="post-meta">
                          <ul>
                            <li><i className="fa fa-user" /> Mac Doe</li>
                            <li><i className="fa fa-clock-o" />{object.created_at.slice(object.created_at.search(" "))}</li>
                            <li><i className="fa fa-calendar" />{object.created_at.substr(0,object.created_at.search(" "))}</li>
                          </ul>
                          <span>
                            {/* <Rate/> */} 
                          </span>
                        </div>
                        <a href>
                         
                          <img src={"http://localhost/laravel/public/upload/Blog/image/" + object.image} alt="" />
                        </a>
                        <p>{object.description}</p>
                        <Link to={"/Blog/detail/" + object.id} className="btn btn-primary" href>Read More</Link>
                      </div>                    
              )
          })
      }
  }

  render(){
      return(
        <>
            <Left/>
            <div className="col-sm-9">
              <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                  {this.fetchData()}
              </div>
            </div>  
        </>
      )
  }
}
export default BlogList;