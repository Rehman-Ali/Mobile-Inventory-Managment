import React, { Component , useState, useEffect} from 'react'
import DatePicker from 'react-native-datepicker'

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
  TouchableOpacity,
  ImageBackground,
  Button, FlatList,
  Image
  } from 'react-native';
import Arrowicon from 'react-native-vector-icons/AntDesign';
import img from '../../assets/profile.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SERVER_URL} from '../../utils/config';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'
import Arrowicons from 'react-native-vector-icons/FontAwesome5';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3.7);


const ProfitReport = ({navigation}) => {
   const [sdate, setSDate] = useState()
   const [edate, setEDate] = useState()
   const [spinner, setSpinner] = useState(false);
   const [token, setToken] = useState('');
   const [data, setData] = useState();
    
//    const bestSellingGraphDate = useSelector(state => state.report.bestSellingGraph)
//    const data = bestSellingGraphDate.report;
   

   const checkStorge = async () => {
    try {
      const value = await AsyncStorage.getItem('User');
      console.log('valusse', JSON.parse(value));
      let data = JSON.parse(value)
      if (value !== null) {
       
        setToken(data.token);
      }
    } catch (error) {
      console.log('catch err', error);
    }
  };

   useEffect(() => {
    checkStorge();
   }, []);


 const  changeHandle =(date) => {
    
    setSpinner(true)
 console.log('token', token)
    fetch(`${SERVER_URL}api/report/profit`, {
      method: 'POST',
      headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      },
      body:JSON.stringify({
            sDate: sdate,
            eDate: edate,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setSpinner(false);
        setData(responseJson)
        // console.log('res', responseJson)
        // dispatch({
        //   type: GET_CLOSING_REPORT_SUCCESS,
        //   payload: responseJson,
        // });
      
      })
      .catch((error) => {
        setSpinner(false);
       
        console.log('catchhh', error);
      });

    }
      


   const renderItem = ({ item }) => {
   
    return (
      <TouchableOpacity      
      style={styles.card}
      onPress={() => navigation.navigate('saleDetail', {item : item})}>
      <View style={styles.diiv1}>
        <View style={styles.img}>
          <Image
            source={img}
            style={{height: 40, width: 40, borderRadius: 25}}
          />
        </View>
        <View style={styles.imgtext}>
    <Text style={{fontWeight: 'bold'}}>{item.model}</Text>
    <Text style={{color: 'grey', fontSize: 12}}>{item.brand}</Text>
        </View>
      </View>
      <View style={styles.diiv2}>
        <View style={styles.inner}>
    {/* <Text>Rs{item.sold_price}</Text> */}
    {/* <Text style={{color: 'grey', fontSize: 12}}>Rs{item.price}</Text> */}
        </View>
        <View style={styles.icons}>
          <Arrowicons
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
        <View style={styles.containerr}>
      <ImageBackground source={img} style={{height:120, width:'100%'}}>
     <View style={styles.hbr}>
        <View style={styles.header}>
          <Arrowicon
            onPress={() => navigation.navigate('HomeDrawer')}
            name="arrowleft"
            color="#fff"
            size={24}
          />
          {/* <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Daily Report
          </Text> */}
          {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
          <View />
        </View>
      </View>
      <View style={styles.mainDiv}>
        <Text style={{fontSize: 30, color:'#fff', fontWeight: 'bold', textAlign:'center', textAlignVertical: 'center'}}>Profit Report</Text>
     
      </View>
      </ImageBackground>

      <View style={{height: '25%', backgroundColor: '#2a62ff', width:'95%', alignSelf:'center', marginTop: 10, borderRadius: 10, elevation: 5}}>
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', alignContent:'center',  marginTop : '5%'}}>
      <View>
          <Text style={styles.text1}>Select Date:</Text>
          </View>
          
      <DatePicker
        style={{width: 200}}
        date={sdate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2020-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setSDate(date)}
      />
     
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', alignContent:'center', marginTop : '5%'}}>
      <View>
          <Text style={styles.text1}>End Date:</Text>
          </View>
          
      <DatePicker
        style={{width: 200}}
        date={edate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setEDate(date)}
      />
    </View>
     <TouchableOpacity style={{height: 30, width:'30%', borderRadius: 5, backgroundColor: '#fff', justifyContent:'center', alignContent:'center', alignSelf:'center', textAlign:'center', marginTop: '2%'}} onPress={() => changeHandle()} ><Text style={{alignSelf:'center', textAlign:'center', color:'#2a62ff', fontWeight:'bold'}}>Get Report</Text></TouchableOpacity>
   
    </View>
    <View style={{ height:'5%', width:'100%', backgroundColor:'#e8eaed', marginTop: 10, }}>
      <Text style={{ color:'#000', fontWeight:'bold', padding:5, fontSize:16  }}>Report Detail:</Text>
    </View>
    {
        data !== undefined &&
        <View style={{ height:'5%', width:'100%', backgroundColor:'#e8eaed', flexDirection:'row' }}>
      <Text style={{ color:'#000', fontWeight:'bold', padding:5, fontSize:16  }}>Seles: {data.sales}</Text>
    <Text style={{ color:'#000', fontWeight:'bold', padding:5, fontSize:16  }}>Profit: {data.profit}</Text>
    </View>

    }
    

    <View style={styles.rightContainer}>
          <View>
          <FlatList
           style={styles.scrol}
           data={data !== undefined ? data.sold_product: [{brand : 'no item', model : 'please see other day'}]}
           renderItem={renderItem}
           keyExtractor={item => item._id}
      />
      </View>
      </View>
    
      {/* <View style={styles.div1}>
       <View style={styles.div11}>
         <View>
          <Text style={styles.text1}>Start Date:</Text>
          </View>
          <View>
       <DatePicker
        style={{width: 200}}
        date={date}
        onDateChange={setDate}
       />
      </View>
      </View>  */}
      {/* <View style={styles.div11}>
         <View>
          <Text style={styles.text1}>End Date:</Text>
          </View>
          <View>
       <DatePicker
        style={{width: 200}}
        date={date}
      onDateChange={setDate} />
      </View>
      </View> */}
      
      {/* </View> */}

    </View>
    
    )
  }

  export default ProfitReport;



const styles = StyleSheet.create({
    containerr: {
        flex:1,
       backgroundColor: '#f9f9fb',
    },
    container: {
      flex: 1,
      // alignItems: "center",
      // justifyContent: 'center',
      backgroundColor: '#f9f9fb',
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
    scrol: {
        // marginTop: 70,
        height: '100%',
      },
  
    userfield: {
      flexDirection: 'row',
  
      borderBottomWidth: 1,
      borderBottomColor: '#f9f9fb',
  
      width: '77%',
      marginTop: 70,
    },
    textInput: {
      marginTop: -10,
      paddingLeft: 10,
      color: '#f9f9fb',
    },
    userfield2: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      width: '77%',
    //   marginTop: 20,
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
    text1:{
        fontSize: 16,
        fontWeight: "bold",
        // paddingTop: 7
        color:'#fff'
        
    },
    card: {
      height: 30,
      // backgroundColor: '#fff',
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
    icons: {
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