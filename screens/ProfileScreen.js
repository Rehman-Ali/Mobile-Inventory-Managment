import React, {Component, Fragment, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import img from '../assets/profile.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Arrowicon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
  
  const [user, setUser] = useState()

  const checkStorge = async () => {
      try {
        const value = await AsyncStorage.getItem('User');
        console.log('valusse', JSON.parse(value));
        let data = JSON.parse(value)
        if (value !== null) {
         
          setUser(data);
        }
      } catch (error) {
        console.log('catch err', error);
      }
    };
  
    useEffect(() => {
      checkStorge();
    }, []);
  

  return (
   
    <ScrollView style={styles.container}>
        
      <View style={styles.headerDiv}>
        <ImageBackground source={img} style={styles.image}>
          <View style={styles.imgCon}>
         
            <Icon
              name="person"
              style={styles.person}
              color="white"
              size={70}
            />
          </View>
          <View>
         <Text style={styles.text}>Welcome { user !== undefined ? user.name : ''}</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="lock" style={styles.icon} color="white" />
            <Icon name="settings" color="white" />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.myAccount}>
        <Text style={styles.textAccount}>My Account</Text>
      </View>
      <TouchableOpacity
        style={styles.loginDiv}
        // onPress={() => navigation.navigate('changePassword')}
        >
        <View style={styles.loginIcon}>
          <Icon
            name="shop"
            style={{marginLeft: 10}}
            color="red"
            size={20}
          />
          <Text style={styles.textLogin}>Edit Shop</Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="keyboard-arrow-right" color="red" />
        </View>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.loginDiv}
        // onPress={() => navigation.navigate('donationhistory')}
        >
        <View style={styles.loginIcon}>
          <Icon
            name="vpn-key"
            style={{marginLeft: 10}}
            color="red"
            size={20}
          />
          <Text style={styles.textLogin}>Change Password</Text>
        </View>
        <View style={styles.arrow}>
        <Icon name="keyboard-arrow-right" color="red" />
        </View>
      </TouchableOpacity>
      
      <View style={styles.myAccount}>
        <Text style={styles.textAccount}>Help & Support</Text>
      </View>
      <TouchableOpacity
        style={styles.allDiv}
        // onPress={() => navigation.navigate('aboutus')}
        >
        <View style={styles.loginIcon}>
          <Icon
            name="sentiment-very-satisfied"
            style={{marginLeft: 10}}
            color="red"
            size={20}
          />
          <Text style={styles.textLogin}>About Us</Text>
        </View>
        <View style={styles.arrow}>
        <Icon name="keyboard-arrow-right" color="red" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.allDiv}
        // onPress={() => navigation.navigate('contactus')}
        >
        <View style={styles.loginIcon}>
          <Icon
            name="call"
            style={{marginLeft: 10}}
            color="red"
            size={20}
          />
          <Text style={styles.textLogin}>Contact Us</Text>
        </View>
        <View style={styles.arrow}>
        <Icon name="keyboard-arrow-right" color="red" />
        </View>
      </TouchableOpacity>
      
    </ScrollView>
    
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff'
  },
  headerDiv: {
    height: 250,
    // backgroundColor: '#888',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header:{
    flexDirection: 'row',
    alignContent : 'flex-start'
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCon: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 100,
    marginTop: 25,
  },
  person: {
    alignSelf: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
  },
  myAccount: {
    height: 50,
    backgroundColor: '#eeeeee',
  },
  textAccount: {
    fontSize: 20,
    margin: 10,
  },
  loginDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
  },
  loginIcon: {
    flexDirection: 'row',
    marginTop: 13,
  },
  arrow: {
    margin: 10,
  },
  textLogin: {
    marginLeft: 7,
  },
  allDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
  },
});
