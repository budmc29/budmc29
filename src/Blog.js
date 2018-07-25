import React, { Component } from 'react';
import './Blog.css';

class NavBar extends React.Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar--section">
          <h1 className="navbar--logo">Navbar</h1>
          <div className="navbar--menu">
            <ul className="navbar--menu--items">
              <li><a className="navbar--menu--item" href="#">about</a></li>
              <li><a className="navbar--menu--item" href="=">contact</a></li>
            </ul>
          </div>
        </div>

        <div className="navbar--section">
          <div className="social--menu">
            <ul className="social--menu--items">
              <li><a className="social--menu--item" href="#">github</a></li>
              <li><a className="social--menu--item" href="=">so</a></li>
            </ul>
          </div>
        </div>
      </div>
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
