import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenChat() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={()=>router.navigate('Modals/ModalHistorialChat')}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../Icons/menu-left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>router.navigate('Screens/ScreenGetChatPlus')}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#F1F1FB",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            gap: 10,
            backgroundColor: "#F1F1FB",
          }}
        >
          <Text style={{ color: "#4A47B2" }}>Obtener Plus</Text>
          <Image
            style={{ height: 30, width: 30, tintColor: "#4A47B2" }}
            source={require("../../Icons/magic-wand.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../Icons/message-circle.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: "80%"}}></View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          paddingVertical: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
        onPress={()=>router.navigate('Modals/ModalImage')}
          style={{
            borderRadius: "100%",
            borderWidth: 1,
            borderColor:'#F3F3F3',
            padding: 2,
            backgroundColor: "white",
          }}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../Icons/IconImage.png")}
          />
        </TouchableOpacity>
        
        <View
          style={{
            // borderWidth: 1,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 25,
            alignItems: "center",
            backgroundColor: "#F3F3F3",
          }}
        >
          <TextInput placeholder="Puedes preguntar" style={{ width: "65%" }} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                height: 35,
                width: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 30, width: 30, tintColor: "black" }}
                source={require("../../Icons/microphone.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                borderRadius: "100%",
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Image
                style={{ height: 30, width: 30, tintColor: "black" }}
                source={require("../../Icons/headphone-alt-2.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
