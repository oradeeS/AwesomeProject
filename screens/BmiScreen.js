import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function BmiScreen({ navigation }) {

    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [thisBMI ,setDescription] = useState();

    console.log("STATE : ", weight, height, bmi, thisBMI);

    const compute = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));

        let Description = "";
            if (output<18.5)
                Description ="Underweight";
            else if (output>=18.5 && output<=24.99)
                Description ="Normal";
            else if (output>=25 && output<=29.99)
                Description ="Overweight";
            else if (output>=30 && output<=39.99)
                Description ="Obese";
            else if (output>=40)
                Description ="Extremely Obese";
            setDescription(Description.toString());
    };
   
    return (
    <View style={{ 
        flex : 1, 
        flexDirection : 'column', 
        justifyContent : 'center', 
        paddingHorizontal : 20 ,
        }}>

        <Text style={{ fontSize : 30 }}>Weight (kgs) : </Text>
        <TextInput 
            placeholder="enter your weight ..."            
            keyboardType="numeric"
            style={{ marginBottom : 20 }}
            value={weight}
            onChangeText={ (text) => setWeight(text) } 
            />

        <Text style={{ fontSize : 30 }}>Height (cm) : </Text>
        <TextInput 
            placeholder="enter your height ..."
            keyboardType="numeric"
            style={{ marginBottom : 20 }}
            value={height}
            onChangeText={ (text) => setHeight(text) }
            />

        <Text style={{ fontSize : 40 }}>BMI : {bmi}</Text>
        <Text style={{ fontSize : 40 }}> {thisBMI}</Text>
        <Button title="Calculate" onPress={compute}  />

        <View>                
                <Button  
                    onPress={() => navigation.navigate('NetworkScreen')}
                    title="Next"
                    color=""
                    />
            </View>
    </View>            
    
    );
}
