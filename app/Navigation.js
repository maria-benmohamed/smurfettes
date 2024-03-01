import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../views/HomeView";
import Nextform from "../views/NextForm";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Nextform} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
