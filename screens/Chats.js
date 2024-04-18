import { View, Text, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS, SIZES, icons } from '../constants'
import { StatusBar } from 'expo-status-bar'
import {Ionicons} from "@expo/vector-icons"
import { messsagesData } from '../data'


const Chats = ({navigation}) => {

  const [search, setSearch] = useState('')
  const [filterredUsers, setFilterredUsers] = useState(messsagesData)

  const handleSearch = (text) => {
    setSearch(text)

    const filteredData = messsagesData.filter((user) => 
      user.fullName.toLowerCase().includes(text.toLowerCase())
    );

    console.log(' Text -----> ', filteredData)

    setFilterredUsers(filteredData)

  }

  const renderItem = ({item, index}) => {
   
    <TouchableOpacity 
      key={index}
      onPress={() => navigation.navigate("Chat", {userName: item.fullName})}
      style={[
        styles.userContainer,
        index % 2 !== 0 ? styles.oddBackground  : null
      ]}>

      <View style={tw.style({...styles.userImageContainer})} >
        { item.isOnline && item.isOnline === true && (
          <View style={tw.style({...styles.onlineIndicator})} />
        )}
        <Image  style={tw.style('', {...styles.userImage})}
          source={item.userImg}
          resizeMode='contain'
        />
      </View>

      <View style={tw.style('flex-row', {width: SIZES.width - 104})}>
        <View style={tw.style('', {...styles.userImageContainer})}> 
          <Text style={tw.style('', {...styles.userName})} >  {item.userName} </Text>
          <Text style={tw.style('', {...styles.lastSeen})} >  {item.lastMessage} </Text>
        </View>

        <View style={tw.style('absolute right-1 items-center')} >
          <View>

            <TouchableOpacity 
              style={tw.style('w-20 h-20 items-center justify-center rounded-lg', {
                backgroundColor: item.messsageInQueue ? COLORS.primary : "transparent"
              })} >

              <Text style={tw.style('', {...styles.messsageInQueue})} > 
                {item.messsageInQueue} 
              </Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
      
    </TouchableOpacity>

  };


  const renderContent = () => {
    return (
      <View style={tw.style('', {marginBottom: 110})}>

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
            value={search}
            onChangeText={handleSearch}
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
              data={filterredUsers}
              showsVerticalScrollIndicator={true}

              renderItem={({item, index}) => (

                <TouchableOpacity 
                  key={index}
                  onPress={() => navigation.navigate("Chat", {userName: item.fullName})}
                  style={[
                    styles.userContainer,
                    index % 2 !== 0 ? styles.oddBackground  : null
                  ]}>
            
                  <View style={tw.style({...styles.userImageContainer})} >
                    { item.isOnline && item.isOnline === true && (
                      <View style={tw.style({...styles.onlineIndicator})} />
                    )}
                    <Image  style={tw.style('', {...styles.userImage})}
                      source={item.userImg}
                      resizeMode='contain'
                    />
                  </View>
            
                  <View style={tw.style('flex-row', {width: SIZES.width - 104})}>

                    <View style={tw.style('', {...styles.userInfoContainer})}> 
                      <Text style={tw.style('', {...styles.userName})} >  {item.fullName} </Text>
                      <Text style={tw.style('', {...styles.lastSeen})} >  {item.lastMessage} </Text>
                    </View>
            
                    <View style={tw.style('absolute right-1 items-center')} >

                      <Text style={tw.style('', {...styles.lastMessageTime})} >  {item.lastMessageTime} </Text>

                      <View>
                        <TouchableOpacity style={tw.style('w-5 h-5 mt-3 items-center justify-center rounded-full', {
                            backgroundColor: item.messageInQueue ? COLORS.primary : "transparent"
                          })} >
                          <Text style={tw.style('', {...styles.messageInQueue})} > 
                            {item.messageInQueue} 
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>

            
                  </View>
                  
                </TouchableOpacity>

              )}

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

  userContainer: {
    width: "100%",
    flexDirection : "row",
    alignItems : "center",
    borderBottomColor: COLORS.secondaryGray,
    borderBottomWidth: 0
  },

  oddBackground: {
    backgroundColor : COLORS.white
  },

  userImageContainer: {
    paddingVertical: 15,
    marginRight: 22
  },

  userInfoContainer: {
    flexDirection: "column"
  },

  onlineIndicator : {
    height:14,
    width:14,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
    position: "absolute",
    top: 12,
    right: 2,
    zIndex: 999,
    borderWidth: 2,
    borderColor: COLORS.white
  },

  userImage : {
    height:50,
    width: 50,
    borderRadius: 25
  },

  userName : {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginBottom: 4
  },

  lastSeen : {
    fontSize: 14,
    color: COLORS.secondaryGray
  },

  lastMessageTime : {
    fontSize: 12,
    color: COLORS.black
  },

  messageInQueue : {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.white,
  }

})

export default Chats