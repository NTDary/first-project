import React, {Component} from "react"
import {
    Switch,
    Route
} from "react-router-dom"
import App from './App'
import UpdateAccount from '../Account/UpdateAccount'
import Productdetail from '../Product/Productdetail'
import CreateProduct from '../Product/CreateProduct'
import Update from "./Member/Update"
import List from "./Product/List"
import Create from "./Product/Create"
import Edit from "./Product/Edit"

class Index extends Component {
    render(){
        return(
            <App>
                <Switch>
                    <Route path='/admin/product/add-edit/:id' component={Edit}/>
                    <Route path='/admin/member/update' component={Update}/>
                    <Route path='/admin/product/list' component={List}/>
                    <Route path ='/admin/product/create' component={Create}/>
                </Switch>
            </App>
        )
    }
}
export default Index