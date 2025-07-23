import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#303030" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "65%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 30, fontWeight: "600" }}>
          ChatGpt
        </Text>
        <View
          style={{
            borderRadius: "100%",
            backgroundColor: "white",
            height: 20,
            width: 20,
          }}
        ></View>
      </View>

      <View
        style={{
          height: "35%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#212121",
          padding: 20,
          gap:10,
        }}
      >
        <View
          style={{
            gap: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#4d4d4dff",
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "white",
              borderRadius: 30,
              flexDirection: "row",
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../Icons/IconGoogleBack.png")}
            />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Continuar con Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              borderWidth: 1,
              backgroundColor: "#303030",
              paddingVertical: 12,
              borderRadius: 30,
              borderColor: "#303030",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Suscribete</Text>
          </TouchableOpacity>
        </View>


        
        <TouchableOpacity
        onPress={()=>router.navigate('Screens/ScreenChat')}
          style={{
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "#212121",
            paddingVertical: 12,
            borderRadius: 30,
            borderColor: "#303030",
          }}
        >
          <Text style={{color:'white',fontSize:18}}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
