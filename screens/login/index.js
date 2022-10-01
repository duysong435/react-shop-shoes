import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    Keyboard
} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainButton } from "../../components";
import { colors, icons, fontSizes } from "../../constants/index"
import { isValiEmail, isValiPassord } from '../../utilies/Validation'
import Home from "../home";

const Login = (props) => {
    const [keyboardIsShow, setkeyboardIsShow] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    return <View style={{
        marginTop: 30,
        flex: 100
    }}>
        <View style={{
            flex: 40
        }}>
            <Image
                source={icons.shoes}
            />
        </View>
        <View style={{
            flex: 20
        }}>
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
        {keyboardIsShow == false && <View style={{
            flex: 40
        }}>
            <MainButton
                name='Login'
                color={colors.main}
                onPress={() => {
                    setData();
                }}
                disabled={isValidationOK() == false}
                isValidation={isValidationOK() == false ? 0.5 : 1}
            />
            <MainButton
                name='Sign Up'
                color={colors.main}
                onPress={() => {
                    alert('Cho long')
                }}
            />
        </View>}
    </View>
}

export default Login;