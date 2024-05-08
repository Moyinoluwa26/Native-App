import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const profile = () => {
    return (
        <View className="flex  items-center justify-center bg-black h-full">
            <StatusBar style="auto" />
            <Text style={{ fontSize: 30 }} >profile</Text>
            <Text style={{ fontSize: 20, paddingTop: 5 }}>This is the profile page</Text>
        </View>
    )
}

export default profile

/*const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',


    }
})*/