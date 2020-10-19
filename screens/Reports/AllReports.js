import * as React from 'react';
import { Text, View ,Dimensions,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
    
  } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ScrollView } from 'react-native-gesture-handler';

function DailyScreen() {
  return (
    <ScrollView style={{ flex: 1, height: 1000, backgroundColor:'#f9f9fb',  }}>
   <Text style={{paddingTop:20,paddingLeft:20,}}>Report History:</Text>
  <View style={{ alignContent: "flex-start", alignItems:'center'}}>
 
  <BarChart
    data={{
      labels: ["Sales", "Profit"],
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 10,
            Math.random() * 5,
            ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
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
      borderRadius: 16
    }}
  />
</View>
<View style={{height: 450}}>
<View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:20,
          marginBottom: 60,
        
          
        }}>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Total Sales
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Profit
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('report')} >
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Loose
          </Text>
          <Text style={{color: '#2a62ff'}}>534</Text>
          </TouchableOpacity>
        
      </View>
      </View>
     
    </ScrollView>
  );
}

function WeeklyScreen() {
  return (
    <ScrollView style={{ flex: 1, height: 1000, backgroundColor:'#f9f9fb',  }}>
   <Text style={{paddingTop:20,paddingLeft:20,}}>Report History:</Text>
  <View style={{ alignContent: "flex-start", alignItems:'center'}}>
 
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 10,
            Math.random() * 5,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
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
      borderRadius: 16
    }}
  />
</View>
<View style={{height: 450}}>
<View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:20,
          marginBottom: 60,
        
          
        }}>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Total Sales
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Profit
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('report')} >
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Loose
          </Text>
          <Text style={{color: '#2a62ff'}}>534</Text>
          </TouchableOpacity>
        
      </View>
      </View>
     
    </ScrollView>
  );
}

function MonthlyScreen() {
  return (
    <ScrollView style={{ flex: 1, height: 1000, backgroundColor:'#f9f9fb',  }}>
   <Text style={{paddingTop:20,paddingLeft:20,}}>Report History:</Text>
  <View style={{ alignContent: "flex-start", alignItems:'center'}}>
 
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 10,
            Math.random() * 5,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
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
      borderRadius: 16
    }}
  />
</View>
<View style={{height: 450}}>
<View
        style={{
          flexDirection: 'row',
          justifyContent: "space-around",
          marginTop:20,
          marginBottom: 60,
        
          
        }}>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Total Sales
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Sales')}>
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Profit
          </Text>
          <Text style={{color: '#2a62ff'}}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('report')} >
          <Icon 
            name="home-outline" 
            color="#2a62ff"
            size={50}
          />
          <Text>
            Loose
          </Text>
          <Text style={{color: '#2a62ff'}}>534</Text>
          </TouchableOpacity>
        
      </View>
      </View>
     
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#000',
        labelStyle: { fontSize: 10 },
        style: { backgroundColor: '#f9f9fb' },
      }}
    >
      <Tab.Screen
        name="Daily"
        component={DailyScreen}
        options={{ tabBarLabel: 'Daily' }}
      />
      <Tab.Screen
        name="Weekly"
        component={WeeklyScreen}
        options={{ tabBarLabel: 'Weekly' }}
      />
      <Tab.Screen
        name="Monthly"
        component={MonthlyScreen}
        options={{ tabBarLabel: 'Monthly' }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    div1:{
      height: 150,
      width: '30%',
      backgroundColor: '#ffff',
      borderRadius:10,
      flexDirection:"column",
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
    }
   
  });

export default MyTabs;