import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todolitem = () => {
  return (
    <View style={styles.itemContainer}>
      
      <Pressable  hitSlop={10}  
      style={[
            styles.itemTextChecked, 
            ]}>

      </Pressable>
      <text style={[styles.itemText, styles.itemTextChecked]}>

        test
      </text>
      <Pressable
        style={[
            styles.deleButton, 
            styles.deleButtonDone
            ]}
            hitSlop={10}
            >
      </Pressable>
    </View>
  )
}

export default Todolitem

const styles = StyleSheet.create({})