import React, {Component} from 'react'
import axios from 'axios'


class ListComment extends Component {
    constructor(props){
        super(props)
        this.state = {
           getIdCha: ''
        }
        this.fetchData = this.fetchData.bind(this)
        this.getID = this.getID.bind(this)
    }
    getID(e){    
        this.props.getIdCha(e.target.id)
      }
    fetchData(){
        
        let items = this.props.dataFromParent
        if(items instanceof Array){
            return items.map((object, i) =>{
                if(object.id_comment == 0){
                    return(
                        <>
                        <li key={i} index={i} className="media">                           
                            <a className="pull-left" href="#">
                                <img className="media-object" src={"http://localhost/laravel/public/upload/user/avatar/" + object.image_user} width="121" height="86" alt="" />
                            </a>
                            <div className="media-body">
                                <ul className="sinlge-post-meta">
                                <li><i className="fa fa-user" />{object.name_user}</li>
                                <li><i className="fa fa-clock-o" /> {object.updated_at.slice(object.updated_at.search(" "))}</li>
                                <li><i className="fa fa-calendar" /> {object.updated_at.substr(0,object.updated_at.search(" "))}</li>
                                </ul>
                                <p>{object.comment}</p>
                                    <a id={object.id} className="btn btn-primary" href="#rep_cmt" onClick={this.getID}><i className="fa fa-reply" />Replay</a> 
                            </div>                          
                        </li> 
                        
                        {
                            items.map((object2, i) =>{
                                if(object2.id_comment == object.id){
                                   return(<>
                                   <li key={i} index={i} className="media second-media">                           
                                        <a className="pull-left" href="#">
                                            <img className="media-object" src={"http://localhost/laravel/public/upload/user/avatar/" + object2.image_user} width="121" height="86" alt="" />
                                        </a>
                                        <div className="media-body">
                                            <ul className="sinlge-post-meta">
                                            <li><i className="fa fa-user" />{object2.name_user}</li>
                                            <li><i className="fa fa-clock-o" /> {object2.updated_at.slice(object2.updated_at.search(" "))}</li>
                                            <li><i className="fa fa-calendar" /> {object2.updated_at.substr(0,object2.updated_at.search(" "))}</li>
                                            </ul>
                                            <p>{object2.comment}</p>
                                        </div>                          
                                    </li> 
                                   </>)
                                }
                            })
                        }
                        </>
                     )
                }
                
            })
        }
    }
    render(){
        return(
            <>          
            {this.fetchData()}
            </>
        )
    }
}
export default ListComment;