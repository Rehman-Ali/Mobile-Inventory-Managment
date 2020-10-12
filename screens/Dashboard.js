import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';



import Arrowicon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {SERVER_URL} from './component/utils/config';

const ChangePassword = ({navigation}) => {

  return (
    <View style={styles.containerr}>
      <View style={styles.hbr}>
        <View style={styles.header}>
          <Arrowicon
            onPress={() => navigation.toggleDrawer()}
            name="bars"
            color="#ffff"
           
            size={22}
          />
          <Text style={{fontWeight: 'bold', fontSize: 20, alignItems:'center', color:'#fff'}}>
           Dashboard
          </Text>
          {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
          <View />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:40
          
        }}>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Sales
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('report')} >
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Reports
          </Text>
          <Text style={{color: '#2a62ff'}}>534</Text>
          </TouchableOpacity>
        
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:15
          
        }}>
          <TouchableOpacity style={styles.div1}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Profile
          </Text>
          {/* <Text style={{color: '#2a62ff'}}>34</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Employee
          </Text>
          <Text style={{color: '#2a62ff'}}>24</Text>
          </TouchableOpacity>
        
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:15
          
        }}>
          <TouchableOpacity style={styles.div1}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Vendors
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Sales
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
        
      </View>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  containerr: {
    flex:1,
    backgroundColor: '#2a62ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a62ff',
  },
  hbr: {
    // borderBottomWidth: 0.3,
    // borderBottomColor: '#dee0df',
    // height: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
     marginRight: '15%',
    marginLeft: 20,
    height: 40,
    // borderBottomWidth: 0.3,
    // borderBottomColor:'#dee0df',
  },
  div1:{
    height: 150,
    width: '42%',
    backgroundColor: '#ffff',
    borderRadius:10,
    flexDirection:"column",
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  }
 
});

export default ChangePassword;
