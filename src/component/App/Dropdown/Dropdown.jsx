import { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  Show = () => {
    this.setState({
      visible: true,
    });
  };

  Hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={this.Show}>
          Показать
        </button>
        <button type="button" className="Dropdown__toggle" onClick={this.Hide}>
          Скрыть
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
