import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import axios from 'axios';

const Post = ({route: { params: { id } } })=> {
    const [post, setPost] = useState({})
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result) => {
        setPost(result.data)
    }).catch((err) =>{
        console.log(err)
    })
})

    return(
            <View style={styles.container}>
                <Text style={styles.title}>{post.title}</Text>
                <Image
                    source={{uri: "https://source.unsplash.com/random"}}
                    style={styles.image}
                />
                <Text>{post.body}</Text>
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
        width:300,
        height: 300,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10
        },
    title: {
        fontWeight: 'bold',
        fontSize:30,
        marginTop: 5,
        marginBottom:1,

    }

  });
  

export default Post;

