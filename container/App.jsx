import React,{PropTypes} from "react";
import {connect} from "react-redux";
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from "../actions";
import AddTodo from "./../components/AddTodo.jsx";
import TodoList from "./../components/TodoList.jsx";
import Footer from "./../components/Footer.jsx";

class App extends React.Component{
    static propTypes={
        visibleTodos:PropTypes.arrayOf(PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })),
        visibilityFilter:PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    }
    render(){
        const {dispatch,visibleTodos,visibilityFilter}=this.props;
        return (
            <div>
                <AddTodo
                    onAddClick={text=>
                        dispatch(addTodo(text))
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>
                        dispatch(completeTodo(index))
                    } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter=>
                        dispatch(setVisibilityFilter(nextFilter))
                    } />
            </div>
        )
    }
}

function selectTodos(todos,filter){
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed)
    }
}

//基于全局state，其中可选的成员即时state中的方法，因为reducer中的方法返回的便是state
//注入初始props
function select(state){
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App);
