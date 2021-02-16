import React, { Component } from 'react'
import { Link } from "react-router-dom";
import API from '../../Config/Api';
import config from '../../Config/Config';
import NumberFormat from 'react-number-format';
import DeleteProduct from './Delete'

const pStyle = {
    float: 'right'
  };
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data : '',
          userData: JSON.parse(localStorage["appState"]),
        }
        // this.addToCart = this.addToCart.bind(this)
      }

    componentDidMount() {
        
        let accessToken = this.state.userData.user.auth_token;
        let config = { 
            headers: { 
            'Authorization': 'Bearer '+ accessToken,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            } 
        };
        API.get('user/my-product', config)
        .then(response => {
           
          if(response.data.response === "success") {
            this.setState({
                data: response.data.data
            })
            
          } else {
            console.log("error")
          }
          
        })
        .catch(function (error) {
          console.log(error)
        }) 
    }

    removeProduct(data){
        this.setState({
            data: data
        });
    }

    renderListProduct() {
        let {data} = this.state
        if (Object.keys(data).length > 0) {
            return Object.keys(data).map((item, index) => {
                let image = JSON.parse(data[item]['image'])
                return (
                    <tr key={index}>
                        <td className="cart_quantity">
                            <a>{data[item]['id']}</a>
                        </td>
                        <td className="cart_description">
                            <a>{data[item]['name']}</a>
                        </td>
                        
                        <td >
                            <img width="50" height="50" src={config.pathUpload + 'user/product/' + data[item]['id_user'] + '/' + image[0]} alt="" />
                        </td>
                        <td className="cart_price">
                            <p><NumberFormat value={data[item]['price']} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                        </td>   
                        <td>
                            <Link to={"/account/product/add-edit/" + data[item]['id']} className="cart_quantity_edit"><i className="fa fa-edit" /></Link>
                        </td>
                        <td>
                            <DeleteProduct accessToken = {this.state.userData.user.auth_token}  id={data[item]['id']} removeProduct={this.removeProduct.bind(this)} />
                        </td>
                    </tr>
                )
            })
        }
        
    }
  render () {
      
    return (
        <div className="col-sm-9" id="cart_items">
            <div className="table-responsive cart_info">
                <table className="table table-condensed">
                    <thead>
                        <tr className="cart_menu">
                            <td>Id</td>
                            <td className="price">Name</td>
                            <td >Image</td>
                            <td className="description">Price</td>
                            <td className="total" colSpan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListProduct()}
                   
                    </tbody>
                </table>
                <Link style={pStyle} to="/account/product/add-edit" className="btn btn-default check_out">Add New</Link>
            </div>
        </div>
 
    )
  }
}
export default List
