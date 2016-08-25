import React,{PropTypes} from "react";
import Todo from "./Todo.jsx";

class TodoList extends React.Component{
    static propTypes={
        onTodoClick:PropTypes.func.isRequired,
        todos:PropTypes.arrayOf(PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })).isRequired
    }
    render(){
        return(
            <ul>
                {this.props.todos.map((todo,index)=>(
                    <Todo
                        {...todo}   //props传递语法糖
                        key={index}
                        onClick={this.props.onTodoClick.bind(this,index)}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList;