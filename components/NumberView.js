import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


class SuccessLine extends Component {

  calcRightWrong(games) {
    let noGames = games.length;
    if(noGames == 0) {
      return {correct: 0, incorrect: 0}
    }

    let correct = games.filter((game) => game.isCorrectAnswer()).length
    return {correct: correct, incorrect: noGames - correct}
  }

  render() {
    let rigghtWrong = this.calcRightWrong(this.props.games)

    return (
      <View style={styles.numberline}>
        <View><NumberView resultText='Richtig' resultColor='green' number={rigghtWrong.correct}/></View>
        <View><NumberView resultText='Falsch' resultColor='red' number={rigghtWrong.incorrect}/></View>
      </View>
    )};
}

class NumberView extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', paddingRight: 20}}>
        <Text style={styles.label}>{this.props.resultText}</Text>
        <View style={[styles.surroundNumber, {backgroundColor: this.props.resultColor}]}>
          <Text style={styles.number}>{this.props.number}</Text>
        </View>
      </View>
    )
  }
}


// styles
var styles = StyleSheet.create({
  numberline: {
    flexDirection:'row'
  },
  label: {
    color: 'white',
    margin: 3,
    paddingRight: 5,
    fontWeight:'bold',
  },
  number: {
    color: 'white',
    alignSelf: 'center',
    margin: 3,
    fontWeight:'bold',
  },
  surroundNumber: {
    borderRadius: 50,
    height: 30,
    width:30
  }
});

export default SuccessLine
