import React from "react";
import { View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import TabIcons from "./TabIcons";

const CustomTabBar = ({ state, navigation }) => {
  let icons_name = ["home", "search", "tv", "user"];
  const color_tab = ["#181822", "#1a1a24", "#202124", "#202124"];

  return (
    <LinearGradient
      colors={["#181818", "#0F0F0F", "#0C0C0C"]}
      locations={[0.2, 0.6, 0.3]}
      style={styles.container}
    >
      <View style={styles.tabs}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TabIcons
              isFocused={isFocused}
              route_name={route.name}
              icon={icons_name[index]}
              navigation={navigation}
              key={index}
              color_tab={color_tab[index]}
            />
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 50,
    bottom: 0,
    right: 0,
    left: 0,
  },
  tabs: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 38,
  },
});
