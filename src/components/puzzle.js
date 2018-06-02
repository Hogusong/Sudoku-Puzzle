import React, { Component } from 'react';

class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.background = this.background.bind(this);
  }

  background(x,y) {
    if(x<3 && (y<3 || y>5)) return 'whitesmoke';
    if((x>2 && x<6) && (y>2 && y<6)) return 'whitesmoke';
    if(x>5 && (y<3 || y>5)) return 'whitesmoke';
    return 'white';
  }

  renderGrid() {
    // const puzzle = this.props.puzzle;
    // const col = puzzle.length;
    // const row = puzzle[0].length;
    const grids = [];
    for (let i=0; i<9; i++) {
      for (let j=0; j<9; j++){
        const input = <input id={`${i}x${j}`} type='text'  
          style={{background:`${this.background(i,j)}`}}
          value={null}/>
        grids.push(input);
      }
    }
    return grids;
  }
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
              <h3>Game Detail</h3>
              <div id='detail'>
                <p>Level : ..........</p>
                <p>Puzzle #: .......</p>
                <p>Hint count : ...</p>
              </div>
            </div>
            <div className="puzzle-grid">
              {this.renderGrid()}
            </div>
            <div className="puzzle-options">
              <a>Press to get HELP</a>
            </div>
          </div>
          <div className="puzzle-btns">
            <button id='new'>New Game</button>
            <button id='check'>Check Status</button>
            <button id='hint'>One Hint</button>
            <button id='clear'>Clear Wrong</button>
            <button id='solve'>Solution</button>
            <button id='restart'>Start Again</button>
            <button id='addnew'>Add a Puzzle</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Puzzle;


