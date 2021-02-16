// resources/assets/js/components/UserList.js
import React, { Component } from 'react'
import API from '../../Config/Api';

class Delete extends Component {
  constructor (props) {
    super(props)
    this.DeleteProduct=this.DeleteProduct.bind(this)
  }
  
  DeleteProduct(){
    let url = 'user/delete-product/' + this.props.id;
    let config = { 
        headers: { 
        'Authorization': 'Bearer '+ this.props.accessToken,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
        } 
    };
    API.get(url, config)
        .then(response => {           
            this.props.removeProduct(response.data.data) 
    })
  }

  render () {
    console.log("this page delete")
    return (
        <a className="cart_quantity_delete" onClick={this.DeleteProduct}><i className="fa fa-times" /></a> 
        )
    }
  }
export default Delete