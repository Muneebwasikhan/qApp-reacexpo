import React, { Component } from 'react';
import { View, Text,Image, TextInput, Alert,StyleSheet,Picker,Dimensions,Button as ReactButton } from "react-native";
import {Modal, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';

class ModalAddCompany extends Component {
   state = {
       text: "",

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

{/* <FormLabel>Name</FormLabel>
<FormInput onChangeText={(e) => { Alert.alert(e) }} />
<FormValidationMessage>Error message</FormValidationMessage> */}

<View>
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Name of company"
/>
<Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Since"
/>
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Certificates (Max 3 Images)"
/>
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Timings"
/>
<TextInput
    style={styles.loginInput}
    onChangeText={(text) => this.setState({ text })}
    value={this.state.text}
    placeholder= "Address"
/>
<Button
    title="Sign In"
    buttonStyle={styles.loginButton}
    onPress={() => {
        Alert.alert(this.state.text) 
        }} />
    </View>

</View>
        </Modal>

        {/* <TouchableHighlight
          onPress={() => {
            this.props.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}
      </View>

         );
    }
}
 
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