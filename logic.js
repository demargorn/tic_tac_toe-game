'use strict';


const players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function startGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    activePlayer = 0;
    renderBoard(board)
};

function click(row, col) {    
    board[row][col] = players[activePlayer]; // отрисовка элемента
    renderBoard(board);

    //проверка выигрыша
    for (let setRow = 0; setRow < board.length; setRow += 1) { // пробегаемся по строкам
      let testRow = []; // создаем пустую тестовую строку, куда будем класть значения из board
      let rowActivePlayer = []; // создаем пустую строку с выигрышным значением

      for (let setCol = 0; setCol < board.length; setCol += 1) { // пробегаемся по столбцам
        testRow.push(board[setRow][setCol]); // собираем массив
        rowActivePlayer.push(players[activePlayer]); // собираем строку с которой будем сравнивать
      };

      // получаем строку в testRow
      if (testRow.join() === rowActivePlayer.join()) {
        showWinner(activePlayer);
      };
    };

    for (let setCol = 0; setCol < board.length; setCol += 1) {
      let testCol = [];
      let colActivePlayer = [];

      for (let setRow = 0; setRow < board.length; setRow += 1) {
        testCol.push(board[setRow][setCol])
        colActivePlayer.push(players[activePlayer])
      };

      // тут получаем столбец в testCol
      if (testCol.join() === colActivePlayer.join()) {
        showWinner(activePlayer);
      };
    };

    // проверяем диагонали
    let testDiagonalL = [];
    let testDiagonalR = [];
    let diagonalActivePlayer = [];

    for (let set = 0; set < board.length; set += 1) {
      testDiagonalL.push(board[set][set]);
      testDiagonalR.push(board[board.length-1-set][set]);
      diagonalActivePlayer.push(players[activePlayer]);
    };

    // тут получаем диагональ в testDiagonal  
    if (testDiagonalL.join() === diagonalActivePlayer.join()) {
      showWinner(activePlayer);
    };
    if (testDiagonalR.join() === diagonalActivePlayer.join()) {
      showWinner(activePlayer);
    };

    //передаём ход другому игроку    
     if (activePlayer === 0) {
       activePlayer = 1;
     } else {
       activePlayer = 0;
     };
  };  