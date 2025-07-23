import { router } from "expo-router";
import {Image, Pressable,ScrollView,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ModalHistorialChat() {
  return (
    <SafeAreaProvider>
      <Pressable
        onPress={() => router.navigate("Screens/ScreenChat")}
        style={{
          opacity: 0.2,
          filter: "blur(30px)",
          height: "100%",
          width: "100%",
          backgroundColor: "gray",
        }}
      ></Pressable>
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "80%",
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 35,
              paddingHorizontal: 5,
              paddingVertical: 5,
              backgroundColor: "#E5E5E5",
            }}
          >
            <Image
              style={{ height: 30, width: 30, tintColor: "gray" }}
              source={require("../../Icons/IconSearch.png")}
            />
            <TextInput style={{ width: "75%" }} placeholder="Buscar" />
          </View>
          <TouchableOpacity>
            <Image
              style={{ height: 30, width: 30, tintColor: "black" }}
              source={require("../../Icons/IconEdit.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: 10 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 28, width: 28, tintColor: "gray" }}
              source={require("../../Icons/IconEdit.png")}
            />
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Nuevo chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 28, width: 28, tintColor: "gray" }}
              source={require("../../Icons/IconImage.png")}
            />
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Biblioteca</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 28, width: 28, tintColor: "gray" }}
              source={require("../../Icons/message-circle.png")}
            />
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Chats</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ }}></ScrollView>

        <TouchableOpacity
        onPress={()=>router.navigate('Screens/ScreenConfiguracion')}
          style={{
            paddingBottom: 30,
            paddingTop:10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            style={{ height: 40, width: 40, objectFit: "cover" ,borderRadius:80}}
            source={require("../../Image/KAKASHI.jpg")}
          />
          <Text style={{fontSize:18,fontWeight:'500'}}>Urpirio Junior</Text>
          <Image
            style={{ height: 20, width: 30,tintColor:'gray' }}
            source={require("../../Icons/IconArrowR.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
