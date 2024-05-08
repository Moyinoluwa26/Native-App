import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center  '>
            <Image source={icon}
                resizeMode="contain"
                tintColor={color}
                className={'w-6 h-6 '}
            />
            {/* <Text className={`text-xs  ${focused ? 'font-psemibold' : 'font-pregular'}`}>{name}</Text>*/}
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        /* backgroundColor: '#fff',
                         height: 50,
                         borderTopWidth: 0,
                         elevation: 0,
                         shadowOpacity: 0,
                         shadowOffset: {
                             height: 0,
                         },
                         shadowRadius: 0,*/
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#161622',
                        height: 50,
                    }

                }}




            >

                <Tabs.Screen

                    name="home"
                    options={
                        {
                            title: 'Home',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.home}
                                    color={color}
                                    focused={focused}
                                    name="Home"
                                />
                            )
                        }
                    }
                />
                <Tabs.Screen
                    name="create"
                    options={
                        {
                            title: 'Create',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.plus}
                                    color={color}
                                    focused={focused}
                                    name="Create"
                                />
                            )
                        }
                    }
                />

                <Tabs.Screen
                    name='bookmark'
                    options={
                        {
                            title: 'Bookmark',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.bookmark}
                                    color={color}
                                    focused={focused}
                                    name="Bookmark"
                                />
                            )
                        }
                    } />
                <Tabs.Screen
                    name="profile"
                    options={
                        {
                            title: 'Profile',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.profile}
                                    color={color}
                                    focused={focused}
                                    name="Profile"
                                />
                            )
                        }
                    } />
            </Tabs >
        </>
    )
}

export default TabsLayout 