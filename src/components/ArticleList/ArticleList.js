// import "./articleList.css"
import React from 'react'
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';

import { ListGroup } from 'react-bootstrap'

// props:
// articles - an array of article objects
// handleTitleClick - a function
function ArticleList(props) {
  return (
    <ul id="articles">
      {
        props.articles.map((article, index) => (
          <ListGroup.Item key={index} className={index % 2 ? "odd-item" : "even-item"}>
            <ArticleTeaser pageUrl={`/articles/${index + 1}`} {...article} id={index + 1} />
          </ListGroup.Item>
        ))
      }
    </ul>
  )
}

export default ArticleList;