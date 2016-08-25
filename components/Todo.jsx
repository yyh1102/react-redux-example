import React,{PropTypes}from "react";

class Todo extends React.Component{
    static propTypes={
        onClick:PropTypes.func.isRequired,
        text:PropTypes.func.isRequired,
        completed:PropTypes.func.isRequired
    }
    render(){
        return(
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration:this.props.completed?'line-through':'none',
                    cursor:this.props.completed?'default':'pointer'
                }}
            >
                {this.props.text}
            </li>
        )
    }
}

export default Todo;