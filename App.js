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

import SettingsScreen from './screens/SettingScreen';

import DailyReport from './screens/Reports/DailyReports';

import Dashboard from './screens/Dashboard';
import AsyncStorage from '@react-native-community/async-storage'
import {useSelector, useDispatch} from 'react-redux';

 import RootStackScreen from './screens/RootStackScreen';
import { LOGIN_FAIL , LOGIN_SUCCESS} from './actions/types';
import BestSellingReport from './screens/Reports/BestSellingReport';
import ClosingReport from './screens/Reports/ClosingReport';
import SalesReport from './screens/Reports/SalesReport';
import ProfitReport from './screens/Reports/ProfitReport';
import VendorList from './screens/VendorList';
import EmployeeList from './screens/EmployeeList';
import InventoryList from './screens/InventoryList';
// import {login} from './components/context';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();




const  homeStack =  () => {
  return (
    <Stack.Navigator initialRouteName="home" headerMode="none">
      <Stack.Screen name="home"   component={Dashboard} />
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
      <Stack.Screen name="closingreport"   component={ClosingReport} />
      <Stack.Screen name="salesreport"   component={SalesReport} />
      <Stack.Screen name="profitreport"   component={ProfitReport} />
      <Stack.Screen name="bestsellingReport"   component={BestSellingReport} />
 
    </Stack.Navigator>
  );

  }

  

const  vendorStack =  () => {
  return (
    <Stack.Navigator initialRouteName="vendor-list" headerMode="none">
      <Stack.Screen name="vendor-list"   component={VendorList} />
    </Stack.Navigator>
  );

  }

  
const  empStack =  () => {
  return (
    <Stack.Navigator initialRouteName="emp-list" headerMode="none">
      <Stack.Screen name="emp-list"   component={EmployeeList} />
    </Stack.Navigator>
  );

  }
  const  iventStack =  () => {
    return (
      <Stack.Navigator initialRouteName="inventory-list" headerMode="none">
        <Stack.Screen name="inventory-list"   component={InventoryList} />
      </Stack.Navigator>
    );
  
    }

    const  profileStack =  () => {
      return (
        <Stack.Navigator initialRouteName="profile" headerMode="none">
          <Stack.Screen name="profile"   component={ProfileScreen} />
        </Stack.Navigator>
      );
    
      }

const App = () => {

    // const [login, setLogin] = useState(false)
    const login = useSelector(state => state.login.login_permission)
    const dispatch = useDispatch();
    console.log('login', login)
  
    const  checkStorge = async () => {
      try {
        const value = await AsyncStorage.getItem('User');
      

        if (value !== null) {
        dispatch({
              type: LOGIN_SUCCESS
          }) 
          console.log('user', value)
        } 
      } catch (error) {
        dispatch({
          type: LOGIN_FAIL
      })      
      console.log('catch', error)   
      }
    };
  
  
    useEffect(() =>{
      checkStorge();  
    }, [])
  


  return (
  
    <NavigationContainer>
      { login === true ? (
        <Drawer.Navigator  drawerContent={(props) => <DrawerContent {...props} />}   >
          <Drawer.Screen name="HomeDrawer"  component={homeStack} />
          <Drawer.Screen name="Sales" component={salesStack} />
          <Drawer.Screen name="report" component={reportStack} />
          <Drawer.Screen name="vendor" component={vendorStack} />
          <Drawer.Screen name="employee" component={empStack} />
          <Drawer.Screen name="inventory" component={iventStack} />
          <Drawer.Screen name="user-profile" component={profileStack} />
        </Drawer.Navigator>
       ) 
    :
       <RootStackScreen/>
     } 
    </NavigationContainer>
  );
}

export default App;
