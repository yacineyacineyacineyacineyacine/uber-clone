import { useUser } from "@clerk/clerk-expo";
import { Text, View, FlatList } from "react-native";
import { recentRides } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";

export default function Home() {
  const { user } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
}
