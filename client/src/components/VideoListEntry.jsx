import React from 'react';
import { Card } from 'react-bootstrap';

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseIn() {
    this.setState({hovered: true})
  }

  mouseOut() {
    this.setState({hovered:false})
  }

  render() {
    let videoImageURL = this.props.video.videoThumbnail;
    return (
      <Card className="bg-dark text-white text-center rounded-pill" style={{width: '20rem', cursor:"pointer", margin:'15px'}}  onMouseOver={this.mouseIn} onMouseLeave={this.mouseOut} 
      onClick={() => {
        this.props.selectVideo(this.props.video.videoId)
      }}
      >
        {
          this.state.hovered ? <Card.Img src={videoImageURL} alt="Card image" style={{transform: 'scale(1.15, 1.15)', transition: '0.3s', borderRadius: '15%'}}/> : <Card.Img src={videoImageURL} alt="Card image" style={{transition: '0.3s', borderRadius: '15%'}}/>
        }
        
        <Card.ImgOverlay>
          <Card.Title className="card-title">{this.props.video.name}</Card.Title>
          {this.state.hovered ? <Card.Text className="card-text">{this.props.video.notes.length > 50 ? this.props.video.notes.substring(0, 50) + "...": this.props.video.notes}
          </Card.Text> : null
          }
        </Card.ImgOverlay>
      </Card>
    )
  }
}



export default VideoListEntry;
