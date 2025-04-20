import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => (
  <MapView
    provider={PROVIDER_DEFAULT}
    style={{ width: "100%", height: "100%" }}
  >
    {/* <Text className="">Map</Text> */}
  </MapView>
);

export default Map;
