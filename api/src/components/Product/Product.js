import React, {Component} from 'react';
import Axios from "axios"
import Left from '../layout/left';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props){
        super(props)
        this.state={
          getProduct: [],
          
        }
        this.fetchProducts = this.fetchProducts.bind(this)
        
    
    }
    
    componentDidMount(){
      let url = `http://localhost/laravel/public/api/product`
      Axios.get(url)
      .then(res => {
          this.setState({
            getProduct: res.data.data
            
          })
          
      })
      .catch(error => console.log(error))
    }
   
    fetchProducts(){     

      let Products = this.state.getProduct
      let file = []
      localStorage.setItem("myObj",JSON.stringify(Products))

      if(Products.length >0 ){
        return Products.map((obj,i) => {
          file[i] = JSON.parse(obj.image)
          // console.log(obj)
          return(
            <div key={obj.id} index={i} className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src={"http://localhost/laravel/public/upload/user/product/" + obj.id_user + "/"+ file[i][0] } alt="" />
                                <h2>{obj.price}</h2>
                                <p>{obj.name}</p>
                                <a id={1} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                              </div>
                              <div className="product-overlay">
                                <div className="overlay-content">
                                  <h2>{obj.price}</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <a id={1} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="choose">
                              <ul className="nav nav-pills nav-justified">
                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                <li><Link to={'/Product-detail/' + obj.id} ><i className="fa fa-plus-square" />Detail</Link></li>
                              </ul>
                            </div>
                          </div>
              </div>
          )
        })
      }
      
    }

    render(){
      console.log(this.state.getProduct)
      
        return(
          <>
                    <Left/>
                
                    <div className="col-sm-9 padding-right">
                      <div className="features_items">
                        <h2 className="title text-center">Features Items</h2>
                        
                        {this.fetchProducts()}
                        <ul className="pagination">
                          <li className="active"><a href>1</a></li>
                          <li><a href>2</a></li>
                          <li><a href>3</a></li>
                          <li><a href>»</a></li>
                        </ul>
                      </div>
                    </div>
                    </>
        )
    }
}
export default Product;