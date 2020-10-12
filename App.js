import React, { useEffect , useState} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

 import { DrawerContent } from './screens/DrawerContent';
 import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from './screens/MainTabScreen';
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import ProductDetails from './screens/Sales/ProductDetails';
import SalesList from './screens/Sales/SalesList';
import ChangePassword from './screens/ChangePassword';
import SignUp from './screens/Signup';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingScreen';
import BookMark from './screens/BookMark';
import DailyReport from './screens/Reports/DailyReports';
import MyTabs from './screens/Reports/AllReports';
import Dashboard from './screens/Dashboard';




// import RootStackScreen from './screens/RootStackScreen';
// import {login} from './components/context';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();




const  homeStack =  () => {
  return (
    <Stack.Navigator initialRouteName="home" headerMode="none">
      <Stack.Screen name="Home"   component={Dashboard} />
      {/* <Stack.Screen name="saleDetail" component={ProductDetails} /> */}
    </Stack.Navigator>
  );

  }


const  salesStack =  () => {
  return (
    <Stack.Navigator initialRouteName="salesList" headerMode="none">
      <Stack.Screen name="salesList"   component={SalesList} />
      <Stack.Screen name="saleDetail" component={ProductDetails} />
    </Stack.Navigator>
  );

  }

  

const  reportStack =  () => {
  return (
    <Stack.Navigator initialRouteName="dailyreport" headerMode="none">
      <Stack.Screen name="dailyreport"   component={DailyReport} />
      <Stack.Screen name="all" component={MyTabs} />
    </Stack.Navigator>
  );

  }

const App = () => {

  //  const [login, setLogin] = useState(false)

  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
//  useEffect(() => {
//     setTimeout(() =>{
//       setLogin(true)
//     }, 1000)
//  }, [])


  return (
    <>
    {/* <AuthContext.Provider value={authContext}> */}
    <NavigationContainer>
      {/* { login == true ? ( */}
        <Drawer.Navigator  drawerContent={(props) => <DrawerContent {...props} />}   >
          <Drawer.Screen name="HomeDrawer"  component={homeStack} />
          <Drawer.Screen name="Sales" component={salesStack} />
          <Drawer.Screen name="report" component={reportStack} />
          <Drawer.Screen name="BookmarkScreen" component={BookMark} />
        </Drawer.Navigator>
      {/* ) */}
    {/* // :
    //   <RootStackScreen/>
    // } */}
    </NavigationContainer>
    {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
