import React, { useContext  } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginControl  from '../components/LoginControl';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function HomeScreen({ navigation }) { 
    const [user, setUser] = useContext(AuthContext);   

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex : 1 , alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="md-home" size={50} color="#848484" />
                <Text>Home Screen</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('BmiScreen') } >               
                    <Text style={{ padding : 10 }}>Go to BMI Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('SecondBottomTab') } >                    
                    <Text style={{ padding : 10 }}>Go to Second BottomTab</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('TodoTab') } >                    
                    <Text style={{ padding : 10 }}>To-do List</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('MapTab') } >                    
                    <Text style={{ padding : 10 }}>Location and Map</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('UploadFileScreen') } >                    
                    <Text style={{ padding : 10 }}>Upload File</Text>
                </TouchableOpacity>
                <LoginControl isLoggedIn={user} navigation={navigation} />
            </View>  
            <View>                
                <Button  
                    onPress={() => navigation.navigate('BmiScreen')}
                    title="Next"
                    color=""
                    />
            </View>                      
        </View>
    );
}
