// Data Structures

const GameBoard = (() => {
  let _board = new Array(9);
  const getField = (num) => _board[num];

  const setField = (num, player) => {
    const htmlField = document.querySelector(
      `.board button:nth-child(${num + 1}) p`
    );
    htmlField.classList.add("puff-in-center");
    htmlField.textContent = player.getSign();
    _board[num] = player.getSign();
  };

  const getEmptyFieldsIdx = () => {
    fields = [];
    for (let i = 0; i < _board.length; i++) {
      const field = _board[i];
      if (field == undefined) {
        fields.push(i);
      }
    }
    return fields;
  };

  const clear = () => {
    for (let i = 0; i < _board.length; i++) {
      _board[i] = undefined;
    }
  };

  return { gameboardArray };
})();

const Players = (name) => {};
const DisplayController = (() => {})();

// gameboard as an array inside of a Gameboard object
// players are also going to be stored in objects
// object to control the flow of the game itself

// (gameBoard, displayController), use a module
// (players!), create them with factories

// UI
