var Operations = {
  multiply: {
    display: 'x',
    opValue: 0,
    performOp(left, right) {
      return left * right
    },
    calcLeftRight(left, right) {
      return [left, right]
    }
  },
  add: {
    display: '+',
    opValue: 2,
    performOp(left, right) {
      return left + right
    }
    ,
    calcLeftRight(left, right) {
      return [left, right]
    }
  },
  subtract: {
    display: '-',
    opValue: 3,
    performOp(left, right) {
      return left - right
    },
    calcLeftRight(left, right) {
      return left > right ? [left, right] : [right, left]
    }
  },
  divide: {
    display: ':',
    opValue: 1,
    performOp(left, right) {
      return left / right
    },
    calcLeftRight(left, right) {
      return [left * right, right]
    }
  }
}

export { Operations }

var OperationsArray = [Operations.multiply, Operations.divide, Operations.add, Operations.subtract]
export { OperationsArray }


class Game {
  constructor(lefti, righti, operation) {
    let leftRight = operation.calcLeftRight(lefti, righti)
    this.numberValLeft = leftRight[0]
    this.numberValRight = leftRight[1]

    this.operation = operation
    this.result = this.operation.performOp(this.numberValLeft,this.numberValRight);
    this.answer = '';

  }

  isCorrectAnswer() {
    return this.result == this.answer
  }

  logMe() {
    console.log(this.numberValLeft + " " + this.operation.display + " " + this.numberValRight + " = " + this.result)
  }
}


var GameStore = {
  numbersGenerated: false,
  game: undefined,
  games: [],
  selectedOperation : Operations.multiply,

  newGame: function(lefti, righti, operation) {
    if(this.game) {
      this.games.unshift(this.game)
    }

    this.game = new Game(lefti, righti, operation = this.selectedOperation)
    this.game.logMe()
  }

}

export default GameStore
export {Game}
