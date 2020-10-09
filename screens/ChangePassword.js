import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Arrowicon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesomee from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {SERVER_URL} from './component/utils/config';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [user, setUser] = useState('');

//  const checkStorge = async () => {
//     try {
//       let value = await AsyncStorage.getItem('User');
//       if (value !== null) {
//         let newval = JSON.parse(value);
//         setUser(newval);
//       }
//     } catch (error) {
//       console.log('error getting data');
//     }
//   };

//   useEffect(() => {
//     checkStorge();
//   }, []);

//   const onsubmit = () => {
//     if (password === '') {
//       ToastAndroid.showWithGravity(
//         'Please add Current Password!',
//         ToastAndroid.SHORT,
//         ToastAndroid.CENTER,
//       );
//     } else if (newPassword === '') {
//       ToastAndroid.showWithGravity(
//         'Please add New Password!',
//         ToastAndroid.SHORT,
//         ToastAndroid.CENTER,
//       );
//     } else {
//       const data = {
//         password: password,
//         new_password: newPassword,

//         //   products: [item]
//       };

//       fetch(`${SERVER_URL}api/user/changepassword`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           'X-Auth-Token': user.token,
//         },
//         body: JSON.stringify(data),
//       })
//         .then(response => response.json())
//         .then(json => {
//           console.log(json.message);
//           navigation.navigate('homemainpage');
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }
//   };

  return (
    <View style={styles.containerr}>
      <View style={styles.hbr}>
        <View style={styles.header}>
          <Arrowicon
            onPress={() => navigation.goBack()}
            name="arrowleft"
            color="#3F424E"
            size={24}
          />
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Change Password
          </Text>
          {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
          <View />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#f2f2f2',
        }}>
        <View>
          <Text
            style={{
              marginTop: 25,
              fontWeight: 'bold',
              marginLeft: 25,
              fontSize: 18,
              height: 30,
            }}>
            Add Password:
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.userfield2}>
            <MaterialCommunityIcons
              name="account-key"
              size={25}
              color={'#FB1F1F'}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Your Current Password"
              onChangeText={pass => setPassword(pass)}
              paceholderTextColor="#a6a6a6"
            />
          </View>
          <View style={styles.userfield2}>
            <MaterialCommunityIcons
              name="key-plus"
              size={25}
              color={'#FB1F1F'}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Your New Password"
              placeholderTextColor="#a6a6a6"
              onChangeText={newpass => setNewPassword(newpass)}
            />
          </View>
          <View style={{width: '77%', marginTop: 40}}>
            <TouchableOpacity style={styles.btn} >
              <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
                Update Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerr: {
    backgroundColor: '#ffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  hbr: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#dee0df',
    // height: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20,
    height: 40,
    // borderBottomWidth: 0.3,
    // borderBottomColor:'#dee0df',
  },
  title: {
    flexDirection: 'row',
    marginTop: 100,
    marginBottom: 30,
  },
  title1: {
    marginRight: 100,
  },

  userfield: {
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderBottomColor: '#ffff',

    width: '77%',
    marginTop: 70,
  },
  textInput: {
    marginTop: -10,
    paddingLeft: 10,
    color: '#000',
  },
  userfield2: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '77%',
    marginTop: 20,
  },
  btn: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FB1F1F',
  },
  icon: {
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default ChangePassword;
