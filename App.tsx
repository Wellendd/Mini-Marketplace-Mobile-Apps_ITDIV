import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/HomeComponent/Home';
import {RootStackParamlist} from './src/navigator/types';
import Detail from './src/Detail/Detail';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MyProducts from './src/myProducts/MyProducts';
import Minigames from './src/minigames/Minigames';
const Stack = createNativeStackNavigator<RootStackParamlist>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Home}
            name="Home"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={({route}) => ({
              title: `${route.params?.productTitle}`,
              headerTitleStyle: {
                fontWeight: '900',
              },
            })}
          />
          <Stack.Screen
            name="MyProducts"
            component={MyProducts}
            options={() => ({
              title: 'My Products',
              headerTitleStyle: {
                fontWeight: '900',
              },
            })}
          />
          <Stack.Screen
            name="Minigame"
            component={Minigames}
            options={() => ({
              headerTitleStyle: {
                fontWeight: '900',
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
