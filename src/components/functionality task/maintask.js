import { Link } from 'react-router-dom';
import './maintask.sass';
import { Component } from 'react';


class MainTaskFunctionality extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isEditing: false,
          updatedTask: props.task, 
        };
      }

      handleEditClick = () => {
        this.setState({ isEditing: true });
      };
    
      handleSaveClick = () => {
        const { id, onEdit } = this.props;
        const { updatedTask } = this.state;
        onEdit(id, updatedTask); 
        this.setState({ isEditing: false });
      };
    
      handleInputChange = (e) => {
        this.setState({ updatedTask: e.target.value });
      };

render() {
    const { id, task, onDelete } = this.props;
    const { isEditing, updatedTask } = this.state;
    
    return(
            <div className="block-task-list">
                <div className="task-list">
                {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedTask}
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleSaveClick}>Сохранить</button>
            </div>
          ) : (
          <Link to={`task/${id}`} className="task-name">
            {task}
          </Link>
          )}
                  <div className="btns">
                    <button onClick={onDelete} className="delete-name-btn"><img src="img/trash.svg" alt="" /></button>
                    <button onClick={this.handleEditClick} className="eddit-name-btn"><img src="img/eddit.svg" alt="" /></button>
                  </div>
              </div>
          </div>
    )
}
}

export default MainTaskFunctionality;