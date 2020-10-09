import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Image
  
} from 'react-native';



import Arrowicon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../../assets/login.jpg';
// import {SERVER_URL} from './component/utils/config';

const ShopList = ({navigation}) => {

  return (
    // <View style={styles.containerr}>
    //   <View style={styles.hbr}>
    //     <View style={styles.header}>
    //       <Arrowicon
    //         onPress={() => navigation.toggleDrawer()}
    //         name="bars"
    //         color="#ffff"
           
    //         size={22}
    //       />
    //       <Text style={{fontWeight: 'bold', fontSize: 20, alignItems:'center', color:'#fff'}}>
    //        Sales
    //       </Text>
    //       {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
    //       <View />
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: "space-around",
    //       marginTop:40
          
    //     }}>
    //       <View style={styles.div1}>
    //       <Icon 
    //         name="home-outline" 
    //         color="#2a62ff"
    //         size={50}
    //       />
    //       <Text>
    //         Sales
    //       </Text>
    //       <Text style={{color: '#2a62ff'}}>34</Text>
    //       </View>
    //       <View style={styles.div1}>
    //       <Icon 
    //         name="home-outline" 
    //         color="#2a62ff"
    //         size={50}
    //       />
    //       <Text>
    //         Reports
    //       </Text>
    //       <Text style={{color: '#2a62ff'}}>534</Text>
    //       </View>
        
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: "space-around",
    //       marginTop:15
          
    //     }}>
    //       <View style={styles.div1}>
    //       <Icon 
    //         name="home-outline" 
    //         color="#2a62ff"
    //         size={50}
    //       />
    //       <Text>
    //         Profile
    //       </Text>
    //       {/* <Text style={{color: '#2a62ff'}}>34</Text> */}
    //       </View>
    //       <View style={styles.div1}>
    //       <Icon 
    //         name="home-outline" 
    //         color="#2a62ff"
    //         size={50}
    //       />
    //       <Text>
    //         Employee
    //       </Text>
    //       <Text style={{color: '#2a62ff'}}>24</Text>
    //       </View>
        
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: "space-around",
    //       marginTop:15
          
    //     }}>
    //       <View style={styles.div1}>
    //       <Icon 
    //         name="home-outline" 
    //         color="#2a62ff"
    //         size={50}
    //       />
    //       <Text>
    //         Vendors
    //       </Text>
    //       <Text style={{color: '#2a62ff'}}>34</Text>
    //       </View>
    //       <View style={styles.div1}>
    //       <Icon 
    //         name="home-outline" 
    //         color="#2a62ff"
    //         size={50}
    //       />
    //       <Text>
    //         Sales
    //       </Text>
    //       <Text style={{color: '#2a62ff'}}>34</Text>
    //       </View>
        
    //   </View>
      
     
    // </View>
    <View style={styles.container}>
    <View style={styles.leftContainer}>
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
          <View style={{width:'85%', alignItems:'center' }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color:'#fff' }}>
           Sales
          </Text>
          </View>
         
          {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
          <View />
        </View>
      </View>
    <View style={styles.buttonContainer}>
     
      <View style={styles.addButton}>
        <View style={styles.innerDiv} >
          <Text  style={styles.innertext}>1229</Text>
          <Text>Sales</Text>
        </View>
        <View style={styles.innerDiv}>
          
          <Text style={styles.innertext}>100</Text>
          
          <Text>Profit</Text>
          
        </View>
        <View style={styles.innerDiv}>
          <Text style={styles.innertext}>1000</Text>
          <Text>Lose</Text>
        </View>
      </View>
    </View>
    
    </View>
    </View>
    <View style={styles.rightContainer}>
    <View >
       <ScrollView  style={styles.scrol}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon2}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon2}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon2}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('saleDetail')}>
        <View style={styles.diiv1}>
          <View style={styles.img}>
            <Image source={img} style={{height:40, width:40, borderRadius:25}}/>
          </View>
          <View style={styles.imgtext}>
             <Text style={{fontWeight:"bold"}}>Product Name</Text>
             <Text style={{color:"grey", fontSize:12}}>Desc</Text>
          </View>
        </View>
        <View style={styles.diiv2}>
          <View style={styles.inner}>
            <Text>
              $1000
            </Text>
            <Text style={{color:"grey", fontSize:12}}>
              0.5%
            </Text>

          </View>
          <View style={styles.icon2}>
          <Arrowicon
           
            name="arrow-right"
            color="#ffff"
             style={{alignSelf:'center', marginTop: '14%'}} 
            size={10}
          />
          </View>
        </View>
        
      </TouchableOpacity>
      
      
      </ScrollView>
    </View>
    </View>
  
</View>
  );
};

const styles = StyleSheet.create({
  // containerr: {
  //   flex:1,
  //   backgroundColor: '#2a62ff',
  // },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#2a62ff',
  // },
  mainCon:{
    flex:1,
    // position: 'absolute',
    width:'100%',
    flexDirection:'column',
    justifyContent:'center'
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
    zIndex:3
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
    flexDirection:'column',
    
    zIndex: 0   

},
leftContainer:{
    flex:1,
    backgroundColor: '#2a62ff',  
    
    zIndex: 2   
    
},
rightContainer:{
    flex:4,
    backgroundColor: '#fefeff',
  
    zIndex: 1 

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
   justifyContent: "space-around",
   alignSelf:'center',
   borderRadius:7,
   backgroundColor:'#fff',
   elevation: 5,
   flexDirection:'row',
  marginTop: '40%'
 
    // position: 
  //  width: '700'
},
innerDiv:{
   justifyContent:'center', 
   alignItems:'center',
    alignContent:'center',
    flexDirection:'column'
},
innertext:{
    fontSize: 25,
    color:'#2a62ff'
},
// list:{
//   marginTop:40,
//   backgroundColor: '#fefeff',
//    height:"90%" ,
//   width:'100%'
//   // backgroundColor: '#fbfbfb'
// },
scrol:{
  marginTop:70 ,
  height:'100%'
},
card:{
  height:30,
  backgroundColor :'#fff',
  width:'95%',
  marginTop:20,
  marginBottom:20,
  alignSelf:'center',
  flexDirection: 'row',
  justifyContent:'space-between' 
},
 diiv1:{
   height:'100%',
  //  backgroundColor:'pink',
   width:'70%',
   flexDirection:'row',
   alignItems:'center',
   marginLeft:10
 },
 diiv2:{
  height:'100%',
  // backgroundColor:'yellow',
   width:'25%',
   flexDirection:'row',
   alignItems:'center',
   justifyContent: "space-around"
},
imgtext:{
  marginLeft:'4%'
},
icon:{
  height: 17,
  width: '20%',
  backgroundColor:'#00c84e',
  borderRadius: 25

},
icon2:{
  height: 17,
  width: '20%',
  backgroundColor:'#f34b40',
  borderRadius: 25

},
inner:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}


});

export default ShopList;
