import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import HomeStyle from './HomeStyle';

const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  return (
    <SafeAreaView style={{ flex: 9 }}>
      <ImageBackground source={require('../src/background5.jpg')} style={HomeStyle.background}>
        <View style={HomeStyle.mainContainer}>
          {/* Header Container */}
          <View style={HomeStyle.headerContainer}>
            <Text style={HomeStyle.welcomeText}>Welcome, User!</Text>
          </View>

          {/* Navbar Container */}
          <View style={HomeStyle.navbarContainer}>
            <ScrollView horizontal contentContainerStyle={HomeStyle.navScrollView}>
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('Registration')}>
                <Text style={HomeStyle.navButtonText}>Add User</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('Data')}>
                <Text style={HomeStyle.navButtonText}>User Profiles</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('FileUpload')}>
                <Text style={HomeStyle.navButtonText}>Upload File</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('FileDownload')}>
                <Text style={HomeStyle.navButtonText}>Download File</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('FetchApi')}>
                <Text style={HomeStyle.navButtonText}>Fetch Api Data</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
