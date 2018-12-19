import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Moment from 'react-moment';
import sb from '../../assets/shark-blog.png';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],

    }

  }

  componentDidMount() {
    const { onLoad } = this.props;

    axios('https://shark-blog-one.herokuapp.com/api/articles')
      .then((res) => {
        this.setState({ articles: res.data.articles })
        console.log(res.data)
      });
  }

  returnArticles = () => {
    return (
      <div class="cards clearfix">
        {
          this.state.articles.slice(0, 3).map((article) =>
            <div className="card" key={`article-${article._id}`} >
              <img className="card__image" src="https://source.unsplash.com/category/nature/400x260" alt="Nature" />
              <div className="card__copy">
                <h4>{article.title}</h4>
                <p>{article.body}</p>
              </div>




            </div>)
        }
      </div>)
  }

  render() {
    return (
      <div className="blog" id='blog'>
        <h2><span></span>Blog</h2>
        <h3>Latest Posts</h3>
        <div className="blog-feed slideLeft" onClick={() => console.log(this.state)}>
          {this.state.articles.length > 0 ? this.returnArticles() : ''}
        </div>
      </div>
    );
  }
}

export default Blog;
