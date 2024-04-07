import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { markers } from "../assets/markers";

export default function UCSDMaps() {
  const mapRef = useRef(null);

  const zoomToMarkers = () => {
    const coordinates = markers.map((marker) => marker.latlng);
    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
  };

  // const getRandomHexColor = () => {
  //   return "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color in hexadecimal format
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interactive Map</Text>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 32.88118132880787,
          longitude: -117.23442488535535,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{ height: "80%", width: "100%" }}
        provider={PROVIDER_GOOGLE}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.latlng}>
            <Callout tooltip>
              <View style={styles.calloutdesc}>
                <Text>{marker.title}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop:40,
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  calloutdesc: {
    flexDirection: "column",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
});

