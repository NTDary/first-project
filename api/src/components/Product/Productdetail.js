import React, {Component} from "react"
import Axios from 'axios';
import Left from '../layout/left'

class Productdetail extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
      let url = `http://localhost/laravel/public/api/product/detail/`
      Axios.get(url + this.props.match.params.id)
      .then(res =>{
          console.log(res)
         
      })
      .catch(error => console.log(error));
    }
    fetchData(){
      return(
        <h3>aaaaa</h3>
      )
    }
    render(){
      return(
        <>
          <Left/>
          {this.fetchData()}
        </>
      )
  }
}
export default Productdetail;