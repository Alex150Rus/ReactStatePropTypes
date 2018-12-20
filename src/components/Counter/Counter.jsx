import './Counter.css';

import React, {Component} from 'react';

export default class Counter extends Component {

  constructor(props) {
    //обязательный параметр
    super(props);
    //инициализируем состояние (оно всегда хранится в стэйте)
    this.state = {
      counter: 1,
    }
  }

  handleClick = (e) => {
  const addition = event.target.name === 'plus' ? 1 : -1;
  this.setState((prevState) => ({
    counter: prevState.counter + addition,
  }));
  };

  render() {
    const {counter} = this.state;
    return (
      <div className="Counter">
        <button name="minus" onClick={this.handleClick}>-</button>
        {counter}
        <button name="plus" onClick={this.handleClick}>+</button>
      </div>
    )
  }
}