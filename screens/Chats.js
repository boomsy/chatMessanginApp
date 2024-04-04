import { View, Text, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS, SIZES, icons } from '../constants'
import { StatusBar } from 'expo-status-bar'
import {Ionicons} from "@expo/vector-icons"
import { messsagesData } from '../data'


const Chats = ({navigation}) => {

  const [search, setSearch] = useState()

  const renderItem = ({item, index}) => {
    <TouchableOpacity 
      key={index}
      onPress={() => navigation.navigate("Chat", {userName: item.fullName})}
      style={[
        (index % 2 !== 0) ? styles.oddBackground  : null
      ]}>

    </TouchableOpacity>
  }


  const renderContent = () => {
    return (
      <View>

        <View style={tw.style('flex-row items-center h-15 my-5.5 px-3 rounded-lg', 
            {backgroundColor : COLORS.white, width : SIZES.width - 32})}>

          <TouchableOpacity>
              <Ionicons 
                name="search-outline"
                size={24}
                color={COLORS.gray}
              />
          </TouchableOpacity>

          <TextInput 
            style={tw.style('flex-1 mx-3 h-full', {backgroundColor: COLORS.white})}
            placeholder='Search contacts ...'
          />

          <TouchableOpacity>
              <Image
                source={icons.editPencil}
                resizeMode='contain'
                style={tw.style('w-6 h-6', {
                  tintColor : COLORS.gray
                })}
              />
          </TouchableOpacity>

        </View>

         {/* Render Flatlist for chats  */}

         <View>
            <FlatList 
              data={messsagesData}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
         </View>

      </View>
    )
  }


  return (
    <SafeAreaView style={tw.style('flex-1', {backgroundColor: COLORS.secondaryWhite})} >

      <StatusBar hidden />

      <View style={tw.style('flex-1 p-4', {backgroundColor: COLORS.secondaryWhite} )} >
          {renderContent()}
      </View>

    </SafeAreaView>
  )

} ;


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

 
})

export default Chats