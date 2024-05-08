import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPass, setshowPass] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pregular">{title}</Text>
            <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center justify-center flex-row'>
                <TextInput
                    className={`flex text-white font-psemibold text-base w-full ${title === "Password" && 'px-3'}`}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPass}
                />
                {title === 'Password' && (
                    < TouchableOpacity onPress={() => {
                        setshowPass(!showPass)
                    }} >

                        <Image
                            source={showPass ? icons.eye : icons.eyeHide}
                            className='w-6 h-6'
                            resizeMode='contain'
                        />

                    </TouchableOpacity>
                )}




            </View>
        </View>
    )
}

export default FormField