import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants'
import tw from 'twrnc'

const SocialButton = ({title, icon, onPress}) => {
      return (
            <TouchableOpacity 
             onPress={onPress}
             style={styles.container}>

                  <Image  source={icon}
                     resizeMode='contain'
                     style={tw.style('h-6 w-6 mr-8')} 
                  />

                  <Text style={tw.style('text-sm pl-5', { fontFamily: "semiBold", color: COLORS.gray })}> 
                        {title} 
                  </Text>

            </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
      container : {
            width: SIZES.width -32,
            height: 54,
            alignItems: 'center',
            paddingHorizontal: 22,
            borderRadius: 16,
            borderColor: "gray",
            borderWidth: 1,
            flexDirection: "row",
            marginTop: 12,
      },

      title:{
            fontSize: 14,
            fontFamily: "semiBold",
            color: COLORS.black
      }
})

export default SocialButton;
