import React, {Component} from 'react'
import axios from 'axios'

class GetApi extends Component {
    constructor(props){
        super(props)
        this.state={
            getData:[]
        }
    }
    componentDidMount(){
        axios.get(`http://localhost/laravel/public/api/blog`)
        .then(res =>{
            const getData = res.data.blog.data;
            this.setState({getData});
            console.log(res);
            //console.log(getData);
        })
        .catch(error => console.log(error));
    }

    fetchData(){
        let items = this.state.getData
        console.log(items)
        if(items instanceof Array){
            return items.map((object, i) =>{
                console.log(i)
                console.log(object.title)
              //var test = object.created_at
                
                console.log(object.created_at)
                return(
                    <div className="col-sm-9">
                      <div className="blog-post-area">
                        <h2 className="title text-center">Latest From our Blog</h2>
                        
                        <div key={i} index={i} className="single-blog-post">
                          <h3>{object.title}</h3>
                          <div className="post-meta">
                            <ul>
                              <li><i className="fa fa-user" /> Mac Doe</li>
                              <li><i className="fa fa-clock-o" />{object.created_at.slice(object.created_at.search(" "))}</li>
                              <li><i className="fa fa-calendar" />{object.created_at.substr(0,object.created_at.search(" "))}</li>
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
                            <img src={"./laravel/public/upload/Blog/image/" + object.image} alt="" />
                          </a>
                          <p>{object.description}</p>
                          <a className="btn btn-primary" href>Read More</a>
                        </div>
                        
                        
                      </div>
                    </div>
                    
                )
            })
        }
    }

    render(){
        //console.log(this.state.getData.map(index => index.image))
        return(
            <ul>
               {this.fetchData()}
            </ul>
        )
    }
}
export default GetApi;
