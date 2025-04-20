import { View, Text, Platform } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  const region = {};

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ width: "100%", height: "100%" }}
      tintColor="black"
      mapType={Platform.OS === "ios" ? "mutedStandard" : "standard"}
      // initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    />
  );
};

export default Map;
