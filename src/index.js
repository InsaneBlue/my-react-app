import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// 井字棋范例

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length ;i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}


class Board extends React.Component {

  renderSquare(i) {
  return (
    <Square 
      value={this.props.squares[i]} 
      onClick={() => this.props.onClick(i)}
    />
  );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      isXNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXNext ? 'X': 'O';
    this.setState(() => {
      return {
        history: history.concat([{
          squares,
        }]),
        isXNext: !this.state.isXNext,
      };
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length -1];

    let status = `Next player: ${this.state.isXNext ? 'X':'O'}`;
    const winner = calculateWinner(current.squares);
    if(winner) {
      status = `Winner: ${winner}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            onClick={(i) => this.handleClick(i)}
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
  
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
