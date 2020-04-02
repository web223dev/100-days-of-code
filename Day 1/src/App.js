import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'
import quotes from './quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: quotes,
      index: 0,
      quote: 'Happiness is not something readymade. It comes from your own actions.',
      author: 'Dalai Lama',
      bgColor: 'rgb(115, 168, 87)'
    }
  }

  ChangeEvent() {
    const { index, quoteData } = this.state;
    var x = Math.floor(Math.random() * 55) + 100;
    var y = Math.floor(Math.random() * 55) + 100;
    var z = Math.floor(Math.random() * 55) + 100;
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    if (index > 14 || index < 0) {
      this.setState({ index: 0 })
    } else {
      this.setState({
        index: index + 1,
        quote: quoteData[index]['quote'],
        author: quoteData[index]['author'],
        bgColor: bgColor
      })
    }    
  }

  render() {
    const { quote, author, bgColor } = this.state;
    return (
      <div className="container" style={{backgroundColor: bgColor}}>
        <div id="wrapper">
          <QuoteContent
            handleChangeEvent={() => this.ChangeEvent()}
            quote={quote}
            author={author}
            bgColor={bgColor}
          />
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const QuoteContent = ({ handleChangeEvent, quote, author, bgColor }) => {  
  return (
    <React.Fragment>
      <div id="quote-box">
        <div className="quote-text">
          <FontAwesomeIcon icon={faQuoteLeft} color={bgColor} />
          <span id="text" style={{color: bgColor}}> {quote}</span>
        </div>
        <div className="quote-author">
          <span id="author" style={{color: bgColor}}>- {author}</span>
        </div>
        <div className="buttons">
          <Link to="/" id="tweet-quote">
            <FontAwesomeIcon icon={faTwitterSquare} color={bgColor} />
          </Link>
          <Link to="/" id="tumblr-quote">
            <FontAwesomeIcon icon={faTumblrSquare} color={bgColor} />
          </Link>
          <button 
            id="new-quote"
            style={{backgroundColor: bgColor}}
            onClick={() => handleChangeEvent()}>
              New quote
          </button>
        </div>
      </div>
      <div id="footer">made by web223dev</div>
    </React.Fragment>
  );
};

export default App;