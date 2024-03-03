import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import ChatScreen from '../screens/chatScreen';
import TopWhats from '../whatsapptop/TopWhats';

const Tab = createMaterialTopTabNavigator();
const stack = createStackNavigator()

function MyTabs() {
  function Tabs(){
    return(
      <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#0c4f20',
          // Adjust the value to your preference
          // Adjust the value to your preference
        },
      }}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>

    )
  }
  return (
    <stack.Navigator>
      <stack.Screen name='Tabs' component={Tabs} options={{headerShown:false}}/>
      <stack.Screen name='chatScreen' component={ChatScreen} options={{headerShown:true}} />
    </stack.Navigator>
)}

export default MyTabs;
