import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ImageBackground,
    Dimensions,
    ActivityIndicator,
    ToastAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import img from '../assets/signup3.jpg';
import {SERVER_URL} from '../utils/config';
import AsyncStorage from '@react-native-community/async-storage'
// import { login } from '../components/context';

// import Users from '../model/users';

const Login = ({navigation}) => {
    const [spinner, setSpinner] = useState(false);
 
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

   
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const  loginHandle =() => {
        setSpinner(true)
     
        if (data.username === "") {
            setSpinner(false)
     
            ToastAndroid.showWithGravity(
            "Please Enter Email!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
           
          );
        }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.username) == false){
            setSpinner(false)
     
            ToastAndroid.showWithGravity(
            "Please Enter valid Email!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
           
          );
        }else if (data.password === "") {
            setSpinner(false)
     
            ToastAndroid.showWithGravity(
            "Please Enter Pasword!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
           
          );
        }
        else{
         fetch(`${SERVER_URL}api/users/login`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             email: data.username,
             password: data.password,
           }),
         })
           .then(response => response.json())
           .then(async responseJson => {
           
             setSpinner(false)
             if (responseJson.message == 'login successfull') {
               await AsyncStorage.setItem('User', JSON.stringify(responseJson));
                 //   ToastAndroid.show(responseJson.message, ToastAndroid.CENTER);
               ToastAndroid.showWithGravity(
                 responseJson.message,
                 ToastAndroid.SHORT,
                 ToastAndroid.CENTER,
                
               );
               navigation.navigate('home');
             } else {
             //   ToastAndroid.show('Incorrect Credcentials!', ToastAndroid.CENTER);
             setSpinner(false)
             ToastAndroid.showWithGravity(
                 'Incorrect Credcentials!',
                 ToastAndroid.SHORT,
                 ToastAndroid.CENTER,
      
           
               );
             }
           })
           .catch(error =>
             // ToastAndroid.show('Incorrect Credcentials!', ToastAndroid.CENTER),
          {  setSpinner(false)
             ToastAndroid.showWithGravity(
                 'Incorrect Credcentials!',
                 ToastAndroid.SHORT,
                 ToastAndroid.CENTER,
                
           
                     )
              } );
      
        }
          }

          const screenHeight = Math.round(Dimensions.get('window').height) / 2;

      
    return (
      <ImageBackground source={img} style={styles.container}>
          <StatusBar backgroundColor='#2a62ff' barStyle="light-content"/>
          {
            spinner == true ? <ActivityIndicator
            size="large"
            color="#2a62ff"
           style={{paddingVertical: screenHeight, backgroundColor:'#000', opacity:0.5}}
         />
         :
         <>
        <View  style={styles.header} >
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#2a62ff', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => loginHandle()}
                >
                <LinearGradient
                    colors={['#2a62ff', '#2a62ff']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#2a62ff',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#2a62ff'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
        </>}
      </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    //   backgroundColor: 'red'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    image: {
        // flex:1,
        height: '50%',
        width: '50%',
        resizeMode: 'cover',
        //  justifyContent: "center",
        //  alignItems: 'center',
      },
    
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
