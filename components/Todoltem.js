import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckboxUnchecked from '../assets/checkbox-unchecked.svg';
import CheckboxChecked from '../assets/checkbox-checked.svg';
// import DeleteIcon from '../assets/delete.svg';
import DeleteIcon from '../assets/delete.svg';
const Todoltem = () => {
  return (
    <View style={styles.itemContainer}>
      
      <Pressable  
      hitSlop={10}  
      style={
            styles.itemTextChecked
            }>
            <CheckboxUnchecked />
            <CheckboxChecked style={styles.itemCheckboxCheckedIcon}/>

      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>

        코딩하기
      </Text>
      <Pressable
        style={[
            styles.deleButton, 
            styles.deleButtonDone
            ]}
           hitSlop={10}
            >
              <DeleteIcon />
  
      </Pressable>
    </View>
  )
}

export default Todoltem

const styles = StyleSheet.create({})