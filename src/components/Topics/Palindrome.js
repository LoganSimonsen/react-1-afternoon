import React, { Component } from 'react';
import index from '../../index.css';
export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: '',
      palindromeNot: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val, });
  }

  isPalindrome(userInput) {
    var forwards = userInput;
    forwards = forwards.replace(/[^0-9a-z]/gi, '');
    forwards = forwards.replace(/\./g,' ');
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');
    backwards = backwards.replace(/[^0-9a-z]/gi, '');
    backwards = backwards.replace(/\./g,' ');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'That is a Palindrome!' });
      this.setState({ palindromeNot: '' });
    } else {
      this.setState({ palindrome: '' });
      this.setState({ palindromeNot: 'That is NOT a Palindrome.' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox">  { this.state.palindrome } </span>
        <span className="resultsBoxPalindromeNot">  { this.state.palindromeNot } </span>
      </div>
    )
  }
}