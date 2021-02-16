import React, {Component} from "react"
import {withRouter} from 'react-router-dom';
import Menuleft from "./Menuleft";
import Header from '../layout/header'
import Footer from '../layout/footer'
class App extends Component {
    constructor(props){
        super(props)
    }
    render(){

        return(
          <>
         
            <section>
              <div className="container">
                <div className="row">
                    <Menuleft/>
                  {this.props.children}
                </div>
              </div>
            </section>
        
          </>
        )
      }
}
export default withRouter(App);