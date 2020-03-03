import React from 'react';
import CategoryList from './CategoryList.jsx';
import exampleVideoData from '../../data/exampleVideoData.js';
import axios from 'axios';
import { EventEmitter } from 'events';
import apikey from '../../youtubeconfig.js';

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: "Personal Finance",
          videos: [
            {
              name: "interest rates",
              videoData: exampleVideoData[0],
              notes: "can i get a free lone plz"
            }, {
              name: "inflation",
              videoData: exampleVideoData[1],
              notes: "this is why candy bar prices are up"
            }, {
              name: "ssssss",
              videoData: exampleVideoData[2],
              notes: "tooo many sss for me"
            }]
        },
        {
          name: 'React',
          videos: [
            {
              name: "Hooks",
              videoData: exampleVideoData[2],
              notes: "I am still pretty bad at this"
            }, {
              name: "REACT DOM",
              videoData: exampleVideoData[3],
              notes: "ahh this makes a lot more sense now"
            }]
        }
      ],
      current: false,
      category: ''

    }
    this.addCategory = this.addCategory.bind(this);
    this.searchVideo = this.searchVideo.bind(this);
    this.expandCategory = this.expandCategory.bind(this);
  }
  addCategory(category) {
    var currentState = this.state.categories;
    currentState.push({
      name: category,
      videos: []
    });
    this.setState({categories: currentState});
  }

  expandCategory(event) {
    this.setState({category: event.target.value})
  }


  searchVideo(term) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apikey}=${term}&maxResults=7&type=video&videoEmbeddable=true`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <CategoryList category={this.state.categories} add={this.addCategory} search={this.searchVideo} expand={this.expandCategory}/>
      </div>
    );
  }

}

export default MainApp;