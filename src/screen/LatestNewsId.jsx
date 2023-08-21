import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { latestNews } from "../data/data";

const LatestNewsId = ({ route, navigation }) => {
  const { latestNewsId } = route.params;
  const selectedLatestNews = latestNews.find(
    (news) => news.id === latestNewsId
  );

  const goBack = () => {
    navigation.goBack();
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: selectedLatestNews.content,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={selectedLatestNews.image} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{selectedLatestNews.title}</Text>
      <Text style={styles.newsDate}>{selectedLatestNews.date}</Text>

      <View style={styles.newsContentContainer}>
        <Text style={styles.newsContent}>{selectedLatestNews.content}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.actionButton, isLiked && styles.likedButton]}
          onPress={handleLike}
        >
          <Ionicons
            name={isLiked ? "thumbs-up" : "thumbs-up-outline"}
            size={24}
            color={isLiked ? "blue" : "black"}
          />
          <Text
            style={[styles.actionButtonText, isLiked && styles.likedButtonText]}
          >
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="black" />
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    marginTop:20

  },
  newsTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  newsDate: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  newsContentContainer: {
    alignItems: "center",
  },
  newsContent: {
    fontSize: 18,
    lineHeight: 28,
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "lightgray",
    marginHorizontal: 10,
  },
  likedButton: {
    backgroundColor: "lightblue",
  },
  actionButtonText: {
    fontSize: 18,
    marginLeft: 5,
  },
  likedButtonText: {
    color: "blue",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 18,
    marginLeft: 10,
    color: "white",
  },
});

export default LatestNewsId;
