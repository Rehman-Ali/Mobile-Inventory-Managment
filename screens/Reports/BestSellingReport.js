import React, { Component , useState} from 'react'
// import DatePicker from 'react-native-datepicker'
import DatePicker from 'react-native-date-picker'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
  TouchableOpacity,
  ImageBackground
  } from 'react-native';
import Arrowicon from 'react-native-vector-icons/AntDesign';
import img from '../../assets/profile.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3.7);


const BestSellingReport = ({navigation}) => {
      const [date, setDate] = useState(new Date());
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
        <Text style={{fontSize: 30, color:'#fff', fontWeight: 'bold', textAlign:'center', textAlignVertical: 'center'}}>Best Selling Report</Text>
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
      </View>
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
      </View>
      </ImageBackground>
      


    </View>
    
    )
  }

  export default BestSellingReport;



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
        height: '100%',
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
    div11:{
        height: '100%',
        width: '95%',
        backgroundColor: '#2a62ff',
        borderRadius:10,
        flexDirection:"row",
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