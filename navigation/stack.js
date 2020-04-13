import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts'
import Post from '../screens/Post'
import { Text ,StyleSheet } from 'react-native'
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

export default function () {
    return (
            <StackNavigator screenOptions={()=>({
                headerTitleAlign: ()=>'center',
            })}>
            <StackScreen name="Posts" component={Posts}/>
            <StackScreen name="Post" component={Post}
            options={( { navigation } ) => ({
                headerLeft: () => <Text  style={styles.left} onPress={() => navigation.goBack()}> Back</Text>
            })}
        
            />
            </StackNavigator>
    
    );
  }

  const styles = StyleSheet.create({
      left: {
          marginLeft: 10, 
      }
  });
  
