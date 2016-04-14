/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TextInput,
  BackAndroid,
  Picker
} from 'react-native';

import SuccessLine from './components/NumberView'
import CalcPart from './components/CalcPart'
import Games from './components/Games'
import TwoNumberGenerator from './components/TwoNumberGenerator'
import OperationPicker from './components/OperationPicker'
import GameStore, {Operations, OperationsArray, Game} from './components/GameStore'
import NumericKeyPad from './components/NumericKeyPad'


BackAndroid.addEventListener('hardwareBackPress', function() {
     return false;
});

class kopfrechner_react_android extends Component {

  constructor() {
      super()
      this.state = {}
      this.state.gameStore = GameStore
      this.tNumGen = TwoNumberGenerator()

    }

  componentDidMount() {
    console.log("componentDidMount")
    this.newGameAndStateChange()
  }

  actualOperation() {
    return this.state.gameStore.selectedOperation
  }

  newGameAndStateChange() {
    let p = this.tNumGen.twoNumbers()
    console.log("I should be a promise " + p)
    console.log(p)
    p.then((twoNumArray) => {
      console.log("newGameAndStateChange " + twoNumArray)
      console.log("actualOperation " +  this.actualOperation())
      let tmpGameStore = Object.assign({}, this.state.gameStore)
      tmpGameStore.numbersGenerated = true

      tmpGameStore.newGame(...twoNumArray, this.actualOperation())
      this.setState({gameStore: tmpGameStore})
      this.forceUpdate()
      console.log(tmpGameStore)
    })
  }

  onChange(value) {
      let tmpGameStore = Object.assign({}, this.state.gameStore)
      tmpGameStore.game.answer = value

      if(tmpGameStore.game.isCorrectAnswer()) {
        this.onSubmit(value)
      } else {
        this.setState({gameStore: tmpGameStore})
      }
  }

  onSubmit(value) {
      let tmpGameStore = Object.assign({}, this.state.gameStore)
      tmpGameStore.numbersGenerated = false
      this.setState({gameStore: tmpGameStore})
      this.newGameAndStateChange()
  }

  onSelect(selectedOperation) {
    let op = OperationsArray.find(operation => operation.opValue == selectedOperation)
    console.log(op)
    let tmpGameStore = Object.assign({}, this.state.gameStore)
    tmpGameStore.selectedOperation = op
    let numberValLeft = tmpGameStore.game.operation === Operations.divide ?
      tmpGameStore.game.numberValLeft / tmpGameStore.game.numberValRight : tmpGameStore.game.numberValLeft;

    let adjustedGame = new Game(numberValLeft, tmpGameStore.game.numberValRight, tmpGameStore.selectedOperation)
    tmpGameStore.game = adjustedGame
    this.setState({gameStore: tmpGameStore})
  }


  render() {

    if(!this.state.gameStore.numbersGenerated) {
      return (
        <View>
          <View style={styles.header}>
            <View style={styles.toolbar}>
              <Text style={styles.toolbarTitle}>Kopf Rechner - Zahlen werden geholt</Text>
              <Text style={styles.toolbarButton}>Operation</Text>
            </View>
            <View style={styles.toolbar}>
              <SuccessLine games={this.state.gameStore.games}/>
            </View>
          </View>
        </View>
      )}


      return (
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={styles.header}>
            <View>
              <Text style={styles.toolbarTitle}>Kopf Rechner</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={styles.successline}>
                <SuccessLine  games={this.state.gameStore.games}/>
              </View>
              <OperationPicker style={styles.oppicker} onSelect={this.onSelect.bind(this)} selectedOperation={this.state.gameStore.game.operation.opValue}/>
            </View>
          </View>

          <View style={{flex: 2}}>
            <View>
              <CalcPart focus={this.state.focus}
                game={this.state.gameStore.game}
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}/>
            </View>
            <View style={{paddingTop: 20}}>
              <Games games={this.state.gameStore.games}/>
            </View>
            <View style={styles.keypad}>
            </View>
          </View>

          <NumericKeyPad style={styles.keypad} onEnter={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}/>

        </View>
            );
          }
            }

  const styles = StyleSheet.create({
  header: {
    backgroundColor:'#607d8b',
    paddingLeft: 30,
    paddingTop: 10,
  },
  successline:{
      alignSelf: 'center',
      flex: 0.5,
  },
  oppicker:{
      alignSelf: 'center',
      width: 30,
  },
  toolbarTitle:{
      fontWeight:'bold',
      fontSize: 30,
      color: 'white',
      flex:1,
      paddingBottom: 10,
  },
  keypad: {
    alignSelf: 'center',
    flex: 0
  }
});

AppRegistry.registerComponent('kopfrechner_react_android', () => kopfrechner_react_android);
