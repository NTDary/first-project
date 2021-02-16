import React, {Component} from "react"
import Axios from "axios"
import ObjError from '../ObjError'

const liStyle = {
    display: 'inline-block',
    margin: '0 10px'
};
const inputStyle = {
    width: '20%',
    display:'inline-block'
};
class Create extends Component {
        constructor(props){
        super(props)
        this.state ={
            listCategory:'',
            listBrand:'',
            category: '',
            brand: '',
            name: '',
            price: '',
            company:'',
            avatar:'',
            avatarList:[],
            detail:'',
            formErrors: {},
            status: 0,
            sale:0,
            userData: JSON.parse(localStorage.getItem("ObjCha")),
        }
        this.renderSaleInput = this.renderSaleInput.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInputFile = this.handleUserInputFile.bind(this);
        this.categoryRender = this.categoryRender.bind(this);
     
        }

        componentDidMount(){
            let url = `http://localhost/laravel/public/api/category-brand`
            Axios.get(url)
            .then(res => {
                console.log(res)
                this.setState({
                    listCategory: res.data.category,
                    listBrand: res.data.brand
                })
                //Khong the vua set vua console log trong 1 componen vi chua the dong bo dc
            })
        }

        categoryRender(){
          
            if(Array.isArray(this.state.listCategory) && this.state.listCategory.length > 0 ){
                return this.state.listCategory.map((item,i)=>{
                    return(
                        <option key={i} value={item.id}>{item.category}</option>
                    )
                })
                
            }
        }

        brandRender(){
          
            if(Array.isArray(this.state.listBrand) && this.state.listBrand.length > 0 ){
                return this.state.listBrand.map((item,i)=>{
                    return(
                        <option key={i} value={item.id}>{item.brand}</option>
                    )
                })
                
            }
        }

        handleUserInputFile(e){
            const fileFront = e.target.files;
            this.setState({
                avatar: fileFront
            })
           
        }

        // renderImage(){
        //     if(Object.keys(this.state.avatar) && Object.keys(this.state.avatar).length > 0){
        //         return this.state.avatar.map((item,i)=>{
        //             return(
        //                 <li style={liStyle}>
        //                     {/* <img width="50" height="50" src={config.pathUpload + 'user/product/' + this.state.userData.user.auth.id + '/' + item} alt="" /> */}
        //                     <input name="avatarCheck" type="checkbox" value="" onChange={this.handleUserInput} />
        //                 </li>
        //             )
        //         })
        //     }
        
        // }

