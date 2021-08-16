import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card } from "react-native-paper";

const Home = () => {
  const items = [
    { id: 1, name: "mukesh", position: "web dev" },
    { id: 2, name: "suresh", position: "android dev" },
    { id: 3, name: "ramesh", position: "ML expert" },
    { id: 4, name: "hitesh", position: "web dev" },
  ];

  const renderList = (item) => {
    return (
      <Card style={styles.maycard}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{
              uri: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
      {renderList}
    </View>
  );
};

const styles = StyleSheet.create({
  maycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
});

export default Home;
