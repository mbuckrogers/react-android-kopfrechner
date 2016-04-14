import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


class CalcPart extends Component {

  constructor(props) {
    super(props)
    this.handleChange = props.onChange
    this.handleSubmit = props.onSubmit
  }

  render() {
    this.props.game.logMe()
    return (
          <View style={styles.numberline}>
            <View style={styles.number}>
              <Text style={styles.textStyle}>{this.props.game.numberValLeft}</Text>
            </View>
            <View style={styles.operation}>
              <Text style={styles.textStyle}>{this.props.game.operation.display}</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.textStyle}>{this.props.game.numberValRight}</Text>
            </View>
            <View style={styles.operation}>
              <Text style={styles.textStyle}>=</Text>
            </View>
            <View style={styles.answer}>
              <Text style={styles.textStyle}>{this.props.game.answer}</Text>
            </View>
          </View>
      )};
  }

  var styles = StyleSheet.create({
    numberline: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 30,
      paddingTop: 20,
    },
    number: {
      flex: 0.1,
      alignSelf: 'center',
    },
    answer: {
      flex: 0.3,
    },
    operation: {
      flex: 0.1,
      alignSelf: 'center'
    },
    textStyle: {
      fontWeight:'bold',
      fontSize: 20,
    }

});


export default CalcPart
