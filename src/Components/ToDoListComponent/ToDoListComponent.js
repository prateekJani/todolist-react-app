import React from 'react';
import './ToDoListComponent.js'

class ToDoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: "",
            todo: []
        }
    }

    checkValidtask(t){
        if(t!==""){
            return true
        }else{
            return false
        }
    }

    _addTask(e){
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
        let listItems = items.map((task) => {
            return(
                <li onClick={() => this._delete(task)}>
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

    _clearList(){
        let todolist = this.state.todo
        if( todolist.length > 0){
            this.setState({task: "", todo: []})
        }else{
            alert("LOL!! There are no task to clear!!")
        }
        
    }


    _delete(key){
        let modifiedItems = this.state.todo
        modifiedItems = modifiedItems.filter(function (item) {
            return (item !== key);
        });
         
        this.setState({
            todo: modifiedItems
        });
    }

    render(){
        return(
            <div className = "body">
                <div className="header">
                    <p>What needs to be done?</p>
                    <form onSubmit = {(e)=>this._addTask(e)}>
                        <input onChange = {(e)=>this._handleTask(e)} placeholder = "Enter new ToDo items" type = "text" id = "taskField"></input>
                        <button type = "submit" >Add</button>
                        <button type = 'button' onClick = {()=>this._clearList()}>Clear All</button>
                    </form>
                </div>
                {this.displayTodoList()}
            </div>

        )
    }
}

export default ToDoListComponent;