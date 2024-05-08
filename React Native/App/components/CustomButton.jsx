import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            className={`bg-secondary justify-center py-3 rounded-xl ${containStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}>
            <Text className={`text-center  text-lg  ${textStyles}
            `}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

