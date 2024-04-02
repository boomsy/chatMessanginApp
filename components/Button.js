import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES , FONTS } from '../constants'
import tw from 'twrnc'

const Button = (props) => {
  return (
    <TouchableOpacity style={tw.style('items-center justify-center', { ...styles.btn, ...props.style})} >
      <Text style={tw.style({...FONTS.body2, fontFamily: "medium", color: COLORS.white })}>
            {props.title}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
      btn: {
        paddingHorizontal : SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 32
      }
})

export default Button