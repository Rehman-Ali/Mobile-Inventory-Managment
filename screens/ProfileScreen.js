import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons';

const ProfileScreen = ({navigation}) => {
  
  return (
    <ScrollView style={styles.container}>
        <Text>djfjx</Text>
      {/* <View style={styles.headerDiv}>
        <ImageBackground source={img} style={styles.image}>
          <View style={styles.imgCon}>
            <Icon
              name="md-person"
              style={styles.person}
              color="white"
              size={70}
            />
          </View>
          <View>
            <Text style={styles.text}>Welcome Saeed</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="md-lock" style={styles.icon} color="white" />
            <Icon name="md-globe" color="white" />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.myAccount}>
        <Text style={styles.textAccount}>My Account</Text>
      </View>
      <TouchableOpacity
        style={styles.loginDiv}
        onPress={() => navigation.navigate('changePassword')}>
        <View style={styles.loginIcon}>
          <Icon
            name="md-key"
            style={{marginLeft: 10}}
            color="#4c283c"
            size={20}
          />
          <Text style={styles.textLogin}>Change Password</Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="md-arrow-dropright" color="#4c283c" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginDiv}
        onPress={() => navigation.navigate('donationhistory')}>
        <View style={styles.loginIcon}>
          <Icon
            name="md-heart"
            style={{marginLeft: 10}}
            color="#4c283c"
            size={20}
          />
          <Text style={styles.textLogin}>Donation History</Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="md-arrow-dropright" color="#4c283c" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginDiv}
        onPress={() => navigation.navigate('donationrequest')}>
        <View style={styles.loginIcon}>
          <Icon
            name="md-hand"
            style={{marginLeft: 10}}
            color="#4c283c"
            size={20}
          />
          <Text style={styles.textLogin}>Request History</Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="md-arrow-dropright" color="#4c283c" />
        </View>
      </TouchableOpacity>
      <View style={styles.myAccount}>
        <Text style={styles.textAccount}>Help & Support</Text>
      </View>
      <TouchableOpacity
        style={styles.allDiv}
        onPress={() => navigation.navigate('aboutus')}>
        <View style={styles.loginIcon}>
          <Icon
            name="md-contacts"
            style={{marginLeft: 10}}
            color="#4c283c"
            size={20}
          />
          <Text style={styles.textLogin}>About Us</Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="md-arrow-dropright" color="#4c283c" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.allDiv}
        onPress={() => navigation.navigate('contactus')}>
        <View style={styles.loginIcon}>
          <Icon
            name="md-contact"
            style={{marginLeft: 10}}
            color="#4c283c"
            size={20}
          />
          <Text style={styles.textLogin}>Contact Us</Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="md-arrow-dropright" color="#4c283c" />
        </View>
      </TouchableOpacity> */}
      
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerDiv: {
    height: 250,
    // backgroundColor: '#888',
    flexDirection: 'column',
    alignItems: 'center',
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
    backgroundColor: '#4c283c',
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
