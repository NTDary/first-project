import React, {Component} from "react"
import {Link} from "react-router-dom"
import NumberFormat from 'react-number-format';
import Delete from './Delete'
import Axios from 'axios'

const pStyle = {
  float: 'right'
};
class List extends Component {
    constructor(props){
        super(props)
        this.state = {
          userData: JSON.parse(localStorage.getItem("ObjCha")),
          getData:''
        }
        this.renderProduct = this.renderProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
    }

    componentDidMount(){
      let url = `http://localhost/laravel/public/api/user/my-product`
      let accessToken = this.state.userData.Token;
        let config = { 
            headers: { 
            'Authorization': 'Bearer '+ accessToken,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            } 
        };
        Axios.get(url,config)
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    getData: res.data.data
                })
                //Khong the vua set vua console log trong 1 componen vi chua the dong bo dc
        })
    }
    removeProduct(getData){
      this.setState({
        getData: getData
      });
    }

    renderProduct(){
      
      let image = []
      if(Object.keys(this.state.getData).length > 0){
        return Object.keys(this.state.getData).map((obj,i)=> {
          console.log(this.state.getData[obj])
           image[i] = JSON.parse(this.state.getData[obj]['image'])
          return(
                
                  <tr>
                    <td>{this.state.getData[obj]['id']}</td>
                    <td className="cart_description">
                      <a>{this.state.getData[obj]['name']}</a>
                    </td>
                    <td className="cart_product">
                    <img width="50" height="50" src={"http://localhost/laravel/public/upload/user/product/" + this.state.getData[obj]['id_user'] + '/' + image[i][0]} alt="" />
                    </td>
                    <td className="cart_price">
                    <p><NumberFormat value={this.state.getData[obj]['price']} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    </td>
                    <td >
                    <Link to={"/admin/product/add-edit/" + this.state.getData[obj]['id']} className="cart_quantity_edit"><i className="fa fa-edit" /></Link>
                    </td>
                    <td >
                      <Delete accessToken = {this.state.userData.Token} id = {this.state.getData[obj]['id']} removeProduct={this.removeProduct.bind(this)} />
                    </td>
                  </tr>

          )
        })
      }
    }
    render(){
       
        return(
          <>
                    
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
                          {this.renderProduct()}
                      
                        </tbody>
                    </table>
                    <Link style={pStyle} to="/admin/product/create" className="btn btn-default check_out">Add New</Link>
                </div>
            </div>
                        
            </>

        )
    }
}
export default List;