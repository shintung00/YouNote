import React from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import Notes from './Notes.jsx';
import NotePad from './NotePad.jsx';
import InformationModal from './InformationModal.jsx';
import DetailsModal from './DetailsModal.jsx';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import TextEditor from './TextEditor.jsx'

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  // margin-left: 15px;
`
const ColContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`

const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`

const App = (props) => {
  const [informationShow, setInformationShow] = React.useState(false);
  const [detailsShow, setDetailsShow] = React.useState(false);

  return (
    <div>
      <RowContainer2>
        <ColContainer2>   
          <VideoPlayer video={props.video}/>
          <br />
          <RowContainer>
            <ColContainer>
              <br />
              <Button variant="outline-danger" className="video-options" onClick={props.delete} size="lg">🗑</Button>
              <Button variant="outline-primary" className="video-options" onClick={() => setInformationShow(true)} size="lg">ℹ️</Button>
              <Button variant="outline-primary" className="video-options" onClick={() => setDetailsShow(true)} size="lg">✏️</Button>
            </ColContainer>
            <TextEditor />

            {/* <Notes video={props.video} updateNotes={props.updateNotes}/> */}
          </RowContainer>
        </ColContainer2>   
        <NotePad className="notepad" video={props.video} updateStickies={props.updateStickies}/>
      </RowContainer2>



          <InformationModal show={informationShow} video={props.video} onHide={() => setInformationShow(false)}
          />
          <DetailsModal show={detailsShow} video={props.video} onHide={() => setDetailsShow(false)} editvideodetail={props.editvideodetail}
          />
      </div>

  )
}
export default App;