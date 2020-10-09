import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
  TouchableOpacity,
  } from 'react-native';
import Arrowicon from 'react-native-vector-icons/AntDesign';
import img from '../../assets/profile.jpg';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3.7);
export default class DailyReport extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
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
            Daily Report
          </Text>
          {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
          <View />
        </View>
      </View>
      <View style={styles.mainDiv}>
      <View style={styles.div1}>
         <View>
          <Text style={styles.text1}>Start Date:</Text>
          </View>
          <View>
       <DatePicker
        style={{width: 200}}
        date={this.state.date}
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
        onDateChange={(date) => {this.setState({date: date})}}
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
        date={this.state.date}
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
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      </View>
      </View>
      <View style={styles.bar}>
         <Text style={styles.barText}>REPORT SUMMARY</Text>
      </View>
      <View style={styles.detail}>
         <View style={styles.detail1}>
           <View style={styles.detailIn1}>
               <View style={styles.logo}></View>
               <View style={styles.qty}>
                   <Text>3454</Text>
               </View>
               <View style={styles.textlogo}></View>
           </View>
           <View style={styles.detailIn2}></View>
         </View>
         <View style={styles.detail1}>
         <View style={styles.detailIn1}></View>
           <View style={styles.detailIn2}></View>
         </View>
      </View>
      <View style={styles.bar}>
         <Text style={styles.barText}>SALES PRODUCT</Text>
      </View>
      <ScrollView  >
         
              
         <TouchableOpacity
           >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
         <TouchableOpacity
         //   onPress={() =>
         //     props.navigation.navigate('meanudealdetailscreen', {item})
         //   }
           >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
         <TouchableOpacity
         //   onPress={() =>
         //     props.navigation.navigate('meanudealdetailscreen', {item})
         //   }
           >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
         <TouchableOpacity
         //   onPress={() =>
         //     props.navigation.navigate('meanudealdetailscreen', {item})
         //   }
           >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
         <TouchableOpacity
           
           >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
         <TouchableOpacity
          >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
         <TouchableOpacity
           >
           <View style={styles.meanurow}>
             <View style={{marginLeft: 25}}>
               <Image
                 style={{width: 90, height: 100, borderRadius: 10}}
                 source={img}
               />
             </View>
             <View style={styles.meanutext}>
               <Text style={{marginBottom: 18, fontSize: 18}}>
                 Product Name
               </Text>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: '#A9A5A3',
                     marginRight: 5,
                     marginTop: -5,
                   }}>
                   Description:
                 </Text>
               </View>
               <Text
                 style={{
                   color: '#A9A5A3',
                   marginRight: 5,
                   marginTop: -5,
                   fontSize: 12,
                   paddingLeft: 50,
                 }}>
                 Description......
               </Text>
             </View>
           </View>
         </TouchableOpacity>
     
     
    
    
 </ScrollView>
    </View>
    
    )
  }
}




const styles = StyleSheet.create({
    containerr: {
        flex:1,
       backgroundColor: '#ffff',
    },
    container: {
      flex: 1,
      // alignItems: "center",
      // justifyContent: 'center',
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
      color: '#ffff',
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
        height: '20%',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius:10,
        width:"95%",
        alignSelf:'center',
        elevation:5
    },
    div1:{
        marginTop: '5%',
        flexDirection: 'row',
        alignContent: "space-between",
        justifyContent: "center",
        alignItems:'center',
       
       

    },
    text1:{
        fontSize: 16,
        fontWeight: "bold",
        // paddingTop: 7
        
    },
    bar:{
        marginTop: 10,
        height: '5%',
        backgroundColor : "#eee"
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
           backgroundColor: '#ffff',
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