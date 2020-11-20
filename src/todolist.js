import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import './App.css';
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <ul>{this.props.itens.map(
                item => (
                    <li className="todo-row" key={item.id}>{item.text}
                        <div className="icons">
                            <RiCloseCircleLine className='delete-icon' 
                            onClick={() => this.props.fooDelete(item.id)} />
                        </div>
                    </li>
                )
            )}</ul>
        );
    }

}

export default ToDoList;

