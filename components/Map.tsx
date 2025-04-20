import { View, Text, Platform } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { useLocationStore, useDriverLocation } from "@/store";
import { calculateRegion } from "@/lib/map";

const Map = () => {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const { selectedDriver, setDrivers } = useDriverLocation();
  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ width: "100%", height: "100%" }}
      tintColor="black"
      mapType={Platform.OS === "ios" ? "mutedStandard" : "standard"}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    />
  );
};

export default Map;
