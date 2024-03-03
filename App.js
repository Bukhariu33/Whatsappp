
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './assets/navigation/MyTabs';
import TopWhats from './assets/whatsapptop/TopWhats';

export default function App() {
  return (
    
    <NavigationContainer>
      <TopWhats/>
     <MyTabs/>
    </NavigationContainer>
  );
}

