import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { planets } from "../data/data";

const Planet = ({ route, navigation }) => {
  const { planetId } = route.params;
  const selectedPlanet = planets.find((planet) => planet.id === planetId);

  const goBack = () => {
    navigation.goBack();
  };

  const iconMap = {
    diameter: "planet-outline",
    mass: "barbell-outline",
    distanceFromSun: "sunny-outline",
    moons: "moon-outline",
    atmosphericComposition: "partly-sunny-outline",
    averageTemperature: "thermometer-outline",
    rotationPeriod: "reload-outline",
    orbitalPeriod: "repeat-outline",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={selectedPlanet.image} style={styles.planetImage} />
      <Text style={styles.planetName}>{selectedPlanet.name}</Text>
      <Text style={styles.planetDescription}>{selectedPlanet.description}</Text>

      <View style={styles.detailsContainer}>
        {Object.entries(selectedPlanet).map(
          ([key, value]) =>
            key !== "id" &&
            key !== "name" &&
            key !== "description" && (
              <View style={styles.detailItem} key={key}>
                <Ionicons
                  name={iconMap[key]}
                  size={24}
                  color="dodgerblue"
                  style={styles.detailIcon}
                />
                <Text style={styles.detailLabel}>{key}</Text>
                <Text style={styles.detailValue}>{value}</Text>
              </View>
            )
        )}
      </View>

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: "center",
  },
  planetImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  planetName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    width: "100%",
  },
  planetDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
    width: "100%",
  },
  detailsContainer: {
    width: windowWidth - 40,
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailIcon: {
    marginRight: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: "gray",
    flex: 1,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 18,
    marginLeft: 10,
    color: "white",
  },
});

export default Planet;
