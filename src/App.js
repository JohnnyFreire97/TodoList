import React from 'react';
import ToDoList from './todolist';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itens:[], text:''} 
  }

    //na linha abaixo representa o input
    handleChange = (e) =>{
      this.setState({text:e.target.value})
    }
    
    handleRemove = (id) => {
      var list=this.state.itens.filter(function (el){
              return el.id !== id;
          } )
          this.setState(
              state=>({itens:list})
            );
     
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
      <div className='todo-app'>
        <h1>To do List</h1>
       
        <br/>
        <form className='todo-form' onSubmit={this.handleSubmit}>
          <input className='todo-input' id="newToDo" onChange={this.handleChange}
          value={this.state.text}/>
          <button className='todo-button'>Inserir</button>
        </form>
        <br/>
        <ToDoList itens = {this.state.itens}  fooDelete={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
