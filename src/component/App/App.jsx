import { Component } from "react";
import { ContainerApp } from "./App.styled";
import { todoList } from "./todoList";
import TodoList from "./TodoList";

// import Dropdown from "./Dropdown";
// import ColorPicker from "./ColorPicker";
// import Counter from "./Counter";
// import { colorPeckerOption } from "./arrayColorPecker";

export class App extends Component {
  state = {
    todo: todoList,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todo } = this.state;
    return (
      <ContainerApp>
        <TodoList todo={todo} onDeleteTodo={this.deleteTodo} />
      </ContainerApp>
    );
  }
}
