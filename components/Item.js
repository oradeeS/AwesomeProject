import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, props } from "react-native";

export default function Item(props) { 
   return (      
    <View style={{ 
        flex : 1,
        flexDirection : "row",
        paddingHorizontal : 20 ,
        paddingTop : 8 , 
        }}>
    <Image 
            source={{uri: props.image}}
            style={{width: 60, height: 60}} 
            />
        <View style={{ 
            flex : 1, 
            flexDirection : 'column', 
            paddingHorizontal : 20 ,
            }}>
            <Text style={{ fontSize : 20 }}>Title :{props.title} </Text>        
            <Text style={{ fontSize : 15 }}>ReleaseYear :{props.releaseYear}</Text>
        </View>
    </View>
   ); 
}
