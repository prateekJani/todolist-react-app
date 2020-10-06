import React from 'react';
import './ToDoListComponent.js'

class ToDoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // defaultText: "",
            task: "",
            todo: []
        }
    }

    // resetValue(){
    //     this.setState({defaultText: ""})
    // }

    checkValidtask(t){
        if(t!==""){
            return true
        }else{
            return false
        }
    }

    _checkTask(e){
        if(this.checkValidtask(this.state.task) === true){
            let todo = this.state.todo
            todo.push(this.state.task)
            this.setState({ task:"",
                            todo: todo})
        }else{
            alert("Enter a valid task before Submit")
        }

        e.target.reset(); //To go back to the default textField of the form.
        e.preventDefault(); //To Stop reloading the page as it is a form.
    }

    _handleTask(e){
        const newTask = e.target.value
        
        this.setState({task: newTask})
    }

    displayTodoList(){
        const items = this.state.todo
        let listItems = items.map((task, count) => {
            console.log(task, count);
            return(
                <li>
                    {task}
                </li>
            )
        })
        return (
            <ul>
                {listItems}
            </ul>
        )
    }


    render(){
        return(
            <div className = "body">
                <div className="header">
                    <form onSubmit = {(e)=>this._checkTask(e)}>
                        <input onChange = {(e)=>this._handleTask(e)} placeholder = "Enter today's task" type = "text" id = "taskField"></input>
                        <button type = "submit" >Add</button>
                    </form>
                </div>
                {this.displayTodoList()}
            </div>

        )
    }
}

export default ToDoListComponent;