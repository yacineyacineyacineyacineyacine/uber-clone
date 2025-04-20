import { View, Text, Platform } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useLocationStore, useDriverLocation } from "@/store";
import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import { drivers, icons } from "@/constants";
import { useEffect, useState } from "react";
import { MarkerData } from "@/types/type";

const Map = () => {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const { selectedDriver, setDrivers } = useDriverLocation();
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  useEffect(() => {
    if (Array.isArray(drivers)) {
      if (!userLatitude || !userLongitude) return;
      const newMarquers = generateMarkersFromData({
        data: drivers,
        userLatitude,
        userLongitude,
      });
      setMarkers(newMarquers);
    }
  }, [drivers]);

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ width: "100%", height: "100%" }}
      tintColor="black"
      mapType={Platform.OS === "ios" ? "mutedStandard" : "standard"}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          image={
            selectedDriver === marker.id ? icons.selectedMarker : icons.marker
          }
        />
      ))}
    </MapView>
  );
};

export default Map;
