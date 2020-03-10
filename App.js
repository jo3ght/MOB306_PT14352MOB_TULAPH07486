import React, {useState,useEffect} from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Index from "./List";
import { registerRootComponent } from "expo";
function App() {
  // const API = "https://5e63622af48bc60014536b58.mockapi.io/api/books";

  // //call API from server JSON
  // const fetchBooks = () => {
  //   return fetch(
  //     API,
  //     {}
  //     ).then((response) =>response.json())
  //     .then((responseJson) => setBook(responseJson))
  //     .catch((error) => console.log(error));
  // };
  
  // fetchBooks();

  // const [book, setBook] = useState([]);

  return (
    <View style={styles.bg}>
      <ScrollView>
        <View>
          <Index />
        </View>
      </ScrollView>
    </View>
  );
}

export default registerRootComponent(App);

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#f2f2f2"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

