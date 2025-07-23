import { TouchableOpacity, View,Image ,Text, ScrollView} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataGetChatPlus } from "../../Data/DataGetChatPlus";
import { router } from "expo-router";

export default function ScreenGetChatPlus() {
  return (
    <SafeAreaProvider>
        <View style={{paddingTop:20}}>
            <TouchableOpacity onPress={()=>router.navigate('Screens/ScreenChat')}>
                <Image style={{height:50,width:50,tintColor:'black'}} source={require('../../Icons/IconBack.png')}/>
            </TouchableOpacity>
        </View>
        
        <ScrollView style={{paddingHorizontal:20,paddingTop:10}}>
            <View>
                <Text style={{fontSize:48,fontWeight:'500'}}>ChatGPT Plus</Text>
                <Text style={{paddingHorizontal:5,fontSize:18,color:'gray',fontWeight:'400'}}>Obtén acceso a nuestro modelo más potente y a características avanzadas</Text>
            </View>
            {DataGetChatPlus.map(D=>{
                return <View style={{flexDirection:'row',alignItems:'center',gap:10,marginVertical:10}}>
                <Image style={{height:25,width:25,tintColor:'black'}} source={require('../../Icons/check-circle.png')}/>
                <Text style={{fontSize:18,color:'black',width:'90%',fontWeight:'400'}}>{D.Title}</Text>
            </View>
            })}
        </ScrollView>
        <View style={{alignItems:'center',gap:10,paddingVertical:5}}>
            <TouchableOpacity>
                <Text style={{fontSize:16,}}>Restablecer membresia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:30,backgroundColor:'#0D0D0D',width:'80%',paddingVertical:16}}>
                <Text style={{color:'white',textAlign:'center',fontSize:18}}>Mejorar el plan a Plus</Text>
            </TouchableOpacity>
            <View style={{paddingBottom:15,paddingTop:5,paddingHorizontal:20}}>
                <Text style={{textAlign:'center'}}>Renovaciones automaticas por US$19.99/mes hasta la cancelacion</Text>
            </View>
        </View>
    </SafeAreaProvider>
  )
}
