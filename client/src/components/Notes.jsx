import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.note
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Notes" rows="10" cols="100"/>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Notes;