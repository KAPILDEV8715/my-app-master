import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Header from '../screens/Header/Header';
import FetchApi from '../screens/FetchApi/FetchApi';
import FileDownload from '../screens/FileDownload/FileDownload';
import FileUpload from '../screens/FileUpload/FileUpload';
import Registration from '../screens/Registration/Registration';
import Data from '../screens/User/User';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{

        }}>
          <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: (props: any) => <Header {...props} />,
            headerShown: false, // This hides the header
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: (props: any) => <Header {...props} />,
            headerShown: false, // This hides the header
          }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{header: (props: any) => <Header {...props} />,
          headerShown:true,
        }}
        />
        <Stack.Screen
          name="Data"
          component={Data}
          options={{header: (props: any) => <Header {...props} />,headerShown:true,
        }}
        />
        <Stack.Screen
          name="FileUpload"
          component={FileUpload}
          options={{header: (props: any) => <Header {...props} />, headerShown:true,}}
        />
        <Stack.Screen
          name="FileDownload"
          component={FileDownload}
          options={{header: (props: any) => <Header {...props} />, headerShown:true,}}
        />
        <Stack.Screen
          name="FetchApi"
          component={FetchApi}
          options={{header: (props: any) => <Header {...props} />, headerShown:true,}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
