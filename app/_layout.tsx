import { Stack } from "expo-router";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { router } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => {
            return <View style={{ height: 30 }} />;
          },
        }}
      />

      <Stack.Screen
        name="Screens/ScreenChat"
        options={{
          header: () => {
            return <View style={{ height: 30 }} />;
          },
        }}
      />

      <Stack.Screen
        name="Modals/ModalHistorialChat"
        options={{
          presentation: "transparentModal",
          animation: "ios_from_left",
          header: () => {
            return <View />;
          },
        }}
      />

      <Stack.Screen
        name="Modals/ModalImage"
        options={{
          header: () => {
            return <View />;
          },
          animation: "fade_from_bottom",
          presentation: "transparentModal",
        }}
      />

      <Stack.Screen
        name="Screens/ScreenGetChatPlus"
        options={{
          header: () => {
            return <View />;
          },
        }}
      />

      <Stack.Screen
        name="Screens/ScreenConfiguracion"
        options={{
          header: () => {
            return (
              <View
                style={{
                  paddingTop: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => router.navigate("Screens/ScreenChat")}
                >
                  <Image
                    style={{ height: 50, width: 50, tintColor: "black" }}
                    source={require("../Icons/IconBack.png")}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  Configuracion
                </Text>
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}
