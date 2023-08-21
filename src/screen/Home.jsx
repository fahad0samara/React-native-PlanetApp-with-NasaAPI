import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categories, dailyFacts, latestNews, planets } from "../data/data";
import NasaAPI from "../compont/NasaAPI";





const Home = ({ navigation }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const filteredplanets =
    activeCategoryIndex === 0
      ? planets
      : planets.filter((product) => product.categoryId === activeCategoryIndex);

  const handleProductPress = () => {
    // Implement product press logic here
   
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* User Info */}
          <View style={styles.userContainer}>
            <Image
              source={require("../image/4.png")}
              style={styles.userImage}
            />
            <Text style={styles.username}>Hi, Sara</Text>
          </View>
          {/* Icon Buttons */}
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="cart-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Collections Title */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Explore the best{" "}
            <Text style={styles.collectionText}>Collections</Text> for you
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <ScrollView horizontal>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setActiveCategoryIndex(index)}
                style={[
                  styles.categoryButton,
                  activeCategoryIndex === index && styles.activeCategoryButton,
                ]}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    activeCategoryIndex === index && styles.activeCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={250 + 20}
          decelerationRate="fast"
          pagingEnabled
          style={styles.scrollView}
        >
          {filteredplanets.map((planet, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("planet", { planetId: planet.id })
              }
              style={styles.planetContainer}
              key={index}
            >
              <Image source={planet.image} style={styles.planetImage} />
              <View style={styles.planetOverlay}>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="heart-outline" color="white" size={24} />
                </TouchableOpacity>
                <Text style={styles.planetName}>{planet.name}</Text>
                

              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>latest News</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.latestNewsContainer}
          >
            {latestNews.map((item) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("latestNews", {
                    latestNewsId: item.id,
                  })
                }
                key={item.id}
                style={styles.newArrivalItem}
              >
                <Image style={styles.newArrivalImage} source={item.image} />
                <Text style={styles.newArrivalTitle}>{item.title}</Text>
                <Text style={styles.newArrivalContent}>
                  {item.content.substring(0, 80)}...
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <NasaAPI/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginHorizontal: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(43 65 214)",
  },
  collectionText: {
    color: "#333",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeCategoryButton: {
    backgroundColor: "rgb(43 65 214)",
  },
  categoryButtonText: {
    color: "rgb(43 65 214)",
  },
  activeCategoryText: {
    color: "#FFF",
  },
  viewAllButton: {
    paddingVertical: 8,
  },
  viewAllText: {},
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    marginVertical: 8,
    marginHorizontal: 4,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    width: 160,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
  },
  separator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  productBrand: {
    fontSize: 14,
    color: "#777",
  },

  latestNewsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  newArrivalItem: {
    marginRight: 20,
    width: 180,
  },
  newArrivalImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  newArrivalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  newArrivalContent: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },

  dailyFactsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  featuredBrandItem: {
    marginRight: 16,
    alignItems: "center",
    marginHorizontal: 7,
  },
  featuredBrandImage: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    borderRadius: 8,
  },
  featuredBrandName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
  },

  scrollView: {
    marginVertical: 20,
  },
  planetContainer: {
    width: 270,
    height: 300,
    overflow: "hidden",
    borderRadius: 10,
    marginRight: 20,
  },
  planetImage: {
    width: "100%",
    height: "100%",
  },
  planetOverlay: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",

    justifyContent: "space-between",
    padding: 10,
  },
  iconButton: {
    alignSelf: "flex-end",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  planetName: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  planetDescription: {
    fontSize: 14,
    color: "white",
    marginLeft: 10,
  },
  planetDetail: {
    fontSize: 12,
    color: "white",
    marginLeft: 10,
  },
});

export default Home;
