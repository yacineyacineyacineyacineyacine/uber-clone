import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"

export default function HomeScreen() {


  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white" >
      <Text className="text-red-500">hello world</Text>
      <StatusBar style="auto"/>

    </SafeAreaView>
  );
}


