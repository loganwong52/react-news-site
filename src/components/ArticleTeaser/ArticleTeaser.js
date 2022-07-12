import React from 'react'

// props:
// id - a number
// title - a string
// created_date - a string
// handleTitleClick - a event handling function
function ArticleTeaser(props) {

  return (
    <div>
      <a onClick={() => props.handleTitleClick(props.id)}>{props.title}</a>
      <p>{props.created_data}</p>
    </div>
  )
}

export default ArticleTeaser;
