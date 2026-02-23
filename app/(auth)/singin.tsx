import { View, Text, Button  } from 'react-native'
import React from 'react' 
import { router } from 'expo-router'

const singin = () => {
  return (
    <View>
      <Text>singin</Text>
      <Button title="sing up" onPress={()=> router.push("/singup")}></Button>
    </View>
  )
}

export default singin