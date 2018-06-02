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
          style={{background:`${this.background(i,j)}`}}/>
        grids.push(input);
      }
    }
    return grids;
  }
  render() {
    return (
      <div className="main-body">
        <div className="puzzle-grid">
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}

export default Puzzle;


