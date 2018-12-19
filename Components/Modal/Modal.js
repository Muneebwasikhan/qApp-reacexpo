import React, { Component } from 'react';
import { View, Text,Image, TextInput, Alert,StyleSheet,Picker,Dimensions,Button as ReactButton } from "react-native";
import {Modal, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import t from 'tcomb-form-native'
import ImageFactory from 'react-native-image-picker-form'


class ModalAddCompany extends Component {
   state = {
       text: "",
       isDateTimePickerVisible: false,
       value: {},
      options: {
        fields: {
          image: {
            config: {
              title: 'Select image',
              options: ['Open camera', 'Select from gallery', 'Cancel'],
              // Used on Android to style BottomSheet
              style: {
                titleFontFamily: 'Roboto'
              }
            },
            error: 'No image provided',
            factory: ImageFactory
          }
        }
      }
    
   }

  
    render() { 
        return ( 

<View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>


<View>

<Form
        ref={(ref) => {
          this.form = ref
        }}
        type={DocumentFormStruct}
        value={this.state.value}
        options={this.state.options}
      />
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Name of company"
/>
<TouchableOpacity style={styles.loginInput} onPress={this._showDateTimePicker}>
          <Text style={styles.showDate}>Since</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />

<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Certificates (Max 3 Images)"
/>
<TouchableOpacity style={styles.loginInput} onPress={this._showDateTimePicker}>
          <Text style={styles.showDate}>Timings</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Address"
/>
<Button
    title="Add "
    buttonStyle={styles.loginButton}
    onPress={() => {
        Alert.alert(this.state.text) 
        }} />
    </View>

</View>
        </Modal>
      </View>

         );
    }

// ---------------------------------------------- functions ----------------------------------------------




_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };





// ---------------------------------------------- functions ----------------------------------------------
}


// ---------------------------------------------- Components ----------------------------------------------
const Form = t.form.Form
const DocumentFormStruct = t.struct({
  image: t.String
})
 
// type Props = {}
// type State = {
//   value: Object,
//   options: Object
// }

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
//   ImagePicker.showImagePicker(options, (response) => {
//     console.log('Response = ', response);
   
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//     } else {
//       const source = { uri: response.uri };
   
//       // You can also display the image using data:
//       // const source = { uri: 'data:image/jpeg;base64,' + response.data };
   
//       this.setState({
//         avatarSource: source,
//       });
//     }
//   });

// ---------------------------------------------- Components ----------------------------------------------
 
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
loginInput: {
    fontSize: 15,
    color: "#1b3815",
    width: width*0.8,
    height: 50,
    backgroundColor: "#ebebeb",
    borderRadius: 27,
    // padding: "0 35px 0 35px",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 35,
    paddingRight: 35,
    // borderStyle: "none",
    maxWidth: 400,
    },
    showDate:{
        color: "gray",
        paddingTop: 15
    },
    loginButton: {
        // fontSize: 15,
        // color: "#1b3815",
        // width: width*0.8,
        height: 50,
        backgroundColor: "#d83634",
        borderRadius: 27,
        // padding: "0 35px 0 35px",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 35,
        paddingRight: 35,
        // borderStyle: "none",
        maxWidth: 400,
        // maxWidth: 400,
        }

  });

export default ModalAddCompany;