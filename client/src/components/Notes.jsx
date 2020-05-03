import React from 'react';
import { Button } from 'react-bootstrap';


class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.video.notes,
      id: this.props.video.id,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.video.videoId !== this.props.video.videoId){
      this.setState({
        value: this.props.video.notes,
        id: this.props.video.videoId
      });
    }
  }

  
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  componentDidMount() {     
    console.log('mounted');
    setInterval(() => {this.props.updateNotes(this.state.value)} , 3000);
  }

  render() {
    return (
      <div >
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Notes" rows="7" cols="90" />
        </label>
        <br/>
        <Button variant="success" size="sm"
        onClick={() => {this.props.updateNotes(this.state.value);}} value="save">Save</Button>
      </div>
    );
  }
}

export default Notes;