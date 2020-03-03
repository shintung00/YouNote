import React from 'react';
import VideoList from './VideoList.jsx';

var CategoryListEntry = (props) => (
  <div className="Category-list-entry media" vids={props.vids}>
    <VideoList vids={props.vids}/>  
  </div>
);



export default CategoryListEntry;
