import React from "react";
import { View, Text,Image, TextInput, Alert,StyleSheet,Dimensions,Button as ReactButton } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button } from 'react-native-elements';


export default class Login extends React.Component {

    state = {
    }

   

    render() {
        return (
            <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "flex-end",paddingBottom: 50 }}>

        <ReactButton title="Add a company +"
        onPress={() => {
          Alert.alert("working on it");
        }}
        ></ReactButton>
                <Button
                    title="Company"
                    buttonStyle={styles.loginButton}
                    onPress={() => {
                        // this.logIn();
                        this.props.navigation.navigate("Home");
                        // Alert.alert(this.state.text) 
                        }} />
                         <Button
                    title="Normal User"
                    buttonStyle={styles.loginButton}
                    onPress={() => {
                        // this.logIn();
                        this.props.navigation.navigate("Home");
                        // Alert.alert(this.state.text) 
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