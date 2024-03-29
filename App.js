import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/home';
import Login from './screen/login';
import Signup from './screen/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import RockPaper from './components/RockPaper';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {/* <View style={styles.container}> */}
          <Stack.Screen name="RockPaper" component={RockPaper} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          {/* <RockPaper /> */}
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F319D',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
