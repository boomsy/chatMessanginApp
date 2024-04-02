import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import {COLORS, images, FONTS, SIZES} from '../constants'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/Button'

const Intro = () => {
  return (
    <ImageBackground
     source={images.background} 
     style={tw.style('flex-1')} >

      <StatusBar hidden />


      <View  style={tw.style('flex-3 p-4 mt-5.5')}  >

        <View style={tw.style(styles.cicleViewContainer)}  >
            <View style={tw.style(styles.circleView, {
               borderBottomStartRadius: 0, 
               backgroundColor: COLORS.secondary})}>

            </View>

            <View style={tw.style(styles.circleView)}>

            </View>
        </View>

        <View style={tw.style(styles.cicleViewContainer)}  >
            <View style={tw.style(styles.circleView)}>

            </View>

            <View style={tw.style(styles.circleView)}>

            </View>
        </View>

      </View>


      <View  style={tw.style('flex-2 rounded-t-6 items-center p-4', {backgroundColor: COLORS.white})}  >

        <Text style={tw.style(' mx-5 my-3 text-center ', {...styles.bottomTitle})}  >
          Enjoy the new experience of chatting with global friends
        </Text> 


        <Text style={tw.style('  text-center ')}  >
          Connect people arround the world for free
        </Text> 


        <Button title="Get started" 
          style={{
            marginVertical: 24,
            width: SIZES.width - 64
          }}
        />


        <View style={tw.style(' flex-row items-center mt-4 ')} >
          <Text style={tw.style(' text-xs text-gray-500 mr-1 ', {fontFamily: "medium"})}  >
            Power by 
          </Text> 
          <Text style={tw.style({...FONTS.h3, color: COLORS.secondary, fontFamily: 'semiBold'})}  >
            USSAGE
          </Text> 
        </View>


      </View>



    </ImageBackground>
  )
}


const styles = StyleSheet.create({

  bottomTitle: {
    fontSize : 24,
    fontFamily: "bold",
    color: COLORS.black ,
  },

  cicleViewContainer: {
    width: SIZES.width -32,
    justifyContent : "space-between",
    flexDirection: "row"
  }, 

  circleView: {
    width: (SIZES.width -32) / 2 - 8,
    height: (SIZES.width -32) / 2 - 8,
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32
  }

})

export default Intro