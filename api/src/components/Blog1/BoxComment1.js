import React, {Component} from "react";
import Axios from "axios";

class BoxComment1 extends Component {
    constructor(props){
        super(props)
        this.state={
            message: '',
            name: 'Your Name',
            local: localStorage.getItem("ObjCha") ? JSON.parse(localStorage.getItem("ObjCha")) : {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        if(this.state.local.Token){
           this.state.name = this.state.local.Auth.name
        }
    }
    
    handleChange(e){
        let value = e.target.value
        let getname = e.target.name
        this.setState({
            [getname]: value
        })
    }
    handleSignUp(e){
        e.preventDefault();
        console.log(this.props.data)
        let url = `http://localhost/laravel/public/api/blog/comment/`+ this.props.data;
        let accessToken = this.state.local.Token;
        let config = {
          headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
          }
        }
        if(accessToken){
           let formData = new FormData();
           formData.append('id_blog',this.props.data);
           formData.append('id_user',this.state.local.Auth.id);
           formData.append('name_user',this.state.local.Auth.name);
           formData.append('id_comment',0);
           formData.append('comment',this.state.message);
           formData.append('image_user','aaa.png');
           
           Axios.post(url, formData, config)
            .then(res => {
                if(res.data.errors){
                    this.setState({
                        formErrors: res.data.errors
                    })
                } else {
                    this.setState({
                        formErrors: {}
                    })
                }
            })
           
        }else{
            alert("Vui Long Dang Nhap")
        }
    }
    render(){
        return(
            <>
            <div className="replay-box">
              <div className="row">
                <form onSubmit={this.handleSignUp} id="rep_cmt">
                <div className="col-sm-12">
                  <h2>Leave a replay</h2>
                  <div className="text-area">
                    <div className="blank-arrow">
                      <label>{this.state.name}</label>
                    </div>
                    <span>*</span>
                    <textarea name="message" rows={11} value={this.state.message} onChange= {this.handleChange} />
                    <a className="btn btn-primary" onClick={this.handleSignUp}>post comment</a>
                  </div>
                </div>
                </form>
              </div>
            </div>{/*/Repaly Box*/}
            </>
        )
    }
}
export default BoxComment1;