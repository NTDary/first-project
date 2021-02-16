import React, {Component} from 'react'
import Axios from 'axios'
import {Link} from "react-router-dom"

import UpdateAccount from '../Account/UpdateAccount'
import CreateProduct from '../Product/CreateProduct'
import Productdetail from '../Product/Productdetail'

class Menuleft extends Component {
  
    render(){
        return(
          <>
            <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Account</h2>
              <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link to="/admin/member/update" data-toggle="collapse" data-parent="#accordian" href="#sportswear" onClick={this.handleClick}>
                        <span id="update" className="badge pull-right" onClick={this.handleClick}><i id="update" className="fa fa-plus" onClick={this.handleClick}/></span>
                        UPDATE ACCOUNT
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <Link to="/admin/product/list" data-toggle="collapse" data-parent="#accordian" href="#sportswear" onClick={this.handleClick}>
                        <span id="product" className="badge pull-right" onClick={this.handleClick} ><i id="product" className="fa fa-plus" onClick={this.handleClick} /></span>
                        MY PRODUCT
                      </Link>
                    </h4>
                  </div>
                </div>

              </div>{/*/category-products*/}
            </div>
          </div>
          
        
         
            
          
          </>
        )
    }

}
export default Menuleft;