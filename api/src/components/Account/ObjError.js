import React, {Component} from 'react'


class ObjError extends Component {
    constructor(props){
        super(props)
    }
    renderE(){
        let formErrors = this.props.demo;
        if(Object.keys(formErrors).length > 0 ){
            return    Object.keys(formErrors).map((key, index) => {
                //console.log(key)
                return(
                    <p key={index}>{formErrors[key]}</p>
                )
            });
        }
    }
    render(){
        return(
            <div className="formErrors">
                {
                  this.renderE()    
                }
            </div>
        )
    }
}
export default ObjError;