import React from 'react';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="input" onKeyPress={()=>{
      props.press($('#input').val());
    }}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" onClick={() =>{
        props.click(document.getElementById('input').value);
      }}></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
