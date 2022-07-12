import React from 'react'


// props
// title - a string
// created_date - a string
// abstract - a string
// byline - a string (optional)
// image - a url string (optional)
function Article(props) {

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.created_date}</p>
      {props.byline && <h2>{props.byline}</h2>}
      {props.image && <img src={props.image} alt="article image" />}
      <p>{props.abstract}</p>
    </div>
  )
}

export default Article;
