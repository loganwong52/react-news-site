import React from 'react'
import Article from '../components/Article/Article.js'
import news from '../data/news.json';

// this hook retrieves dynamic params from the current URL, the articleID
import { useParams } from 'react-router-dom';
import { useState } from 'react'

const ArticlePage = () => {
  // let { articleID } = useParams();
  const params = useParams()
  let articleIndex = params.articleID - 1;

  const [article, setArticle] = useState(news[articleIndex])
  console.log('params?', params)

  return (
    <div>
      {
        article
          ? <Article{...article} image={article.multimedia.length ? article.multimedia[2].url : null} />
          : <span>404: Article not found.</span>
      }
    </div>
  )
}

export default ArticlePage;
