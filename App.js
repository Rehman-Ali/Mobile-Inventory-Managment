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

import MainTabScreen from './screens/MainTabScreen';
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import SignUp from './screens/Signup';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingScreen';
import BookMark from './screens/BookMark';



// import RootStackScreen from './screens/RootStackScreen';
// import {login} from './components/context';
const Drawer = createDrawerNavigator();

const App = () => {

  const [login, setLogin] = useState(false)

  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
 useEffect(() => {
    setTimeout(() =>{
      setLogin(true)
    }, 1000)
 }, [])


  return (
    <>
    {/* <AuthContext.Provider value={authContext}> */}
    <NavigationContainer>
      {/* { login == true ? ( */}
        <Drawer.Navigator  drawerContent={(props) => <DrawerContent {...props} />}   >
          <Drawer.Screen name="HomeDrawer"  component={Login} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
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
