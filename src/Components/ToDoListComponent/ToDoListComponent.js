import React from 'react';
import './ToDoListComponent.js'

class ToDoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: []
        }
    }

    render(){
        return(
            <div>
                <p> ToDoList </p>
            </div>

        )
    }
}

export default ToDoListComponent;