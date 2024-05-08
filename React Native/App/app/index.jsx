import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { router, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

const Index = () => {
    return (


        <SafeAreaView className='bg-primary h-full flex'>
            <ScrollView contentContainerStyle={{ height: '100%' }} >
                <View className="items-center justify-center min-h-[90vh] w-full px-4  " >
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[130px] h-[84px]"
                    />
                    <Image
                        source={images.cards}
                        className='max-w-[300px] w-full h-[300px] '
                        resizeMode='contain'
                    />
                    <View className='relative mt-5'>
                        <Text className="text-3xl text-white text-center font-bold ">
                            Discover Endless possibilities with{' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className='absolute -bottom-2 -right-8 w-[136px] h-[15px] '
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
                        Where creativity meets innovation:embark on a limiteless journey of possibilities with Aora
                    </Text>
                    <CustomButton
                        containStyles='w-full mt-5'
                        title={"Get Started"}
                        textStyles='text-primary font-psemibold'
                        handlePress={() => {
                            router.push('/sign-in')
                        }} />
                </View>

                <StatusBar backgroundColor='#161622' style="light" />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Index

/*const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})*/