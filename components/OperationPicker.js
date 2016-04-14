import React, {
  Component,
  StyleSheet,
  Text,
  Picker,
  View
} from 'react-native';


export default class OperationPicker extends Component {

  constructor(props) {
    super(props)
    this.handleSelect = props.onSelect
  }

  render() {

    return (
      <Picker style={styles.picker}
        selectedValue={this.props.selectedOperation}
        onValueChange={this.handleSelect}
        mode='dropdown'
        prompt='Operation auswählen'>

        <Picker.Item label="* Multiplikation" value={0} />
        <Picker.Item label="/ Division" value={1} />
        <Picker.Item label="+ Addition" value={2} />
        <Picker.Item label="- Subtraktion" value={3} />
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  picker:{
      color:'white',
      flex: 0.3,
      borderColor: 'black',
      alignSelf: 'flex-end',

  }
});
