import React,{Component} from 'react'
import './UserForm.css';


export default class UserForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.userDetails.name||"",
            email:this.props.userDetails.email||"",
            dragons:this.props.userDetails.dragons||0
        }
    }
    render(){
        return(
            <div className="userFormDiv">
               <form onSubmit={(e)=>{e.preventDefault(); this.props.onClickForm(e,{name:this.state.name,email:this.state.email,dragons:this.state.dragons})} } >
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" pattern="[a-z ,.'-]*" required value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                        <span className="nameSpan">*Name should contain only the characters: a-z ,.'-</span>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        {(this.props.emailDisabled)?
                        <input type="email" class={`form-control`} id="email" disabled required  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
                        :<input type="email" class={`form-control`} id="email" required  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />}
                        
                    </div>
                    <div class="mb-3">
                        <label for="dragons" class="form-label">Dragons</label>
                        <input type="number" class="form-control" id="dragons" required value={this.state.dragons} onChange={(e)=>this.setState({dragons:e.target.value})}/>
                    </div>
                    <button class="btn btn-primary" >{this.props.buttonText}</button>
                </form>
            </div>
        )
    }
}