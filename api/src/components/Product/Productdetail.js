import React, {Component} from "react"

class Productdetail extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
      
    }
    render(){
        return(
          <>
          <h1>Page detail</h1>
                    {/* <div className="table-responsive cart_info col-sm-9 padding-right">
                      <table className="table table-condensed">
                        <thead >
                          <tr className="cart_menu">
                            <td>Id</td>
                            <td>Name</td>
                            <td>image</td>
                            <td className="price">Price</td>
                            <td className="quantity">Action</td>
                            <td className="description" />
                            <td />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="cart_description">
                              <h4><a href>Colorblock Scuba</a></h4>
                              <p>Web ID: 1089772</p>
                            </td>
                            <td className="cart_product">
                              <a href><img src="images/cart/one.png" alt="" /></a>
                            </td>
                            <td className="cart_price">
                              <p>$59</p>
                            </td>
                            <td >
                              <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                            </td>
                            <td >
                              <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button type="button"  className="btn btn-default get ">Add product</button>
                    </div> */}
                        
            </>

        )
    }
}
export default Productdetail;