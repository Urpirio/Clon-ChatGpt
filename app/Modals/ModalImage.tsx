import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pressable, Text, TouchableOpacity, View,Image } from "react-native";
import { router } from "expo-router";

export default function ModalImage() {
  return (
    <SafeAreaProvider style={{justifyContent:'flex-end'}}>
        <Pressable 
        onPress={()=>router.navigate('Screens/ScreenChat')}
        style={{opacity:0.6,backgroundColor:'black',height:'100%',width:'100%'}}>

        </Pressable>
        <View style={{width:'100%',height:'40%',borderWidth:1,position:'absolute',borderTopRightRadius:30,borderTopLeftRadius:30,backgroundColor:'white',padding:20,borderColor:'#F5F5F5'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,paddingBottom:20,borderBottomColor:'#F5F5F5'}}>
                <TouchableOpacity style={{backgroundColor:'#F3F3F3',alignItems:'center',padding:10,width:'30%',borderRadius:10}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/IconCamera.png')}/>
                    <Text>Camara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#F3F3F3',alignItems:'center',padding:10,width:'30%',borderRadius:10}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/IconImage.png')}/>
                    <Text>Camara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#F3F3F3',alignItems:'center',padding:10,width:'30%',borderRadius:10}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/folder-open.png')}/>
                    <Text>Camara</Text>
                </TouchableOpacity>
            </View>
            <View style={{gap:10,paddingTop:10}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/light-bulb-on.png')}/>
                    <Text style={{fontSize:16}}>Think longer</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/rocket.png')}/>
                    <Text style={{fontSize:16}}>Investiga a fondo</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/IconSetting.png')}/>
                    <Text style={{fontSize:16}}>Crear imagen</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <Image style={{height:30,width:30,tintColor:'black'}} source={require('../../Icons/globe-alt.png')}/>
                    <Text style={{fontSize:16}}>Busca en la web</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaProvider>
  )
}
