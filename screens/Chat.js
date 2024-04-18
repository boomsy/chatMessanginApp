import { View, Text, TouchableOpacity, Image , StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons, images, FONTS, SIZES } from '../constants'
import { Feather, FontAwesome } from "@expo/vector-icons"
import { GiftedChat } from 'react-native-gifted-chat'


const Chat = ({navigation}) => {

  const  [messages, setMessages] = useState([])
  const  [inputMessage, setInputMessage] = useState("")

  const  handleInputText = (text) => {
    setInputMessage(text)
  }

  const renderMessage = (props) => {
    const {currentMessage} = props;

    if(currentMessage.user._id === 1) {
        return(
          <View style={tw.style('flex-row flex-1 flex-end')}>
              <Buddle
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: COLORS.primary,
                    marginRight: 12,
                    marginVertical: 12
                  }
                }}
                textStyle={{
                  right: {
                    color: COLORS.white
                  }
                }}
              />
          </View>
        )
    }

  }


  const submitHandler = () => {
    const message = {
      _id  : Math.random().toString(36).toString(7),
      text : inputMessage,
      createdAt : new Date().getTime(),
      user : { _id: 1}
    };

    setMessages((previousMessage) => 
      GiftedChat.append(previousMessage, [message]) )
  }


  return (
    <SafeAreaView style={tw.style('flex-1', {backgroundColor : COLORS.white})}>

      {/* Render Header */}

      <View style={tw.style('flex-row px-4 py-4', {
          justifyContent : 'space-between',
          backgroundColor : COLORS.white,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: .2
        })}>

          <View style={tw.style('flex-row items-center ')}>

            <TouchableOpacity
              onPress={() => navigation.goBack() }
              style={tw.style('flex-row')} >
                <Image 
                  source={icons.back}
                  resizeMode='contain'
                  style={tw.style('h-6 w-6',{tintColor: COLORS.black})}
                />
            </TouchableOpacity>

            <View style={tw`ml-2`}>
                <View style={tw.style('absolute rounded', {
                    bottom: 0,
                    right: 4,
                    width: 10,
                    height: 10,
                    zIndex : 999,
                    backgroundColor : COLORS.primary,
                    borderColor: COLORS.white,
                    borderWidth: 2 
                })} />

                <Image
                  source={images.user1} 
                  resizeMode='contain'
                  style={tw.style('h-11 w-11 rounded-full')}
                />
            </View>


            <View style={tw`ml-2`}>
                <Text style={tw.style({...FONTS.h4, color: COLORS.black})}> 
                  Sebana Rodrigger
                </Text>

                <Text  style={tw.style({ fontSize: 12, fontFamily: "regular", color: COLORS.primary })} > 
                  Online 
                </Text>
            </View>
            

          </View>


          <View style={tw`flex-row items-center gap-x-5 pr-2`}>  
              <TouchableOpacity>
                <Feather 
                  name='video'
                  size={22}
                  color={COLORS.gray}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather 
                  name='phone'
                  size={22}
                  color={COLORS.gray}
                />
              </TouchableOpacity>
          </View>

      </View>


       {/* Render chat */}

       <GiftedChat 
          messages={messages}
          renderInputToolbar={() => {return null}}
          user={{_id: 1}}  
          minInputToolbarHeight={0}
          renderMessage={renderMessage}   
       />         


      {/* Render Input bar*/}


      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}>

           <TextInput
            style={styles.input}
            placeholder='Type here ...'
            placeholderTextColor={COLORS.gray}
            value={inputMessage}
            onChangeText={handleInputText}
           />

            <View style={tw`flex-row items-center`}>
              <TouchableOpacity style={tw`px-2`}>
                  <Image
                    source={icons.camera}
                    resizeMode='contain'
                    style={tw.style('h-5 w-5', {tintColor: COLORS.gray})}
                  />
              </TouchableOpacity>

              <TouchableOpacity>
                  <Image
                    source={icons.stickyNote}
                    resizeMode='contain'
                    style={tw.style('h-5 w-5', {tintColor: COLORS.gray})}
                  />
              </TouchableOpacity>

            </View>

            <TouchableOpacity 
              onPress={submitHandler}
              style={styles.sendButton} >
                  <FontAwesome 
                    name='send'
                    size={22}
                    color={COLORS.primary}
                  />
            </TouchableOpacity>

        </View>
      </View>


    </SafeAreaView>
  )


};



const styles = StyleSheet.create({

  inputContainer: {
    backgroundColor: COLORS.white,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputMessageContainer: {
    backgroundColor: COLORS.secondaryWhite,
    height: 54,
    width: SIZES.width - 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: "rgb(128,128,128,.2)",
    borderWidth: 1
  },

  input: {  
    color: COLORS.black,
    flex: 1,
    paddingHorizontal: 10
  },

  sendButton: {
    backgroundColor: COLORS.white,
    padding: 4,
    borderRadius: 999,
    marginHorizontal: 6
  },

})



export default Chat