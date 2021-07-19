import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            TitleText: "Story Title",
            AuthorText: "Name of the Aurthor",
            StoryText: "Write your story here"
        }
    }
    render(){
        return(
            <TouchableOpacity style = {{borderWidth : 3, padding : 5, margin : 30, justifyContent : 'center', alignItems : 'center',alignSelf : 'center', height : 50, width : '62%', borderRadius : 100, backgroundColor : 'red'}}>
                      <Text style = {{fontFamily : 'Comic Sans MS', fontSize : 20, fontWeight : 'bold', color : 'white'}}>
                      Submit
                      </Text>
                      </TouchableOpacity>
        )
    }
}