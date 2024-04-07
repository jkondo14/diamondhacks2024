import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { markers } from "../assets/markers";
import SideMenu from "../components/sidemenu.component";

export default function UCSDMaps() {
  const mapRef = useRef(null);


  const zoomToCoordinate = (coordinate, zoomLevel = 0.001) => {
    const region = {
      ...coordinate,
      latitudeDelta: zoomLevel,
      longitudeDelta: zoomLevel,
    };
    mapRef.current.animateToRegion(region, 500);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 32.88118132880787,
          longitude: -117.23442488535535,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{ height: "100%", width: "100%" }}
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
      <View
        style={{
          position: "absolute",
          top: 60,
          backgroundColor: "rgba(255, 2550, 255, 0.7)",
          borderRadius: 10,
        }}
      >
        <Pressable
          onPress={() =>
            zoomToCoordinate(
              {
                latitude: 32.88118132880787,
                longitude: -117.23442488535535,
              },
              0.05
            )
          }
        >
          <Text style={styles.title}>Interactive Map</Text>
        </Pressable>
      </View>

      <View
        style={{
          position: "absolute",
          top: 70,
          left: 10,
        }}
      >
        <SideMenu zoom={zoomToCoordinate} />
      </View>
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 30,
    fontWeight: "bold",
  },
  calloutdesc: {
    flexDirection: "column",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
});