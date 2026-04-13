import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Gallery from './screens/gallery';
import Message from './screens/message';
import VideoScreen from './screens/video';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Video" component={VideoScreen} />
      </Tab.Navigator>
  );
}
