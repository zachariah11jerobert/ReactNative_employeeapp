import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card} from 'react-native-paper';

const Home=()=>{
    return(
        <Card style={styles.maycard}>
            <View style={styles.cardView}>
                <Image
                style={{width:60,height:60,borderRadius:30}}
                source={{uri:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}}
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>Hello from Home</Text>
                    <Text style={styles.text}>Web developer</Text>
                </View>
            </View>
        </Card>
    )
}

const styles=StyleSheet.create({
    maycard:{
        margin:5,
    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:18,
    }
})

export default Home;