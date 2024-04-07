import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { markers } from "../assets/markers.jsx";

import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const headerHeight = 280; // Example header height
const scrollViewHeight = screenHeight - headerHeight;

const SideMenu = ({ zoom }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleMenu} style={styles.menuButton}>
        <Image
          style={{ height: 45, width: 45 }}
          source={
            isOpen
              ? require("../assets/x-icon.png")
              : require("../assets/menu-icon.png")
          }
        />
      </Pressable>
      {isOpen && (
        // <View style={{ height: scrollViewHeight }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.menu}>
          {markers.map((marker, index) => (
            <Pressable
              onPress={() => zoom(marker.latlng)}
              style={styles.menuItem}
            >
              <Text>{marker.title}</Text>
            </Pressable>
          ))}
        </ScrollView>
        // </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    padding: 5,
    // backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  menu: {
    height: scrollViewHeight,

    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: "rgba(	248, 236, 244, 0.5)",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 150,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default SideMenu;
