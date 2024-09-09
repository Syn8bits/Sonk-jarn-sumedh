import React from "react";
import { Button, Text, View ,StyleSheet ,Image, SafeAreaView } from "react-native";
import Slider from "./Future/Slider";
const closetpic = require('./assetspic/closet eiei.png')
function MainScreen({navigation}) {
    return(
        <View style = {{backgroundColor:'#ffeda6' , flex:1}}>
            <Image source={closetpic} style={[styles.pic,{marginTop:0}]}/>
            <View style={{}}>
                <Slider/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pic:{
        width:400,
        height:350
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainScreen;