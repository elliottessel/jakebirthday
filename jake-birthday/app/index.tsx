import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './screens/home';
import gallery from './screens/gallery';
import message from './screens/message';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Gallery" component={gallery} />
        <Tab.Screen name="Message" component={message} />
      </Tab.Navigator>
  );
}
