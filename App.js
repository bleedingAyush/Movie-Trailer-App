import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./components/navigation/AuthStack";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import TrailerScreen from "./screens/Movie/TrailerScreen";
import firebase from "firebase";

function App() {
  const firebaseConfig = {
    // Your firebase web app config
  };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  let [fontsLoaded] = useFonts({
    Medium: require("./assets/Fonts/Poppins-Medium.ttf"),
    BoldPops: require("./assets/Fonts/Poppins-Bold.ttf"),
    BoldItalic: require("./assets/Fonts/Poppins-BoldItalic.ttf"),
    NetflixFont: require("./assets/Fonts/BebasNeue.otf"),
    SemiBold: require("./assets/Fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const TrailerScreenStack = createStackNavigator();
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <TrailerScreenStack.Navigator screenOptions={{ headerShown: false }}>
          <TrailerScreenStack.Screen name="AuthStack" component={AuthStack} />
          <TrailerScreenStack.Screen
            name="TrailerScreen"
            component={TrailerScreen}
          />
        </TrailerScreenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#232323",
    alignItems: "center",
    justifyContent: "center",
  },
});
