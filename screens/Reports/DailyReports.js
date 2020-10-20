import React, { Component, useState , useEffect} from 'react'
import DatePicker from 'react-native-datepicker'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
  TouchableOpacity,
  ImageBackground
  } from 'react-native';
import Arrowicon from 'react-native-vector-icons/AntDesign';
import img from '../../assets/profile.jpg';
import MyTabs from './AllReports';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  
} from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SERVER_URL} from '../../utils/config';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'

import {
  GET_BESTSELLING_REPORT_SUCCESS,
  GET_BESTSELLING_REPORT_FAIL,
  GET_PROFIT_GRAPH_REPORT_FAIL,
  GET_PROFIT_GRAPH_REPORT_SUCCESS
} from '../../actions/types';
import { onChange } from 'react-native-reanimated';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3.7);


const DailyReport = ({navigation}) => {
  
     const [sdate, setSDate] = useState(new Date());
       const dt =new Date();
       let dtt =new Date(); 
       dtt.setDate(-30);
     const [edateBestSale, setEDateBestSale] = useState(dt);
     const [bestSaleBrand, setBestSaleBrand] = useState([]);
     const [bestSaleBrandCount, setBestSaleBrandCount] = useState([]);
    
    const [sdateBestSale, setSDateBestSale] = useState(dtt);
    const [edateProfit, setEDateProfit] = useState(dt);
    
    const [sdateProfit, setSDateProfit] = useState(dtt);

    const [spinner, setSpinner] = useState(false);
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
   
    const bestSellingGraphDate = useSelector(state => state.report.bestSellingGraph)
    const ProfitGraph = useSelector(state => state.report.ProfitGraph)
    console.log('ProfitGraph', ProfitGraph)
  
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
  
    useEffect(() => {
      setSpinner(true);
      
      console.log('token', token);
     
      if(token !== undefined){
        // setInterval(() => {
          fetch(`${SERVER_URL}api/report/best-selling`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body:JSON.stringify({
                  sDate: sdateBestSale,
                  eDate: edateBestSale
            })
          })
            .then((response) => response.json())
            .then((responseJson) => {
              setSpinner(false);
              dispatch({
                type: GET_BESTSELLING_REPORT_SUCCESS,
                payload: responseJson,
              });
            
            })
            .catch((error) => {
              setSpinner(false);
             
              console.log('catchhh', error);
            });
    
            fetch(`${SERVER_URL}api/report/profit`, {
              method: 'POST',
              headers: {
                // 'Content-Type': 'application/json',
                // 'Authorization': 'Bearer' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              },
              body:JSON.stringify({
                    sDate: sdateProfit,
                    eDate: edateProfit
              })
            })
              .then((response) => response.json())
              .then((responseJson) => {
                setSpinner(false);
                dispatch({
                  type: GET_PROFIT_GRAPH_REPORT_SUCCESS,
                  payload: responseJson,
                });
               
              })
              .catch((error) => {
                setSpinner(false);
               
                console.log('catchhh', error);
              });
    
            //  let br= [];
            //  let ct = [];
            //  if(bestSellingGraphDate !== undefined ){
            //   for(let item of bestSellingGraphDate ){
            //          br.push(`${item.brand}(${item.model})`)
            //          ct.push(item.counter)
            //   }
              
            //   if(br.length > 0){
            //     setBestSaleBrand(br);
            //     setBestSaleBrandCount(ct)
            //   }
              
            // }
            // console.log('------selling', br )
            //   console.log('PROFT -----selling', ct )
             
        // }, 5000)
     
        }
      


    },[!token]);
    // const screenHeight = Math.round(Dimensions.get('window').height) / 2;
    
    console.log('bestSellingGraphDate selling---', bestSellingGraphDate )

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
        <Text style={{fontSize: 30, color:'#fff', fontWeight: 'bold', textAlign:'center', textAlignVertical: 'center'}}>Reports History</Text>
      {/* <View style={styles.div1}>
         <View>
          <Text style={styles.text1}>Start Date:</Text>
          </View>
          <View>
       <DatePicker
        style={{width: 200}}
        date={sdate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
      </View>
      <View style={styles.div1}>
         <View>
          <Text style={styles.text1}>End Date:</Text>
          </View>
          <View>
       <DatePicker
        style={{width: 200}}
        date={edate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
      </View> */}
      </View>
      </ImageBackground>
      <View style={styles.bar}>
        {/* <MyTabs/> */}
        <ScrollView style={{ flex: 1, height: 1000, backgroundColor:'#f9f9fb',  }}>
   <Text style={{paddingTop:20,paddingLeft:20, fontSize: 22, fontWeight:'bold'}}>Profit History:</Text>
  <View style={{ alignContent: "flex-start", alignItems:'center'}}>
 
  <BarChart
    data={{
      labels: [ "Sales", 'Profit' ],
      // labels: [ bestSellingGraphDate.brand ],
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      datasets: [
        {
          data: [
               `${ProfitGraph.sales}`, `${ProfitGraph.profit}`
            ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    // yAxisLabel="Modle"
    // yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#2a62ff",
      backgroundGradientTo: "#2a62ff",
       decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "blue"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 8
    }}
  />
</View>
<View style={{flexDirection:'row',}}>
<Text style={{paddingTop:20,paddingLeft:20, fontSize: 22, fontWeight:'bold'}}>Best Selling</Text>
<Text style={{paddingTop:20,paddingLeft:1, fontSize: 14, fontWeight:'bold', textAlignVertical: 'center'}}>(This Month):</Text>
</View>
  <View style={{ alignContent: "flex-start", alignItems:'center'}}>
 
  <BarChart
    data={{
      labels: ["",'Nokia'],
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      datasets: [
        {
          data: [
                 0,10
            ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#2a62ff",
      backgroundGradientTo: "#2a62ff",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "blue"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 8
    }}
  />
</View>
<View style={{height: 550}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:40
          
        }}>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('closingreport')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Closing Report
          </Text>
          {/* <Text style={{color: '#2a62ff'}}>34</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('salesreport')} >
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Sales Report
          </Text>
          {/* <Text style={{color: '#2a62ff'}}>534</Text> */}
          </TouchableOpacity>
        
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:40
          
        }}>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('bestsellingReport')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Best Selling
          </Text>
          {/* <Text style={{color: '#2a62ff'}}>34</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('profitreport')} >
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
           Profit Report
          </Text>
          {/* <Text style={{color: '#2a62ff'}}>534</Text> */}
          </TouchableOpacity>
        
      </View>
      </View>
     
    </ScrollView>
      </View>


    </View>
    
    )
  }
  export default DailyReport;




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
    imgg: {
      height: ITEM_HEIGHT,
      width: ITEM_WIDTH,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    mainDiv:{
        height: '39%',
        backgroundColor: '#2a62ff',
        // marginTop: 10,
        borderRadius:10,
        width:"95%",
        alignSelf:'center',
        elevation:5,
        opacity: 0.9
    },
    div1:{
      height: 150,
      width: '42%',
      backgroundColor: '#ffff',
      borderRadius:10,
      flexDirection:"column",
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      elevation: 7
    },
    text1:{
        fontSize: 16,
        fontWeight: "bold",
        // paddingTop: 7
        color:'#fff'
        
    },
    bar:{
        marginTop: 10,
        height: '100%',
        backgroundColor : "#f9f9fb"
    },
    barText:{
        paddingLeft: 15,
        paddingTop:6
    },
    detail:{
        flexDirection: "column",
        marginTop: 10
        // justifyContent:'space-around',
        // alignContent:'center'
    },
    detail1:{
     height: 100,
    //  backgroundColor:'red',
     flexDirection:'row',
     justifyContent : "space-around"
    },
    detail2:{
        height: 100,
        backgroundColor:'black'
       },
       detailIn1:{
           width: "40%",
           backgroundColor: '#f9f9fb',
           height:'90%',
           elevation:3,
           borderRadius:5
       },
       detailIn2:{
        width: "40%",
        backgroundColor: '#ffff',
        height:'90%',
        elevation:3,
        borderRadius:5
    },
    meanurow: {
        height: 100,
        flexDirection: 'row',
        marginTop: 25,
      },
      meanutext: {
        justifyContent: 'center',
        marginLeft: 25,
        borderBottomWidth: 1,
        width: '60%',
        borderColor: '#A9A5A3',
      },
      logo:{
          height : '40%',
          width: '25%',
          backgroundColor : 'red',
          borderRadius: 200
      },
    qty: {

    }
   

  });