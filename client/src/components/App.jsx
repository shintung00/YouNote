import React from 'react';

import VideoPlayer from './VideoPlayer.jsx';
// import Search from './Search.jsx';
import Notes from './Notes.jsx';
import View from './NotePad.jsx';

// searchYouTube({ part: 'snippet', key: YOUTUBE_API_KEY, query: 'cats', max: 10, type: 'video', videoEmbeddable: true}, (data) => {
//   console.log(data);
// });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: this.props.video.videoData,
      notes: this.props.video.notes,
      name: this.props.video.name
      // videos: exampleVideoData,
      // current: exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          {/* <div className="col-md-6 offset-md-3">
            <Search click={this.onSearchButtonClick.bind(this)} press={this.inBarSearch.bind(this)}/>
          </div> */}
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.video.videoData}/>
            <Notes note={this.props.video.notes}/>
            <View />
          </div>
        </div>
      </div>
    );
  }

}

export default App;