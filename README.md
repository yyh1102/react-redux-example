# react-redux-example

react-redux的一个小例子
###tips
* components目录下均为展示组件。
* container目录下的App.jsx为容器组件，属于顶层组件。
* 根目录下的index.jsx为入口文件，即用于加载store注入react的入口。
* reducer的工作流程是(oldState,action)=>newState，注意需要指明默认值。(ES6下可直接对参数赋默认值，较为方便)
* App.jsx中的select(state){}函数中，state成员即为reducer中的各方法，由于它们的返回值也为state，故在初始阶段可引用作为初始的state，然后经connect(select)(App)当作顶层props注入。
* action结构包含一个type与数据域，例如
<pre><code>
export function addTodo(text){
    return {
        type:ADD_TODO,
        text //此处为ES6语法，等价于ES5的text:text
      }
    }
</code></pre>
