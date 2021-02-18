import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogList from './components/Blog/bloglist';
import BlogSingle from './components/Blog/blogsingle';
 import Header from './components/layout/header';
import Login from './components/Account/Login';
import Logout from './components/Account/Logout';
import Account from './components/Account/Account';
import Bloglist1 from './components/Blog1/Bloglist1'
import Blogdetail1 from './components/Blog1/Blogdetail1';
import Product from './components/Product/Product';
import Productdetail from './components/Product/Productdetail';
import Admin from './components/Admin/Index'


ReactDOM.render(
  <div>
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Product} />
          {/* --------------------Blog--------------- */}
          {/* <Route path='/Blog/List' component={BlogList}/>
          <Route path='/Blog/detail/:id' component={BlogSingle} /> */}
          {/* ---------------------------------------- */}
          {/* <Route path='/' component={Product}/> */}
          
          <Route path='/Blog/List' component={Bloglist1}/>
          <Route path='/Blog/detail/:id' component={Blogdetail1} />
          <Route path='/Product' component={Product} />
          <Route path='/Product-detail/:id' component={Productdetail} />
          <Route path='/Login' component={Login}/>
          <Route path='/Logout' component = {Logout}/>
          <Route path='/Account' component={Account}/>
          <Route component={Admin}/>
        </Switch>
      </App>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
