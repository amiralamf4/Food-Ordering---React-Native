import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const singup = () => {
  return (
    <View>
      <Text>singup</Text>
            <Button title="sing in" onPress={()=> router.push("/singin")}></Button>
    </View>
  )
}

export default singup