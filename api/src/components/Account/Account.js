import React, {Component} from 'react'
import Axios from 'axios'

import UpdateAccount from '../Account/UpdateAccount'
import CreateProduct from '../Product/CreateProduct'
import Productdetail from '../Product/Productdetail'

class Account extends Component {
  constructor(props){
    super(props)
    this.state={
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    let id = e.target.id
    if(id == 'update'){
      this.setState({
        isToggleOn: true
      })
    }else{
      this.setState({
        isToggleOn: false
      })
    }
    
    console.log(id)
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }))
  }
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
                      <a id="update" data-toggle="collapse" data-parent="#accordian" href="#sportswear" onClick={this.handleClick}>
                        <span id="update" className="badge pull-right" onClick={this.handleClick}><i id="update" className="fa fa-plus" onClick={this.handleClick}/></span>
                        UPDATE ACCOUNT
                        
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a id="product" data-toggle="collapse" data-parent="#accordian" href="#sportswear" onClick={this.handleClick}>
                        <span id="product" className="badge pull-right" onClick={this.handleClick} ><i id="product" className="fa fa-plus" onClick={this.handleClick} /></span>
                        MY PRODUCT
                      </a>
                    </h4>
                  </div>
                </div>

              </div>{/*/category-products*/}
            </div>
          </div>
          
            {this.state.isToggleOn ? <UpdateAccount/>: <Productdetail/>}
         
            
          
          </>
        )
    }

}
export default Account;