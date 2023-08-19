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
import { categories, featuredBrands, newArrivals, products } from "../data/data";





const Home = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const filteredProducts =
      activeCategoryIndex === 0
        ? products
        : products.filter(
            (product) => product.categoryId === activeCategoryIndex
          );

          


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

        
        {/* Featured Brands */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Brands</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredBrandsContainer}
          >
            {featuredBrands.map((brand) => (
              <TouchableOpacity
                key={brand.id}
                style={styles.featuredBrandItem}
                onPress={() => handleFeaturedBrandPress(brand.id)}
              >
                <Image style={styles.featuredBrandImage} source={brand.image} />
                <Text style={styles.featuredBrandName}>{brand.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        {/* Popular Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.productContainer}
          >
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                onPress={() => handleProductPress(product.id)}
                style={styles.productCard}
              >
                <Image style={styles.productImage} source={product.image} />
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.productInfo}>
                  <Text style={styles.productPrice}>$ {product.price}</Text>
                  <View style={styles.separator} />
                  <Text style={styles.productBrand}>{product.brand}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* New Arrivals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.newArrivalsContainer}
          >
            {newArrivals.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.newArrivalItem}
                onPress={() => handleNewArrivalPress(item.id)}
              >
                <Image style={styles.newArrivalImage} source={item.image} />
                <Text style={styles.newArrivalName}>{item.name}</Text>
                <Text style={styles.newArrivalPrice}>$ {item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

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

  newArrivalsContainer: {
    flexDirection: "row",
    paddingLeft: 16,
    marginTop: 16,
  },
  newArrivalItem: {
    marginRight: 16,
  },
  newArrivalImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
    resizeMode: "cover",
  },
  newArrivalName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
  newArrivalPrice: {
    color: "#777",
    fontSize: 14,
    marginTop: 4,
  },

  featuredBrandsContainer: {
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
});

export default Home;
