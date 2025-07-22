import {Stack} from 'expo-router';
import { View } from 'react-native';

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            header:()=>{
                return <View/>
            }
        }}/>
    </Stack>
  )
}
