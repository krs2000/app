import React, { Component } from 'react';
import './index.css';
import axios from 'axios';


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loaded: false
    }

  }

  componentDidMount() {
    axios('https://shark-blog-one.herokuapp.com/api/articles')
      .then((res) => {
        this.setState({ articles: res.data.articles })

      });
  }

  returnArticles = () => {
    return (
      <div className="cards clearfix" id='blog'>
        {
          this.state.articles.slice(0, 3).map((article) =>
            <div className="card" key={`article-${article._id}`} >
              <img className="card__image" src="https://source.unsplash.com/category/nature/400x260" alt="blog" />
              <div className="card__copy">
                <h4>{article.title}</h4>
                <p>{article.body}</p>
              </div>




            </div>)
        }
      </div>)
  }

  returnActiveClass = () => {
    if (this.props.active && !this.state.loaded) {
      setTimeout(() => this.setState({ loaded: true }), 1000);
      return "blog-feed fadeIn";
    }
    else {
      return "blog-feed"
    }
  }

  render() {
    return (
      <div className="blog" id='blog'>
        <h2><span></span>Blog</h2>
        <h3>Latest Posts</h3>
        <div className={this.returnActiveClass()} onClick={() => console.log(this.state)}>
          {this.state.articles.length > 0 ? this.returnArticles() : ''}
        </div>
      </div>
    );
  }
}

export default Blog;
