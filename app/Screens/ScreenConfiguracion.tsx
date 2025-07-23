import { View, Text, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenConfiguracion() {
  return (
    <SafeAreaProvider>
      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image
          style={{
            height: 50,
            width: 50,
            objectFit: "cover",
            borderRadius: 80,
          }}
          source={require("../../Image/KAKASHI.jpg")}
        />
        <Text style={{fontSize:20,fontWeight:'600'}}>Urpirio Junior</Text>
      </View>
      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconEmail.png')}/>
        <View style={{gap:1}}>
          <Text style={{fontWeight:'400',fontSize:18}}>Correo electrónico</Text>
          <Text style={{color:'gray'}}>urpiriojunior@gmail.com</Text>
        </View>
      </View>


      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}> 
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconPhone.png')}/>
        <View style={{gap:1}}>
          <Text style={{fontWeight:'400',fontSize:18}}>Número de teléfono</Text>
          <Text style={{color:'gray'}}>+18493408800</Text>
        </View>
      </View>


      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconMoon.png')}/>          
        <Text style={{fontWeight:'400',fontSize:18}}> Mejorar el plan a Plus</Text>
      </View>


      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconUser.png')}/>
        <Text style={{fontWeight:'400',fontSize:18}}>Personalización</Text>
      </View>


      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconDataBase.png')}/>
        <Text style={{fontWeight:'400',fontSize:18}}>Controles de datos</Text>
      </View>


      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconWaveform.png')}/>
        <Text style={{fontWeight:'400',fontSize:18}}>Voz</Text>
      </View>


      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconSeguridad.png')}/>
        <Text style={{fontWeight:'400',fontSize:18}}> Seguridad</Text>
      </View>



      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
          }} source={require('../../Icons/IconInformacion.png')}/>
        <Text style={{fontWeight:'400',fontSize:18}}>Acerca de</Text>
      </View>



      <View style={{paddingHorizontal:8,alignItems:'center',flexDirection:'row',gap:10,paddingVertical:10}}>
        <Image style={{
            height: 30,
            width: 30,
            objectFit: "cover",
            borderRadius: 80,
            tintColor:'red',
            // transform:''
          }} source={require('../../Icons/IconCerrarSesion.png')}/>
        <Text style={{fontWeight:'400',fontSize:18,color:'red'}}>Cerrar sesión</Text>
      </View>


    </SafeAreaProvider>
  );
}
