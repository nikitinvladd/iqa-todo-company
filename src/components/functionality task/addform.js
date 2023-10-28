import { Component } from "react";
import './maintask.sass';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
            isFormVisible: false
        }
    }
    addTask = 'enter-form';
    onValueChange = (e) => {
        this.setState({
            task : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.task < 1) return;
        this.props.onAdd(this.state.task);
        this.setState({
            task: ''
        });
        }
    onToggleTask = () => {
        this.setState(prevState => ({
            isFormVisible: !prevState.isFormVisible
        }));
    }
    render(){
        const {task, isFormVisible} = this.state;
        const enterFormClass = isFormVisible ? 'enter-form active' : 'enter-form';
        return(
            <div className="add-new-project">
            <div className="add-name-task">
                <div className="new-project">New Prospects</div>
            </div>
            <div className="enter-task">
            <button onClick={this.onToggleTask}  className='add-task-btn'>Add Task</button>
            <div className={enterFormClass}>
                <form className='todoform' onSubmit={this.onSubmit}>
                <input type="text"
                    placeholder='Enter your task' 
                    className='add-task-input' 
                    name='task'
                    value={task} 
                    onChange={this.onValueChange}/>
                    <button className="enter-task-btn" type="submit">Enter</button>
                </form>
                </div>
            </div>  
        </div>
        )
    }
}

export default AddForm;