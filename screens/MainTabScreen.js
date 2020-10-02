import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const MainTabScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar 
        // barStyle= { theme.dark ? "light-content" : "dark-content" }
        />
        <Text style={{color: colors.text}}>Homeeeee  Screen</Text>
      <Button
        title="Go to details screen"
         onPress={() => navigation.openDrawer()}
      />
      </View>
    );
};

export default MainTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});