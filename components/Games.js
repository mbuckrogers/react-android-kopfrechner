import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// var Icon = require('react-native-vector-icons/Ionicons');
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class Games extends Component {
  render() {

    return (
          <View>
            {
              this.props.games.slice(0, 5).map((game, index) => {
                return (
                  <GameLine key={index} game={game}/>
                )
              })
            }
          </View>


            )};
            }


class GameLine extends Component {
  render() {
    let icon = this.props.game.isCorrectAnswer() ? (<FontAwesome name="thumbs-up" color="green" />) :  (<FontAwesome name="thumbs-down" color="red" />)

    return (
      <View style={styles.numberline}>
        <View style={styles.number}>
          <Text>{this.props.game.numberValLeft}</Text>
        </View>
        <View style={styles.operation}>
          <Text>{this.props.game.operation.display}</Text>
        </View>
        <View style={styles.number}>
          <Text>{this.props.game.numberValRight}</Text>
        </View>
        <View style={styles.operation}>
          <Text>=</Text>
        </View>
        <View style={styles.result}>
          <Text>{this.props.game.result} ({this.props.game.answer})</Text>
        </View>
        <View style={styles.icon}>
          {icon}
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  numberline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 30
  },
  number: {
    flex: 0.1,
    alignSelf: 'center'
  },
  icon: {
    flex: 0.1,
    alignSelf: 'flex-start'
  },
  operation: {
    flex: 0.1,
    alignSelf: 'center'
  },
  result: {
    flex:0.2,
    backgroundColor: 'transparent'
  }

});

export default Games
