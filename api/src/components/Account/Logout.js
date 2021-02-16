import React, {Component} from 'react';

class Logout extends Component {
    constructor(props){
        super(props);
        this.CheckLogout = this.CheckLogout.bind(this);
    }
    CheckLogout(){
        if(localStorage.getItem("ObjCha")){
            localStorage.clear();
            this.props.history.push('/');
        }else{
            return(
                <p>Khong the Logout</p>
            )
        }
    }
    render(){
        return(
            <>
                {this.CheckLogout()}
            </>
        )
    }
}
export default Logout