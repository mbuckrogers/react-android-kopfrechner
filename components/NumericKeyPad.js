import React, {Component,StyleSheet,Text,TouchableHighlight,View, Dimensions, TouchableOpacity} from 'react-native';

const hairlineWidth = StyleSheet.hairlineWidth;


const window = Dimensions.get('window');

class TouchableButton extends TouchableHighlight {
  touchableGetHighlightDelayMS() {
    return 50;
  }
}

export default class NumericKeyPad extends Component {

  row1 = [1,2,3]
  row2 = [4,5,6]
  row3 = [7,8,9]
  row4 = ['<-', 0, 'Enter']



  constructor(props) {
    super(props)
    this.handleEnter = this.props.onEnter
    this.handleOnChange = this.props.onChange
    this.numbers = []
    console.log(`received ${this.props.value} having ${this.numbers}`)
  }

  onPress(key) {
    console.log(key)
    if(key == 'Enter') {
      this.handleEnter(this.numbers.join(''))
    } else {
      if(key == '<-') {
        this.numbers.pop()
      } else {
        if(this.numbers.length <= 5 )
        this.numbers.push(key)
      }
      this.handleOnChange(this.numbers.join(''))
    }
  }

  renderKey(key) {
    return(

          <TouchableHighlight
            key={key}
            style={styles.touchable}
            underlayColor='darkgrey'
            onPress={this.onPress.bind(this, key)}>
            <Text style={styles.mainText}>{key}</Text>
          </TouchableHighlight>


        )
  }

  renderRow(row) {
    return(
      <View style={styles.keyRow}>
        {
          row.map((num) => {
            return this.renderKey(num)
          })
        }
      </View>

    )
  }

  render() {

    // this.numbers = thus.props.value.split('')

    return(
      <View style={styles.container}>
        {this.renderRow(this.row1)}
        {this.renderRow(this.row2)}
        {this.renderRow(this.row3)}
        {this.renderRow(this.row4)}

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  keyRow: {
    flexDirection: 'row',
    flex: 1,
    width: window.width - 100,
    alignSelf: 'center'
  },
  touchable: {
    flex: 1,
    borderWidth: 1,
    margin: 2,
    backgroundColor: 'lightgrey',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  akey: {
        flex: 1,
        borderWidth: 1,
        margin: 2,
        backgroundColor: 'lightgrey',
        opacity: 1,
        height: 40,
    },
    mainText: {
        fontWeight:'bold',



    },
})
