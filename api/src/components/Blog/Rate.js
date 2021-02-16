//1
import React, {Component} from 'react'
import Axios from 'axios'
import StarRatings from 'react-star-ratings';

class Rate extends Component {
    constructor(props){
        super(props)
        this.state={
            rating: 0,
            local : localStorage.getItem("ObjCha") ? JSON.parse(localStorage.getItem("ObjCha")) : {}
        }
        this.changeRating = this.changeRating.bind(this);
    
    }
    
      
    changeRating(newRating){
        let url = `http://localhost/laravel/public/api/blog/rate/id` + this.props.blog_id
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.state.local.Token,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
          };
        if(this.state.local.Token){
            this.setState({
                rating: newRating
            });
            let formData = new FormData();
            formData.append('blog_id',this.props.blog_id);
            formData.append('user_id',this.state.local.Auth.id);
            formData.append('rate',newRating);
            Axios.post(url, formData,config)
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
                      }
            })
            console.log(newRating)
        }else{
            alert('Vui Long Dang Nhap')
        }
        
    }
    componentDidMount(){
        Axios.get(`http://localhost/laravel/public/api/blog/rate/` + this.props.blog_id)
        .then(res =>{
            console.log(res)
            const items = res.data.data;
            
           
            if(items.length > 0){
                let tong = 0;
                // console.log(items.length)
                 items.map((object, i) =>{
                    tong += object.rate
                  
                })
                let avg = tong / items.length
                this.setState({
                    rating: avg
               })
               
              
            }

        })
        .catch(error => console.log(error));
     
    }
   
//2
    render(){
        return(
            <StarRatings
            rating={this.state.rating}
            starRatedColor="yellow"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            />
        )
    }

}
export default Rate