import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="main-game-body">
        <div className="puzzle-memo">
          <h2>Some Memo</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos beatae magni magnam veniam illum quae perspiciatis? Quae ex, saepe obcaecati consectetur numquam sit ipsam ut aliquam illo et at.</p>
        </div>
        <div className="puzzle-main">
          <div className="puzzle-game">
            <div className="game-detail">
              <p>Game Detail : </p>
            </div>
            <div className="puzzle-grid">
              <p> Something</p>
            </div>
            <div className="puzzle-btns">
              <h3>Some Buttons here</h3>
            </div>
          </div>
          <div className="puzzle-options">
            <h3>Some Radio Buttons here</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


