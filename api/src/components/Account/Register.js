import React, {Component} from 'react'
import Axios from 'axios'
import ObjError from './ObjError'

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            country: '',
            avatar: '',
            flag: '',
            formErrors: {},
            name: {},
            user: {},
            level: '',
            thongbao: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    handleChange(e){
        const value = e.target.value;
        const getName = e.target.name;
         this.setState({
             [getName]: value
         });
    }
    handleSignUp(e){
        e.preventDefault();
        let flag = true
        let erroSubmit = {};
        
        
        if(!this.state.username) {
            flag = false;
           erroSubmit.name = "Vui long nhap username"
        }
        if(!this.state.email){
            flag = false;
            erroSubmit.email = "Vui long nhap email"
        }
        if(!this.state.password){
            flag = false;
            erroSubmit.password = "Vui long nhap password"
        }
        if(!this.state.address){
            flag = false;
            erroSubmit.address = "Vui long nhap address"
        }
        if(!this.state.phone){
            flag = false;
            erroSubmit.phone = "Vui long nhap phone"
        }
        if(!this.state.country){
            flag = false;
            erroSubmit.phone = "Vui long nhap country"
        }
        if(!flag){
            this.setState({
                formErrors: erroSubmit
            });
        }else{
            
            const user = {
                name: this.state.username,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                address: this.state.address,
                country: this.state.country,
                level: 0

            };
            // console.log(user)
            // this.setState({
            //     user
            // });
           
            
            console.log(user);
            // console.log("alo"+this.state.user);
            Axios.post(`http://localhost/laravel/public/api/register`, user)
            .then(res => {
                console.log(res)
                console.log(res.data)
                if(res.data.errors){
                    this.setState({
                        formErrors: res.data.errors
                    })
        
                } else {
                    this.setState({
                        thongbao: 'Dang Ky Thanh Cong',
                        formErrors: {}
                    })                   
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
            
            <div className="col-sm-4">
                  <div className="signup-form">{/*sign up form*/}
                    <h2>New User Signup!</h2>
                    <p>{this.state.thongbao}</p>
                    <form onSubmit={this.handleSignUp}>
                    <input type="text" name="username" placeholder="Name" value={this.state.username} onChange= {this.handleChange} />
                    <input type="email" name="email" placeholder="Email Address" value={this.state.email} onChange= {this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange= {this.handleChange} />
                    <input type="text" name="phone" placeholder="Phone" value={this.state.phone} onChange= {this.handleChange} />
                    <input type="text" name="address" placeholder="Address" value={this.state.address} onChange= {this.handleChange} />
                    <input type="text" name="country" placeholder="Country" value={this.state.country} onChange= {this.handleChange} />         
                    <input type="file" name="avatar"  placeholder="Khong co tep nao duoc chon" value={this.state.avatar} onChange= {this.handleChange} />
                    <button type="submit" className="btn btn-default" onClick={this.handleSignUp} >Signup</button>
                     </form>
                </div>{/*/sign up form*/}
            </div>
            </>
        )
    }
}
export default Register;