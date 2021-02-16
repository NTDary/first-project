import React, {Component} from 'react'
import Axios from 'axios'
import {Link} from "react-router-dom"
import Pagination from "react-js-pagination";


// import header from '../layout/header'
// import footer from '../layout/footer'
import Left from '../layout/left'
import axios from 'axios'

class Bloglist1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            getData: [],
            addClass: '',
            activePage: 0,
            perpage: 0,
            total: 0
        }
        this.fetchData = this.fetchData.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    componentDidMount(){
        let url = `http://localhost/laravel/public/api/blog`
        Axios.get(url)
        .then(res => {
            this.setState({
                getData: res.data.blog.data,
                activePage: res.data.blog.current_page,
                perpage: res.data.blog.per_page,
                total: res.data.blog.total
            })
            
        })
        .catch(error => console.log(error))
    }
    
    fetchData(){
            
        let items = this.state.getData
        if(items.length > 0){
            return items.map((obj,i) =>{
               
                return(                 
                    <div key={obj.id} index={i} className="single-blog-post">
                        <h3>{obj.title}</h3>
                        <div className="post-meta">
                            <ul>
                                <li><i className="fa fa-user" /> Mac Doe</li>
                                <li><i className="fa fa-clock-o" />{obj.created_at.slice(obj.created_at.search(" "))}</li>
                                <li><i className="fa fa-calendar" />{obj.created_at.substr(0,obj.created_at.search(" "))}</li>
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
                         <img src={"http://localhost/laravel/public/upload/Blog/image/" + obj.image} alt="" />
                        </a>
                        <p>{obj.description}</p>
                        <Link to={"/Blog/detail/" + obj.id} className="btn btn-primary" >Read More</Link>
                    </div>
              )
            }) 
        }

    }
    handlePageChange(pageNumber){ 
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        //Get page, fetch Data
    }   

    render(){
        console.log(this.state.total)
        return(
            <>
                    <Left/>
                    <div className="col-sm-9">
                      <div className="blog-post-area">
                        
                        {this.fetchData()}
                       
                         
                        <div class="pagination-area">
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.perpage}
                                totalItemsCount={this.state.total}
                                pageRangeDisplayed={2}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                      </div>
                    </div>
            </>
        )
    }
    

}
export default Bloglist1