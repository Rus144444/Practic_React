import React, { Component } from "react";
import "./ColorPicker.css";

export default class ColorPicker extends Component {
  state = {
    activeOptionInd: 2,
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionInd) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  };

  setActive = (index) => {
    this.setState({ activeOptionInd: index });
  };

  render() {
    const { options } = this.props;
    const { activeOptionInd } = this.state;
    const { label } = options[activeOptionInd];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <h3>Выбран цвет {label}</h3>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActive(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
