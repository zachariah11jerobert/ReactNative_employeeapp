import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper';

const Home=()=>{
    return(
        <Card style={styles.maycard}>
        <Text style={{fontSize:22}}>Hello from Home</Text>
        </Card>
    )
}

const styles=StyleSheet.create({
    maycard:{
        margin:5,
        padding:5
    }
})

export default Home;