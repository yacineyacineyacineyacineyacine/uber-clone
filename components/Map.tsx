import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => (
  <MapView provider={PROVIDER_DEFAULT} className="w-full h-full rounded-2xl">
    <Text className="">Map</Text>
  </MapView>
);

export default Map;
