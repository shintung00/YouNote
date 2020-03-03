import React from 'react';

class AddVideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <label>
          New Video:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <button onClick={() => {
          this.props.search(this.state.value);
          this.state.value = '';
        }}>Add</button> */}
        <button onClick={() => {this.props.search(this.state.value)}}>Add</button>
      </div>
    );
  }
}

export default AddVideoForm;
