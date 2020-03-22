import React from 'react';
import { Button, Modal } from 'react-bootstrap';


function InformationModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          About This Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Title: <a href={"https://www.youtube.com/watch?v=" + props.video.videoId} target="_blank">{props.video.videoTitle}</a></h5>
        <br/>
        <h5>
        Description: {props.video.videoDescription}
        </h5>
        <br/>
        <h5>Channel: <a href={"https://www.youtube.com/channel/" + props.video.channelId} target="_blank">{props.video.channelTitle}</a></h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InformationModal;
