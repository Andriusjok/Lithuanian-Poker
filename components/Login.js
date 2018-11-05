
import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={-300} style = { styles.container }>
                    <TouchableWithoutFeedback style={styles.container}
                                              onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                        style={styles.logo}
                                       source={require('../images/logo.jpg')}>
                                </Image>
                                <Text style={styles.title}>Account Information</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                           placeholder="Enter username"
                                           placeholderTextColor='rgba(255,255,255,0.8)'
                                           returnKeyType='next'
                                           autoCorrect={false}
                                           onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                           placeholder="Enter password"
                                           placeholderTextColor='rgba(255,255,255,0.8)'
                                           returnKeyType='go'
                                           secureTextEntry
                                           autoCorrect={false}
                                           ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        position:'relative',
        width: 256,
        height: 128,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        marginBottom:260,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 150,
        height: 100,
        padding: 10,
        marginBottom: 5,
        // backgroundColor: 'red'
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        marginBottom:5,
    },
    buttonText: {
        textAlign: 'center',
        color :'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
})