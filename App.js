import React, {useState,useEffect} from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Index from "./List";
import { registerRootComponent } from "expo";
function App() {

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

