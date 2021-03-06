import React , {useEffect , useState}from 'react';
import { View, StyleSheet} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {LOGIN_FAIL, LOGIN_SUCCESS} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage'
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

   const dispatch = useDispatch();
   const [user, setUser] = useState()

    const checkStorge = async () => {
        try {
          const value = await AsyncStorage.getItem('User');
          console.log('valusse', JSON.parse(value));
          let data = JSON.parse(value)
          if (value !== null) {
           
            setUser(data);
          }
        } catch (error) {
          console.log('catch err', error);
        }
      };
    
      useEffect(() => {
        checkStorge();
      }, []);
    

    
    const  Logout = async () => {
        try {
          await AsyncStorage.removeItem('User');
          dispatch({
              type: LOGIN_FAIL
          }) 
        }catch(error){
          console.log(error)
        }

      };
    

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>{user !== undefined ? user.name : 'Hello'}</Title>
                                <Caption style={styles.caption}>Welcome here!</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Employee</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Vendor</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="home-outline" 
                                color="#2a62ff"
                                size={24}
                                />
                            )}
                            label="Dashboard"
                            onPress={() => {props.navigation.navigate('home')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-outline" 
                                color="#2a62ff"
                                size={24}
                                />
                            )}
                            label="Sales"
                            onPress={() => {props.navigation.navigate('Sales')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="bookmark-outline" 
                                color="#2a62ff"
                                size={24}
                                />
                            )}
                            label="Reports"
                            onPress={() => {props.navigation.navigate('report')}}
                        />
                        {/* <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="settings-outline" 
                                color="red"
                                size={24}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-check-outline" 
                                color="#2a62ff"
                                size={24}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
                    </Drawer.Section>
                    <Drawer.Section title="Support">
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Contact Us</Text>
                                 {/* <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>  */}
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="exit-to-app" 
                        color="#2a62ff"
                        size={24}
                        />
                    )}
                    label="Sign Out"
                     onPress={() => Logout()}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
