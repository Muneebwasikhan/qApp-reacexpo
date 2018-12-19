import React from "react";
import { View, Text,Image, TextInput, Alert,StyleSheet,Dimensions,Button as ReactButton } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button } from 'react-native-elements';
import db from '../Config/Firebase/Firebase';
import {Modal, TouchableHighlight} from 'react-native';
import ModalAddCompany from '../Components/Modal/Modal';

export default class Login extends React.Component {
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {
        const {modalVisible} = this.state;
        return (
            <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "flex-end",paddingBottom: 50 }}>


<ModalAddCompany modalVisible={modalVisible} setModalVisible={(visible) => {this.setModalVisible(visible)}} />
        <ReactButton title="Add a company +"
        onPress={() => {
                        this.setState({modalVisible:true})
        }}
        ></ReactButton>
                <Button
                    title="Company"
                    buttonStyle={styles.loginButton}
                    onPress={() => {
                        // this.logIn();
                        // this.props.navigation.navigate("Home");
                        // Alert.alert(this.state.text) 
                        this.setState({modalVisible:true})
                        }} />
                         <Button
                    title="Normal User"
                    buttonStyle={styles.loginButton}
                    onPress={() => {
                        // this.logIn();
                        // this.props.navigation.navigate("Home");
                        // Alert.alert(this.state.text) 
                        console.log(db);
                        }} />

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
        width: width*0.9,
        height: 50,
        backgroundColor: "#3b5998",
        borderRadius: 27,
        // padding: "0 35px 0 35px",
        marginTop: 5,
        marginBottom:5,
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