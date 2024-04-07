import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/home.screen';
import AboutUs from './screens/aboutus.screen';
import Locations from './screens/locations.screen'; 
import Feedback from './screens/feedback.screen';
import UCSDMap from './screens/map.screen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About Us" component={AboutUs} />
      <Tab.Screen name="UCSD Map" component={UCSDMap} />
      <Tab.Screen name="Locations" component={Locations} />
      <Tab.Screen name="Feedback" component={Feedback} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}