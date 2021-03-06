import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';
import Item from '../components/Item';

export default function NetworkScreen({ navigation }) {   
    const [movies , setMovies] = useState([]);  
    const getMovies = async () => {
        try{
            let promise = await fetch('https://www.csbootstrap.com/api/movies');
            let data = await promise.json();
            console.log("Data : " , data);
            //setMovies(data.movies);
            setMovies(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
        //const clear = () => {
            //WRITE CODE HERE
        
    };
    
     
    return (
        <View style={{ 
            flex : 1, 
            flexDirection : 'column', 
            justifyContent : 'flex-end', 
            paddingHorizontal : 20 ,
            paddingTop : 40 ,
            }}
        >
            <Text style={{ fontSize : 20 }}>Today Movies</Text>

            <FlatList 
                data={movies}
                renderItem={({item}) => {                        
                        return (
                            //<Text>{item.title} / {item.releaseYear}</Text>  
                            <Item
                                title={item.title}
                                releaseYear={item.releaseYear}
                                image={item.image}  
                            />                          
                        );
                    }
                }
                keyExtractor={item => item.id}
                />
            
            
            <Button title="Display Movies" onPress={getMovies} />
            
            <Button 
                title="Create New Movies" 
                onPress={() => navigation.navigate('NetworkCreateScreen')} 
                />
            <View>                
                <Button  
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="Next"
                    color=""
                    />
            </View>
        </View>
    );
}
