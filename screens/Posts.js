import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList, Image} from "react-native";
import axios from 'axios';

const Posts = ({navigation})=> {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
            setPosts(result.data)
        }).catch((err) =>{
            console.log(err)
        })

    })

    return(
        
            <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                <TouchableOpacity onPress={() => navigation.navigate('Post', { id: item.id})}>
                     <View>
                        <Image
                            source={{uri: "https://source.unsplash.com/random"}}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text numberOfLines={2}>{item.body}</Text>
                     </View>

                </TouchableOpacity>
                }
                
            />
            </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:15
    },
    image: {
        width:250,
        height: 250,
        alignSelf: 'center',
        marginTop: 40
        },
    title: {
        fontWeight: 'bold',
        fontSize:18,
        marginTop: 5,
        marginBottom:1,

    }

  });
  

export default Posts;

