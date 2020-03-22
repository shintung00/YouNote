import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

class AddVideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleAdd() {
    event.preventDefault();
    this.props.add(this.state.videoURL);
    this.setState({videoURL: ''});
  }

  keyPressed(event) {
    if (event.key === "Enter") {
      this.handleAdd();
    }
  }

  render() {
    return (
      
        <Form>
          <Container>
            <br />
            <br />
            <img  src="YouNoteLogo.svg" className="logo"/>
            <br />
            <RowContainer>
              <input type="text" name="videoURL" size="50"  value={this.state.videoURL} onChange={this.handleChange} onKeyPress={this.keyPressed}placeholder="Paste Youtube Video URL" style={{fontSize:"24px"}}/>
              <Button variant="outline-dark" onClick={this.handleAdd}>🔍</Button>
            </RowContainer>
          </Container>
        </Form>
    );
  }
}

export default AddVideoForm;