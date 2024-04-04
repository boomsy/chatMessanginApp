import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc'
import SocialButton from '../components/SocialButton'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />

      <View style={styles.container} >

        <Image 
          source={images.logo}
          resizeMode='contain'
          style={tw.style('w-16.5 h-16.5 mb-6, -mt-3')}
        />

        <Text  style={tw.style('text-3xl my-2 text-center', { fontFamily: "bold", color: COLORS.black })} > 
           Welcome back! 
        </Text>

        <Text  style={tw.style('text-sm my-1 px-4 text-center', { fontFamily: "regular", color: COLORS.gray })} > 
           Hello there! Continue with and listen the stories from around the world!
        </Text>

        <View style={tw.style('my-8')}>
          <SocialButton 
            title="Continue with Apple"
            icon={icons.appleLogo}
            onPress={() => navigation.navigate("Main")}
          />

          <SocialButton 
            title="Continue with Google"
            icon={icons.google}
            onPress={() => navigation.navigate("Main")}
          />

          <SocialButton 
            title="Continue with Gmail"
            icon={icons.email}
            onPress={() => navigation.navigate("Main")}
          />
        </View>


        <View style={tw`flex-row`}>
          <Text style={tw.style('text-sm pr-1', {fontFamily: "semiBold", color : COLORS.black})} > 
              Alredy have an account? 
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")} >
            <Text style={tw.style('text-sm', {fontFamily: "semiBold", color : COLORS.primary})} > 
                Login in  
            </Text>
          </TouchableOpacity>
        </View>


        <View style={tw.style('items-center bottom-4 absolute', { width: SIZES.width - 32 })}  >
          <Text style={tw.style('px-2 text-xs', { fontFamily: "regular", color : COLORS.black})} > 
             By continuing, your aggree to the termes of use and 
          </Text>
          <TouchableOpacity>
            <Text style={tw.style('mt-1', { fontFamily: "bold", color : COLORS.black})} > 
              Privacy Policy.  
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  area: {
    flex : 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
  },

})

export default Welcome