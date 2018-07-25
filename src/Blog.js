import React, { Component } from 'react';
import './Blog.css';

class NavBar extends React.Component {
  render() {
    return(
      <div className="Blog-navbar"><h1>Navbar</h1></div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <NavBar />
    )
  }
}

class ArticlePreview extends React.Component {
  render() {
    return(
      <div className="Blog-article">
        Article
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return(
      <div className="Blog-body">
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div className="Blog-footer">
        Footer
      </div>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return(
      <div className="Blog">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

class Blog extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

export default Blog;
