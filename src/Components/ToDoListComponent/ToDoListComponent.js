import React from 'react';
import './ToDoListComponent.css'
import FlipMove from "react-flip-move";

class ToDoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: "",
            todo: []
        }
    }

    checkValidtask(t){ //It helps us to see is the task a valid task or not before adding that task into todo list
        if(t!==""){
            return true
        }else{
            return false
        }
    }

    _addTask(e){ //This fuction is called when add button is clicked. Used to add tasks as the name suggests
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

    _handleTask(e){ //Takes the input from the text field and stores it into task field of the state defined in the constructor.
        const newTask = e.target.value
        
        this.setState({task: newTask})
    }

    displayTodoList(){ //Dispaying all the todo task stored in the todo list on the screen. 
        const items = this.state.todo
        if(!items || !items.length){
            return(
                <p> <p>You have successfully completed all the task!</p>
                    <p>Enjoy your rest of the day :)</p>
                </p>
            )
        }else{
            let listItems = items.map((task) => {
                return(
                    <li onClick={() => this._delete(task)}> 
                        {task}
                    </li>//onclick fucntion is used to pass the value of that particular list which has to be deleted from the todo list.
                )
            })
            return (
                <ul className = 'list'>
                    <FlipMove duration={350} easing="ease-out">
                        {listItems}
                    </FlipMove> 
                </ul>//tried to give some animations :)
            )
        }

    }

    _clearList(){ //To clear all the tasks that are stored in todo list.
        let todolist = this.state.todo
        if( todolist.length > 0){
            this.setState({task: "", todo: []})
        }else{
            alert("LOL!! There are no task to clear!!")
        }
        
    }


    _delete(key){ // to delete the specific task from todo list clicked by the user.  
        let modifiedItems = this.state.todo
        modifiedItems = modifiedItems.filter(function (item) {
            return (item !== key);
        });//used filter method to iterate through the list and delete the specific task that is given to the function.
         
        this.setState({
            todo: modifiedItems
        });
    }

    render(){ //bascically acts a main fuction of reactjs.
        return(
            <div className = "body">
                <div className="header">
                    <p>What needs to be done?</p>
                    <form onSubmit = {(e)=>this._addTask(e)}>
                        <input onChange = {(e)=>this._handleTask(e)} placeholder = "Enter new ToDo items" type = "text" id = "taskField"></input>
                        <button type = "submit" id = 'button1' >Add</button>
                        <button type = 'button' id = 'button2' onClick = {()=>this._clearList()}>Clear All</button>
                    </form>
                </div>
                {this.displayTodoList()}
            </div>

        )
    }
}

export default ToDoListComponent;