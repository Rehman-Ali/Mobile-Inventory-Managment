import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrowicon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import img from '../assets/1.jpeg';
// import { IMAGE_URL } from './component/utils/config';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3.7);

import img from '../../assets/profile.jpg';
const ProductDetail = ({navigation}) => {
  
  return (
   
    <View style={styles.container}>
       <View style={styles.imgecon}>
       <ImageBackground source={img} style={styles.image}>
       <View style={styles.header}>
          <Arrowicon
            onPress={() => navigation.goBack()}
            name="arrowleft"
            color="#fff"
            size={24}
          />
          {/* <FontAwesome name="shopping-cart" color="#FB1F1F" size={20} /> */}
          <View />
        </View>
       </ImageBackground>
       </View>
       <View style={styles.desc}>
         <Text style={{fontSize:22, color:'#334364'}}>Details:</Text>
       </View>
       <ScrollView >
       <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
         
          
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
          <TouchableOpacity style={styles.div1}>
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
          <TouchableOpacity style={styles.div1}>
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
      </ScrollView>
    </View>
 
    
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'#f8f8fa'
   },
   imgecon:{
    height: '45%',
    width:'95%',
    alignSelf:'center',
    
   
  },
   image:{
     height: "100%",
     width: '100%', 
    
    //  justifyContent:'center',
     borderRadius: 25,
     marginTop:10,
    //  borderBottomRightRadius:20,
     overflow: 'hidden'
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
  desc:{
    height: 40,
    marginLeft: 20,
    marginTop: 20,
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
