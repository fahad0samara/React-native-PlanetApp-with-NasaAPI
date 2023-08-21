
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

const NasaAPI = () => {
  const [apodData, setApodData] = useState(null);
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [neoData, setNeoData] = useState([]);

  useEffect(() => {
    fetchAstronomyPictureOfTheDay();
    fetchMarsRoverPhotos();
    fetchNearEarthObjects();
  }, []);

  const fetchAstronomyPictureOfTheDay = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=j7N46kr9Z3KIEda6NgyDqauAyYnf6zpCf6ySWaXC"
      );
      const data = await response.json();
      setApodData(data);
    } catch (error) {
      console.error("Error fetching APOD:", error);
    }
  };

const fetchMarsRoverPhotos = async () => {
  try {
    const response = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=j7N46kr9Z3KIEda6NgyDqauAyYnf6zpCf6ySWaXC"
    );
    const data = await response.json();
    setRoverPhotos(data.latest_photos);
  } catch (error) {
    console.error("Error fetching Mars Rover photos:", error);
  }
};

  const fetchNearEarthObjects = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=j7N46kr9Z3KIEda6NgyDqauAyYnf6zpCf6ySWaXC"
      );
      const data = await response.json();
      setNeoData(data.near_earth_objects);
    } catch (error) {
      console.error("Error fetching NEOs:", error);
    }
  };

  const renderRoverPhotoItem = ({ item }) => (
    <View style={styles.photoItem}>
      <Image source={{ uri: item.img_src }} style={styles.photoImage} />
      <Text style={styles.photoDate}>{item.earth_date}</Text>
      <TouchableOpacity onPress={() => openNasaLink(item.img_src)}>
        <Text style={styles.nasaLink}>View on NASA's Website</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNeoItem = ({ item }) => (
    <View style={styles.neoItem}>
      <Text style={styles.neoName}>{item.name}</Text>
      <Text style={styles.neoDetail}>
        Estimated Diameter (min):{" "}
        {item.estimated_diameter.kilometers.estimated_diameter_min} km
      </Text>
      <Text style={styles.neoDetail}>
        Is Potentially Hazardous:{" "}
        {item.is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </Text>
      <TouchableOpacity onPress={() => openNasaLink(item.nasa_jpl_url)}>
        <Text style={styles.nasaLink}>View on NASA's Website</Text>
      </TouchableOpacity>
    </View>
  );

  const openNasaLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error opening link:", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Astronomy Picture of the Day</Text>
        {apodData && (
          <>
            <Image source={{ uri: apodData.url }} style={styles.picture} />
            <Text style={styles.title}>{apodData.title}</Text>
            <Text style={styles.explanation}>{apodData.explanation}</Text>
            <TouchableOpacity onPress={() => openNasaLink(apodData.hdurl)}>
              <Text style={styles.nasaLink}>View on NASA's Website</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest Mars Rover Photos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={roverPhotos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderRoverPhotoItem}
            contentContainerStyle={styles.latestNewsContainer}
          />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Near-Earth Objects (NEOs)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={neoData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderNeoItem}
            contentContainerStyle={styles.latestNewsContainer}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  picture: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  explanation: {
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 20,
  },
  nasaLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  photoItem: {
    marginRight: 20,
    width: 180,
  },
  photoImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  photoDate: {
    marginTop: 5,
    color: "gray",
  },
  neoItem: {
    marginRight: 20,
    width: 180,
  },
  neoName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  neoDetail: {
    fontSize: 14,
    color: "gray",
  },
  latestNewsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});

export default NasaAPI;
