import React,{PropTypes} from "react";

class AddTodo extends React.Component{
    static propTypes={
        onAddClick:PropTypes.func.isRequired
    }
    handleClick=(e)=>{
        const node=this.refs.input;
        const text=node.value.trim();
        this.props.onAddClick(text);
        node.value="";
    }
    render(){
        return(
            <div>
                <input type="text" ref="input" />
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default AddTodo;