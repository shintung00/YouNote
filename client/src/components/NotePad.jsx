import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%
`

const ColContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: column;
  width: 80%;
  height: 100%;
`

const ColOverflowContainer = styled.div `
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: column;
  width: 100%;
  height: 590px;
  overflow-y: auto;
`

class NotePad extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      inputText: '',
      notes: this.props.video.stickies,
    };
    this.handleInputText = this.handleInputText.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.video.videoId !== prevState.videoId) {
      return { 
        id: nextProps.video.videoId,
        notes: nextProps.video.stickies
      };
    } else {
      return null
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.video.videoId !== this.props.video.videoId){
      this.setState({
        notes: this.props.video.stickies,
        videoId: this.props.video.videoId
      });
    }
  }

  handleInputText(e) {
    this.setState({inputText: e.target.value})
  }

  addNote() {
    if (this.state.inputText !== '') {
      let newNotes = this.state.notes;
      newNotes.push(this.state.inputText);
      // this.setState({notes: newNotes});
      this.setState({inputText: ''});
      this.props.updateStickies(newNotes);
    } else {
      alert('Empty note cannot be added');
    }
  }

  deleteNote(key) {
    let newNotes = this.state.notes;
    newNotes.splice(key, 1);
    // this.setState({notes: newNotes});
    this.props.updateStickies(newNotes);
  }

  render() {
    // Create list of notes
    let list = this.state.notes.map((note, i) => {
        return (
          <div key={i}>
            <div>
              <button className="delete btn btn-default" onClick={() => {this.deleteNote(i)}}>❌</button> 
              {note} 
              
            </div>
          </div>
        )
      });
    return (
      <ColContainer>
        <RowContainer >
          <input 
            id="note-add" 
            className="form-control" 
            type="text"
            value={this.state.inputText}
            placeholder="Add sticky note here"
            onChange={this.handleInputText}
            style={{fontSize:"18px"}}
            />
          <Button size="sm" variant="outline-success" onClick={this.addNote}>Note</Button>
        </RowContainer>
        <ColOverflowContainer>
          {this.state.notes.length === 0 ? <h3> No Notes</h3> : list}
        </ColOverflowContainer>
      </ColContainer>
    );
  }
}

export default NotePad;
