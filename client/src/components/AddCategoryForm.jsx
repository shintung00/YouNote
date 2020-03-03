import React from 'react';

class AddCategoryForm extends React.Component {
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
          New Category:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button onClick={() => {
          this.props.add(this.state.value);
          this.state.value = '';
        }}>Add</button>
      </div>
    );
  }
}

export default AddCategoryForm;
