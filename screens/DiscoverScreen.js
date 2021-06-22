import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");
// Add discover.json file to your server and provide the url below.
const API_URL = "";

const DiscoverScreen = () => {
  const [movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch_data = async () => {
      await fetch(API_URL)
        .then((response) => {
          return response.json();
        })
        .then((results) => {
          setMovies(results);
          setLoading(false);
        });
    };
    if (movies.length === 0) {
      fetch_data();
    }
  }, [movies]);
  if (Loading === true) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0F0F0F",
        }}
      >
        <LottieView
          source={require("../assets/LottieAnimation/tv.json")}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#181818", "#0F0F0F", "#0C0C0C"]}
      style={styles.container}
    >
      <Animated.FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        ListHeaderComponent={() => <Text style={styles.title}>Categories</Text>}
        ListHeaderComponentStyle={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                marginBottom: 50,
              }}
            />
          );
        }}
        renderItem={({ item, index }) => {
          let poster_url =
            "https://image.tmdb.org/t/p/w440_and_h660_face" + item.movie_poster;
          return (
            <View
              style={{
                paddingTop: 10,
                paddingLeft: 15,
                paddingRight: 15,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: poster_url }}
                  style={styles.movie_images}
                />
              </TouchableOpacity>
              <Text style={styles.movie_title}>{item.movie_title}</Text>
            </View>
          );
        }}
      />
    </LinearGradient>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#fff", fontFamily: "BoldPops", fontSize: 20 },
  movie_title: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Medium",
    fontSize: 16,
    marginTop: 20,
  },
  movie_images: {
    flex: 1,
    height: 200,
    width: 150,
    borderRadius: 20,
  },
});
