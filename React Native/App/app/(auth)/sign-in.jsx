import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {

    const [form, setForm] = useState({
        email: ' ',
        password: ' '
    })

    const [isSubmiting, setSubmiting] = useState(false);


    const Submit = () => {

    }

    return (
        <SafeAreaView className="bg-primary h-full ">
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    />
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Aora</Text>
                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(e) => setForm({
                            ...form,
                            email: e
                        })}
                        otherStyles='mt-7 '
                        keyboardType='email-address'
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({
                            ...form,
                            password: e
                        })}
                        otherStyles='mt-7 '
                        placeholder={'Input your password... '}
                    />
                    <CustomButton
                        title='Sign In'
                        handlePress={Submit}
                        containStyles='mt-7 h-16'
                        isLoading={isSubmiting}
                        textStyles={'text-primary font-psemibold'}


                    />
                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Dont have an account ?
                        </Text>
                        <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />

        </SafeAreaView>
    )
}

export default SignIn