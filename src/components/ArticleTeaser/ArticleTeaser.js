import React from 'react'

import { Link } from "react-router-dom";


// props:
// id - a number
// title - a string
// created_date - a string
// handleTitleClick - a event handling function
function ArticleTeaser(props) {

  return (
    <div>
      {/* <a href="#" onClick={(event) => {
        event.preventDefault();
        props.handleTitleClick(props.id);
      }}>{props.title}</a>
      <p>{props.created_data}</p> */}
      <Link to={props.pageUrl}>{props.title}</Link>
      <p>{props.created_data}</p>
    </div >
  )
}

export default ArticleTeaser;
