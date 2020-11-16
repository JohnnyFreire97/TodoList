import React from 'react';
import ToDoList from './todolist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itens:[], text:''} 
  }

    //na linha abaixo representa o input
    handleChange = (e) =>{
      this.setState({text:e.target.value})
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(!this.state.text.length){
        return;
      }
  
      const item = {
        text:this.state.text,
        id: Date.now()
      }
      this.setState(
        state=>({itens:state.itens.concat(item), text:''})
      );
  
    }

  render() {
    return (
      <div>
        <h3>TAREFAS</h3>
        <ToDoList itens = {this.state.itens}/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input id="newToDo" onChange={this.state.text}/>
          <button>Inserir</button>
        </form>
      </div>
    );
  }
}

export default App;
