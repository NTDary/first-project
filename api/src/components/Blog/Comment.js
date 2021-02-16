import React, {Component} from 'react'
import Axios from 'axios'

class Comment extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      
      thongbao: '',
      name: 'Your Name',
      message: '',
      local : localStorage.getItem("ObjCha") ? JSON.parse(localStorage.getItem("ObjCha")) : {} //thuat toan 3 ngoi
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    
//Kiem tra name & update
    if(this.state.local.Token){
      console.log('co name')
      this.state.name = this.state.local.Auth.name
    }
  }
  
  handleChange(e){        
    const value = e.target.value;
        const getName = e.target.name;
         this.setState({
             [getName]: value
         });
         console.log(value)
         
  }
  handleSignUp(e){
    e.preventDefault();
    console.log(this.props.data);
    // console.log(this.state.local);
    let url = `http://localhost/laravel/public/api/blog/comment/`+ this.props.data.id;
    let accessToken = this.state.local.Token;
    let config = {
      headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
      }
    };
  
    if(accessToken){
      let formData = new FormData();
      formData.append('id_blog',this.props.data.id);
      formData.append('id_user',this.state.local.Auth.id);
      formData.append('name_user',this.state.local.Auth.name);
      formData.append('id_comment',this.props.id ? this.props.id : 0);
      formData.append('comment',this.state.message);
      formData.append('image_user','abc.png');
      console.log(this.state.message)
      Axios.post(url, formData, config)
            .then(res => {
                console.log(res)
                // console.log(res.data.data.comment)              
                if(res.data.errors){
                    this.setState({
                        formErrors: res.data.errors
                    })
                } else {
                    this.setState({
                        thongbao: 'Update Thanh Cong',
                        formErrors: {}
                    })
                     this.props.addComment(res.data.data)
                }
      })
    }else{
      alert('Vui Long Dang Nhap')
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
export default Comment;