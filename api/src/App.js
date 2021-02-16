import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import GetApi from './components/Blog/getapi';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Left from './components/layout/left';
import BlogList from './components/Blog//bloglist';
import BlogSingle from './components/Blog/blogsingle';
import Product from './components/Product/Product'


class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.children)
    return(
      <>
      <Header/>
        <section>
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </section>
      <Footer/>
      </>
    )
  }
}
export default withRouter(App);