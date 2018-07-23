import React, { Component } from 'react';
import './App.css';

class NavBar extends React.Component {
  render() {
    return(
      <div className="App-navbar"><h1>Navbar</h1></div>
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
      <div className="App-article">
        Article
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return(
      <div className="App-body">
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
      <div className="App-footer">
        Footer
      </div>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

export default App;
