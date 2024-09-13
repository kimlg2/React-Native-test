import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const MainScreen = () => {
  return (
   <SafeAreaView>
    <StatusBar barStyle={'defailt'} />
      <Text>app 소개</Text>
      <View>
        <Text>할 일</Text>
      </View>
      <View />
      <View>
        <Text>완료 된일</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})