import {combineReducers} from "redux";
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from "./actions";
const {SHOW_ALL}=VisibilityFilters;

function visibilityFilter(state=SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:return state;
    }
}

function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{  //该函数用于修改对象中的某个成员的值
                    completed:true
                }),
                ...state.slice(action.index+1)
            ]
        default:
            return state;
    }
}

const todoApp=combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;

