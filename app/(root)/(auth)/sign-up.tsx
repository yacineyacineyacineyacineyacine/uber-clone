import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import InputField  from "@/components/InputField"

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold sbsolute bottom-5 left-5">Create Your Acount</Text>

        </View>

        <View className="p-5">
          <InputField />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
