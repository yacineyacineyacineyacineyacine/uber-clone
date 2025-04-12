import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { View, Image } from "react-native";

const TabIcon = ({ focused, source }) => (
  <View>
    <View className="bg-black">
      <Image source={source} />
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
