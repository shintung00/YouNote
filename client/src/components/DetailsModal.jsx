import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.video.name,
      playlist: this.props.video.playlist
    }
    //binding
    this.handleChange = this.handleChange.bind(this);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.video.id !== prevState.id) {
  //     return { 
  //       name: nextProps.video.name,
  //       playlist: nextProps.video.playlist
  //     };
  //   } else {
  //     return null
  //   };
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.video.id !== this.props.video.id){
  //     this.setState({
  //       name: this.props.video.name,
  //       playlist: this.props.video.playlist
  //     });
  //   }
  // }

    //need to eventually refactor due to possibility of deprecation
    componentWillReceiveProps(nextProps) {
      if (nextProps.video.videoId !== this.props.video.videoId) {
        this.setState({
          name: nextProps.video.name,
          playlist: nextProps.video.playlist
        });
      }
    }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Edit Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <label>
              Video Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Insert Name"/>
            </label>
            <label>
              Video Playlist:
              <input type="text" name="playlist" value={this.state.playlist} onChange={this.handleChange} placeholder="Insert Playlist"/>
            </label>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button variant="outline-success" onClick={() => {
            this.props.editvideodetail(this.state.name, this.state.playlist);
            this.props.onHide();
          }}>Save</Button>

        </Modal.Footer>
      </Modal>
    )
  }
}

export default DetailsModal;