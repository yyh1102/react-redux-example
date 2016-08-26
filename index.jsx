import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import todoApp from "./reducer";
import App from "./container/App.jsx";

let store=createStore(todoApp);

const Root=()=>(
    <Provider store={store}>
        <App />
    </Provider>
);
setInterval(function(){
    console.log(store.getState())
},2000)


ReactDOM.render(
    <Root />,
    document.body
);