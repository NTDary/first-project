import React, {Component} from 'react'
import Axios from 'axios'
import ObjError from './ObjError'
import Register from './Register'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
          password: '',
          email: '',
          formErrors: {},
          flag: '',
          thongbao: ''
         
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);

    }

  handleChange(e){
      const value = e.target.value;
      const name = e.target.name;
       this.setState({
           [name]: value
       });
  }
  handleSignUp(e){
    e.preventDefault();
    let ObjCon = {};
    let MyJSON = {};
    let flag = true
    let erroSubmit = {};

    if(!this.state.email) {
      flag = false;
      erroSubmit.password = "Vui long nhap password"
    }
    if(!this.state.password){
        flag = false;
        erroSubmit.email = "Vui long nhap email"
    }
    if(!flag){
        this.setState({
            formErrors: erroSubmit
        })
    }else{
        const user = {
          password: this.state.password,
          email: this.state.email
        }
        Axios.post(`http://localhost/laravel/public/api/login`, user)
            .then(res => {
                //console.log(res)
                //console.log(res.data)
                if(res.data.errors){
                    this.setState({
                        formErrors: res.data.errors
                    })
        
                } else { //Thong bao login thanh cong 
                    this.setState({
                        thongbao: 'Login thanh cong',
                        formErrors: {}
                    });
                    //Dua thong tin account vao localStorage
                    ObjCon = {
                      'Auth': res.data.Auth,
                      'Token': res.data.success.token
                    };
                    
                    MyJSON = JSON.stringify(ObjCon)
                    localStorage.setItem("ObjCha",MyJSON)
                  
                    //Chuyen sang Page home
                     this.props.history.push('/')
  
                }
               
            })
    }
    
  }
  
    render(){
        return(
            <> 
            
            <div>
              <ObjError demo={this.state.formErrors}/>
            </div>
                <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">{/*login form*/}
                          <h2>Login to your account</h2>
                          <p>{this.state.thongbao}</p>
                          <form onSubmit={this.handleSignUp}>
                            
                            <input type="email" name="email" value={this.state.email} placeholder="Email Address" onChange= {this.handleChange} />
                            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange= {this.handleChange} />
                            <span>
                              <input type="checkbox" className="checkbox" /> 
                              Keep me signed in
                            </span>
                            <p>{this.state.message}</p>
                            <button type="submit" className="btn btn-default" onClick={this.handleSignUp}>Login</button>
                          </form>
                        </div>{/*/login form*/}
                      </div>
                <div className="col-sm-1">
                  <h2 className="or">OR</h2>
                </div>
                <Register/>
            </>

        );
    }

}
export default Login;