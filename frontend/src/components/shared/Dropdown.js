import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { label } = this.props;
    const classNames = `dropdown ${this.state.isOpen ? 'open' : null}`;
    return (
      <li className={classNames}>
        <a href="#" className="dropdown-toggle" onClick={this.handleClick}>
          {label}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {this.props.children}
        </ul>
      </li>
    )
  }
}

export default Dropdown;