        handleUserInput(e){
            const nameInput = e.target.name;
            const valueInput = e.target.value;
            this.setState({
                [nameInput] : valueInput
            })
        }
        renderSaleInput() {
            if(this.state.status == 2) {
                return (
                    <>
                        <input style={inputStyle} type="text" placeholder=""  name="sale" value={this.state.sale} onChange={this.handleUserInput}/> %
                    </>
                )
            }
            
        }
        handleSubmit(e){
            e.preventDefault();
            let flag = true
            let name = this.state.name;
            let price = this.state.price;
            let category = this.state.category;
            let brand = this.state.brand;
            let status = this.state.status;
            let sale = this.state.sale;
            let company = this.state.company;
            let detail = this.state.detail;
            let avatar = this.state.avatar;
            let formErrors = this.state.formErrors;
            

            if(!name) {
                flag = false;
                formErrors.name = "Vui long nhap name";
            }

            if(!price) {
                flag = false;
                formErrors.price = "Vui long nhap price";
            } else if(isNaN(price)) {
                flag = false;
                formErrors.price = "price is number";
            }

            if(!category) {
                flag = false;
                formErrors.category = "Vui long chon category";
            }

            if(!brand) {
                flag = false;
                formErrors.brand = "Vui long chon brand";
            }
            
            if(!company) {
                flag = false;
                formErrors.company = "Vui long nhap company";
            }
            if(!detail) {
                flag = false;
                formErrors.detail = "Vui long nhap detail";
            }
            
            if(status == 2 && !sale) {
                flag = false;
                formErrors.sale = "Vui long nhap sale";
            }
            // edit
            if(!avatar) {
                flag = false;
                formErrors.avatar = "Vui long nhap image";
            }else if(Object.keys(avatar).length > 3){
                flag = false;
                formErrors.avatarLength = "image > 3";
            }else {
                let typeImage = ["image/jpeg","image/png"]
                Object.keys(avatar).map((item,i)=>{
                    if(!typeImage.includes(avatar[item]['type'])){
                        flag = false;
                        formErrors.avatarType = "Sai dinh dang image";
                    }else if(avatar[item]['size'] > 1048576) {
                        flag = false;
                        formErrors.avatarType = "Kich thuoc > 1Mb";
                    }
                }) //Kieu obj khi console.log ra thi khong hien kieu, nguoc lai array se hien kieu array
            }

            if(!flag) {
                this.setState({
                    formErrors: formErrors
                });
            }else {
                let accessToken = this.state.userData.Token;
                console.log(this.state.avatar)
                let url = `http://localhost/laravel/public/api/user/add-product`
                let config = { 
                    headers: { 
                    'Authorization': 'Bearer '+ accessToken,
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                    } 
                };
                let formData = new FormData();
                formData.append('name', this.state.name);
                formData.append('price', this.state.price);
                formData.append('category', this.state.category);
                formData.append('brand', this.state.brand);
                formData.append('company', this.state.company);
                formData.append('detail', this.state.detail);
                formData.append('status', this.state.status);
                formData.append('sale', this.state.sale);

                Object.keys(avatar).map((item, i) => {
                    formData.append("file[]", avatar[item]);
                });

                Axios.post(url, formData, config)
                .then(res => {

                console.log(res)
                // console.log(res.data)
                    if(res.data.errors){
                        console.log("Update That Bai")
                        this.setState({
                            formErrors: res.data.errors
                        })
                    } else {
                        console.log("Update Thanh Cong")
                        this.setState({
                            thongbao: 'Update Thanh Cong',
                            formErrors: {}
                        })          
                    }
                    
                    //Chuyen sang page my-product
                    this.props.history.push('/admin/product/list')
                })

            } 
                   
        }    
    render(){
        return(
            <div className="col-sm-9">
                <div className="col-sm-12">
                    <div className="signup-form">{/*sign up form*/}
                        <h2>Create Product!!</h2>
                        <ObjError demo={this.state.formErrors}/>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="name" placeholder="Name" value={this.state.name}  onChange={this.handleUserInput}/>
                                <input type="number" name="price" placeholder="Price" value={this.state.price} onChange={this.handleUserInput}/>
                                <select value={this.state.category} name="category" onChange={this.handleUserInput}>
                                            <option value="">Please choose category</option>
                                            {this.categoryRender()}
                                </select>
                                <select value={this.state.brand} name="brand" onChange={this.handleUserInput}>
                                            <option value="">Please choose brand</option>
                                            {this.brandRender()}
                                </select>
                                <select value={this.state.status} name="status" onChange={this.handleUserInput}>
                                            <option value="0">Please choose status</option>
                                            <option value="1">New</option>
                                            <option value="2">Sale</option>
                                </select>
                                {this.renderSaleInput()}
                                <input type="text" name="company" placeholder="Company profile" value={this.state.company} onChange={this.handleUserInput} />
                                <input type="file" name="avatar[]"  onChange={this.handleUserInputFile} multiple enctype="multipart/form-data"/>
                                
                                <div className="imgPreview">
                                    <ul>
                                        {/* {this.renderImage()} */}
                                    </ul>
                                </div>
                                <textarea value={this.state.detail} name="detail" placeholder="Detail" onChange={this.handleUserInput} />
                                <button type="submit" className="btn btn-default"  >Create Now</button>
                            </form>
                    </div>{/*/sign up form*/}
                </div>
            </div>
        )
    }
}
export default Create;