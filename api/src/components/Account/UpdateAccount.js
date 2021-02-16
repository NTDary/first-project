import React, {Component} from "react"
import Axios from "axios"

class UpdateAccount extends Component {
        constructor(props){
        super(props)
        let userData ={};
        if(localStorage.getItem("ObjCha")){
            userData = JSON.parse(localStorage.getItem("ObjCha"))
            // console.log(userData)
            this.state ={
                Token: userData.Token,
                id: userData.Auth.id,
                username: userData.Auth.name,
                email: userData.Auth.email,
                password: '********',
                address: userData.Auth.address,
                phone: userData.Auth.phone,
                country: userData.Auth.country,
                avatar: '',
                data: {},
                user: {}
            };
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleChange(e){
        
        const value = e.target.value;
        const getName = e.target.name;
         this.setState({
             [getName]: value
         });
        //  console.log(value)
    }
    handleSignUp(e){
        e.preventDefault();
        // let user = {
        //     name: this.state.username,
        //     email: this.state.email,
        //     password: this.state.password,
        //     phone: this.state.phone,
        //     address: this.state.address,
        //     country: this.state.country,
        //     level: 0
        // };
        let formData = new FormData();
        formData.append('name',this.state.username);
        formData.append('email',this.state.email);
        formData.append('password',this.state.password);
        formData.append('phone',this.state.phone);
        formData.append('address',this.state.address);
        formData.append('country',this.state.country);
        formData.append('level',0);
       
     
        
        
        let url = `http://localhost/laravel/public/api/user/update/` + this.state.id;
        // console.log(url)
        let accessToken = this.state.Token;
        let ObjCon = {};
        let MyJSON = {};
        let config = {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }
        Axios.post(url, formData, config)
            .then(res => {
                // console.log(res)
                // console.log(res.data)
                if(res.data.errors){
                    this.setState({
                        formErrors: res.data.errors
                    })
                } else {
                    this.setState({
                        thongbao: 'Update Thanh Cong',
                        formErrors: {}
                    })
                    ObjCon = {
                        'Auth': res.data.Auth,
                        'Token': res.data.success.token
                      };
                      
                      MyJSON = JSON.stringify(ObjCon)
                      localStorage.setItem("ObjCha",MyJSON)                   
                }
            })
    }
    render(){
        return(
            <div className="col-sm-4">
                  <div className="signup-form">{/*sign up form*/}
                    <h2>User Update!!</h2>
                    <p>{this.state.thongbao}</p>
                    <form onSubmit={this.handleSignUp}>
                    <input type="text" name="username" placeholder="Name" value={this.state.username} onChange= {this.handleChange} />
                    <input type="email" name="email" placeholder="Email Address" value={this.state.email} disabled/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange= {this.handleChange} />   
                    <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange= {this.handleChange} />
                    <input type="text" name="address" placeholder="Address" value={this.state.address} onChange= {this.handleChange} />
                    <input type="text" name="country" placeholder="Country" value={this.state.country} onChange= {this.handleChange} />      
                    <input type="file" name="avatar"  placeholder="Khong co tep nao duoc chon" value={this.state.avatar} onChange= {this.handleChange} />
                    <button type="submit" className="btn btn-default" onClick={this.handleSignUp} >Update</button>
                     </form>
                </div>{/*/sign up form*/}
            </div>
        )
    }
}
export default UpdateAccount;