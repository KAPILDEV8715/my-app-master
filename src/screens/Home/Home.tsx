import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import HomeStyle from './HomeStyle';

const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  const currentUser = {
    username: 'KAPIL DEV',
    photoUrl:
      'https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw',
  };


  return (
    <SafeAreaView style={HomeStyle.safeArea}>
      <View style={HomeStyle.mainContainer}>
        
        <View style={HomeStyle.userInfoContainer}>
          <Image source={{ uri: currentUser.photoUrl }} style={HomeStyle.userPhoto} />
          
            <Text style={HomeStyle.usernameText}>{currentUser.username}</Text>
          
        </View>

        {/* Header Container */}
        <View style={HomeStyle.headerContainer}>
          <Text style={HomeStyle.welcomeText}>Welcome, {currentUser.username}!</Text>
        </View>

        {/* Additional Content Below Header */}
        <View style={HomeStyle.contentContainer}>
          <Text style={HomeStyle.contentText}>
            Explore the app features using the navigation buttons below. You can add new users, view profiles, upload or download files, and fetch data from an API.
          </Text>
        </View>

        {/* Navbar Container */}
        <View style={HomeStyle.navbarContainer}>
          <ScrollView horizontal contentContainerStyle={HomeStyle.navScrollView}>
            <TouchableOpacity
              style={HomeStyle.navButton}
              onPress={() => props.navigation.navigate('Registration')}
            >
              <Text style={HomeStyle.navButtonText}>Add User</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={HomeStyle.navButton}
              onPress={() => props.navigation.navigate('Data')}
            >
              <Text style={HomeStyle.navButtonText}>User Profiles</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={HomeStyle.navButton}
              onPress={() => props.navigation.navigate('FileUpload')}
            >
              <Text style={HomeStyle.navButtonText}>Upload File</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={HomeStyle.navButton}
              onPress={() => props.navigation.navigate('FileDownload')}
            >
              <Text style={HomeStyle.navButtonText}>Download File</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={HomeStyle.navButton}
              onPress={() => props.navigation.navigate('FetchApi')}
            >
              <Text style={HomeStyle.navButtonText}>Fetch API Data</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
