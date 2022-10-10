import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    Keyboard,
    StatusBar,
    TouchableOpacity
} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainButton } from "../../components";
import { colors, icons, fontSizes } from "../../constants/index"
import { isValiEmail, isValiPassord } from '../../utilies/Validation'

const Register = (props) => {

    const [keyboardIsShow, setkeyboardIsShow] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const isValidationOK = () => email.length > 0 && password.length > 0
        && isValiEmail(email) == true
        && isValiPassord(password) == true


    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true);
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShow(false);
        })
    })

    const setData = async () => {
        try {
            await AsyncStorage.setItem('UserName', email);
            navigate('Home');
        } catch (error) {
            console.log(error)
        }
    }

    const { navigation, route } = props;
    const { navigate, goBack } = navigation;

    return (
        <View style={{
            flex: 100,
            marginTop: StatusBar.currentHeight + 10,
            backgroundColor: 'white'
        }}>
            <View style={{
                flexDirection: "row",
                marginTop: 10
            }}>
                <TouchableOpacity 
                onPress={() => {
                    goBack();
                }}
                style={{
                    backgroundColor: "#f4f4f4",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                }}>
                    <Image source={icons.goBack} />
                </TouchableOpacity>
                <Text
                    style={{
                        color: "#000",
                        fontSize: 25,
                        paddingLeft: 20,
                        fontWeight: "bold",
                        letterSpacing: 5,
                        alignContent: 'center'
                    }}
                >
                    Đăng Ký
                </Text>
            </View>
            {/* Image shoes */}
            <View style={{
                flex: 50,
                // backgroundColor: 'red'
            }}>
                <Image
                    style={{
                        // height: '60%'
                    }}
                    source={icons.shoes} />
            </View>
            {/* Text input */}
            <View style={{
                flex: 30
            }}>
                <View style={{
                    marginHorizontal: 10
                }}>
                    <Text style={{
                        color: colors.main,
                        fontSize: fontSizes.h6,

                    }}>Name:</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setUserName(text)
                        }}
                        style={{
                            color: "black",
                            borderBottomColor: colors.main,
                            borderBottomWidth: 1
                        }}
                        placeholder='Enter your name'
                        value={userName}
                        placeholderTextColor={colors.placeholder}
                    />
                </View>
                <View style={{
                    marginHorizontal: 10
                }}>
                    <Text style={{
                        color: colors.main,
                        fontSize: fontSizes.h6,

                    }}>Email:</Text>
                    <TextInput
                        onChangeText={(text) => {
                            // if(isValiEmail(text) == false){
                            //     setErrorEmail('Email not in corret format')
                            // }else{
                            //     setErrorEmail
                            // }
                            setErrorEmail(isValiEmail(text) == true ? '' : 'Email not in corret format');
                            setEmail(text)
                        }}
                        style={{
                            color: "black",
                            borderBottomColor: colors.main,
                            borderBottomWidth: 1
                        }}
                        placeholder='example@gmail.com'
                        value={email}
                        placeholderTextColor={colors.placeholder}
                    />
                    <Text style={{
                        color: "red"
                    }}>{errorEmail}</Text>
                </View>
                <View style={{
                    marginHorizontal: 10
                }}>
                    <Text style={{
                        color: colors.main,
                        fontSize: fontSizes.h6
                    }}>Password:</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setErrorPassword(isValiPassord(text) == true ? '' : 'Password must be at least 3 characters');
                            setPassword(text)
                        }}
                        style={{
                            color: "black",
                            borderBottomColor: colors.main,
                            borderBottomWidth: 1
                        }}
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        value={password}
                        placeholderTextColor={colors.placeholder}
                    />
                    <Text style={{
                        color: "red"
                    }}>{errorPassword}</Text>
                </View>
            </View>
            {
                keyboardIsShow == false && <View style={{
                    flex: 40
                }}>
                    <MainButton
                        name='Sign Up'
                        color={colors.main}
                        onPress={() => {

                        }}

                    />
                </View>
            }
        </View >
    )
}

export default Register;