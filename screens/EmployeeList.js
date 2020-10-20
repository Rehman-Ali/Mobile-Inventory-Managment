import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
  ActivityIndicator,
  Dimensions,
  FlatList, ImageBackground
} from 'react-native';

import Arrowicon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../assets/signup3.jpg';
import {SERVER_URL} from '../utils/config';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'

import {
  GET_SOLD_PRODUCT_FAIL,
  GET_SOLD_PRODUCT_SUCCESS,
} from '../actions/types';
const EmployeeList = ({navigation}) => {
  const [spinner, setSpinner] = useState(false);
  const [token, setToken] = useState();
  const [data, setDate] = useState();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.sale.allproduct);
  console.log('product', product);

  const checkStorge = async () => {
    try {
      const value = await AsyncStorage.getItem('User');
      console.log('valusse', JSON.parse(value));
      let data = JSON.parse(value)
      if (value !== null) {
        console.log('toek ', data.token);
        setToken(data.token);
      }
    } catch (error) {
      console.log('catch err', error);
    }
  };
  console.log('data', data);
  useEffect(() => {
    checkStorge();
  }, []);

  useEffect(() => {
    setSpinner(true);
    console.log('token', token);
    fetch(`${SERVER_URL}api/employee`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  token,
      },
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        setSpinner(false);
        setDate(responseJson.employees)
        // dispatch({
        //   type: GET_SOLD_PRODUCT_SUCCESS,
        //   payload: responseJson.product,
        // });
        // console.log('then', responseJson);
      })
      .catch((error) => {
        // ToastAndroid.show('Incorrect Credcentials!', ToastAndroid.CENTER),
        setSpinner(false);
       
        console.log('catchhh', error);
      });
  }, [token]);
  const screenHeight = Math.round(Dimensions.get('window').height) / 2;
 
  const renderItem = ({ item }) => {
   
    return (
      <TouchableOpacity      
      style={styles.card}
    
      >
      <View style={styles.diiv1}>
        <View style={styles.img}>
          <Image
            source={img}
            style={{height: 40, width: 40, borderRadius: 25}}
          />
        </View>
        <View style={styles.imgtext}>
    <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
    <Text style={{color: 'grey', fontSize: 12}}>{item.role_name}</Text>
        </View>
      </View>
      <View style={styles.diiv2}>
        <View style={styles.inner}>
    {/* <Text>Rs{item.sold_price}</Text> */}
    {/* <Text style={{color: 'grey', fontSize: 12}}>Rs{item.price}</Text> */}
        </View>
        <View style={styles.icon}>
          <Arrowicon
            name="arrow-right"
            color="#ffff"
            style={{alignSelf: 'center', marginTop: '14%'}}
            size={10}
          />
        </View>
      </View>
    </TouchableOpacity>
    );
  };

 
  return (
  
    <>
    {spinner == true ? (
      <ActivityIndicator
        size="large"
        color="#2a62ff"
        style={{
          paddingVertical: screenHeight,
          backgroundColor: '#fff',
          opacity: 0.5,
        }}
      />
    ) : (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.leftContainer}>
        <View style={styles.mainCon}>
          <View style={styles.hbr}>
            <View style={styles.header}>
              <Arrowicon
                onPress={() => navigation.toggleDrawer()}
                name="bars"
                color="#ffff"
                style={{marginLeft: 10}}
                size={22}
              />
              <View style={{width: '85%', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>
                  Employee List
                </Text>
              </View>
              <View />
            </View>
          </View>
        </View>
      </ImageBackground>
    
        <View style={styles.rightContainer}>
          <View>
          <FlatList
           style={styles.scrol}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
          </View>
        </View>
      
    </View>
    )}
    </>
  );
};

const styles = StyleSheet.create({
 
  mainCon: {
    flex: 1,
    // position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  hbr: {
    height: '100%',
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 15,
    // marginRight: '15%',
    // marginLeft: 20,
    height: '40%',
    zIndex: 3,
    // borderBottomWidth: 0.3,
    // borderBottomColor:'#dee0df',
  },
  // div1:{
  //   height: 150,
  //   width: '42%',
  //   backgroundColor: '#ffff',
  //   borderRadius:10,
  //   flexDirection:"column",
  //   justifyContent:'center',
  //   alignContent:'center',
  //   alignItems:'center'
  // }
  container: {
    flex: 1,
    flexDirection: 'column',

    zIndex: 0,
  },
  leftContainer: {
    flex: 1,
    backgroundColor: '#2a62ff',
//    borderBottomEndRadius: 10,
    zIndex: 2,
  },
  rightContainer: {
    flex: 6,
    backgroundColor: '#fefeff',

    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    zIndex: 2,
    // height:'100%',
    // marginTop:'80%'
    // width: '100%',
    // height: '100%',
    //  marginTop: '4%'
  },
  addButton: {
    //  backgroundColor:'red',
    height: '40%',
    // position: 'absolute',
    width: '92%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 7,
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    marginTop: '40%',

    // position:
    //  width: '700'
  },
  innerDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  innertext: {
    fontSize: 25,
    color: '#2a62ff',
  },
  // list:{
  //   marginTop:40,
  //   backgroundColor: '#fefeff',
  //    height:"90%" ,
  //   width:'100%'
  //   // backgroundColor: '#fbfbfb'
  // },
  scrol: {
    // marginTop: 70,
    height: '100%',
  },
  card: {
    height: 30,
    backgroundColor: '#fff',
    width: '95%',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  diiv1: {
    height: '100%',
    //  backgroundColor:'pink',
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  diiv2: {
    height: '100%',
    // backgroundColor:'yellow',
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgtext: {
    marginLeft: '4%',
  },
  icon: {
    height: 17,
    width: '20%',
    backgroundColor: '#00c84e',
    borderRadius: 25,
  },
  icon2: {
    height: 17,
    width: '20%',
    backgroundColor: '#f34b40',
    borderRadius: 25,
  },
  inner: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmployeeList;
