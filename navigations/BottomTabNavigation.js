import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import {  Image, Platform, View } from 'react-native'
import Chats from '../screens/Chats'
import { COLORS, icons } from '../constants'
import tw from 'twrnc'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
      return (
            <Tab.Navigator 
                  screenOptions={{
                        tabBarShowLabel: false, 
                        headerShown: false,
                        tabBarStyle: {
                              position : "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              backgroundColor: COLORS.white,
                              height: Platform.os === 'ios' ? 110 : 60,
                              borderTopLeftRadius: 32,
                              borderTopRightRadius: 32
                        }
                  }}>

                  <Tab.Screen 
                        name='Home'
                        component={Chats}
                        options={{
                              tabBarIcon : ({focused}) => (
                                 <Image 
                                    source={focused ? icons.internet : icons.internetOutline} 
                                    resizeMode='contain'
                                    style={{ width: 28, height : 28 , 
                                          tintColor: focused ? COLORS.primary : COLORS.gray
                                    }} 
                                 />       
                              )
                        }
                  }/>

                  <Tab.Screen 
                        name='Chats'
                        component={Chats}
                        options={{
                              tabBarIcon : ({focused}) => (
                                 <Image 
                                    source={focused ? icons.bubbleChat : icons.bubbleChatOutline} 
                                    resizeMode='contain'
                                    style={{ width: 28, height : 28 , 
                                          tintColor: focused ? COLORS.primary : COLORS.gray
                                    }} 
                                 />       
                              )
                        }
                  }/>

                  <Tab.Screen 
                        name='AddPost'
                        component={Chats}
                        options={{
                              tabBarIcon : ({focused}) => (
                                 <View  
                                    style={tw.style('items-center justify-center', {
                                          backgroundColor: COLORS.primary,
                                          height: Platform.OS === "ios" ? 70 : 60,
                                          width:  Platform.OS === "ios" ? 70 : 60,
                                          top:  Platform.OS === "ios" ? -40 : -30,
                                          borderRadius:  Platform.OS === "ios" ? 35 : 30,
                                          borderWidth: 3,
                                          borderColor: 'transparent'
                                    })}>

                                    <Image 
                                          source={icons.plus}
                                          resizeMode='contain'
                                          style={tw.style('w-6 h-6', {tintColor: COLORS.white })}
                                    />

                                 </View>  
                              )
                        }
                  }/>

                  <Tab.Screen 
                        name='Call'
                        component={Chats}
                        options={{
                              tabBarIcon : ({focused}) => (
                                 <Image 
                                    source={focused ? icons.phoneCall : icons.phoneCallOutline} 
                                    resizeMode='contain'
                                    style={{ width: 28, height : 28 , 
                                          tintColor: focused ? COLORS.primary : COLORS.gray
                                    }} 
                                 />       
                              )
                        }
                  }/>

                  <Tab.Screen 
                        name='Settings'
                        component={Chats}
                        options={{
                              tabBarIcon : ({focused}) => (
                                 <Image 
                                    source={focused ? icons.setting : icons.settingOutline} 
                                    resizeMode='contain'
                                    style={{ width: 28, height : 28 , 
                                          tintColor: focused ? COLORS.primary : COLORS.gray
                                    }} 
                                 />       
                              )
                        }
                  }/>
                  
            </Tab.Navigator>
      );
};
                         

export default BottomTabNavigation;
