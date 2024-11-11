import React from 'react';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import HeaderStyle from './HeaderStyle';

const Header = ({ navigation }: any) => {
  const currentUser = {
    username: 'KAPIL DEV',
    photoUrl:
      'https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw',
  };

  return (
    <View style={HeaderStyle.container}>
      
      <View style={HeaderStyle.userInfoContainer}>
        <Image source={{ uri: currentUser.photoUrl }} style={HeaderStyle.userPhoto} />
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={HeaderStyle.usernameText}>{currentUser.username}</Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity style={HeaderStyle.backButtonContainer} onPress={() => navigation.goBack()}>
        <Text style={HeaderStyle.backButton}>← Back</Text>
      </TouchableOpacity>
      
      <View style={HeaderStyle.buttonGroup}>
        <Pressable
          style={({ pressed }) => [HeaderStyle.navButton, pressed && HeaderStyle.buttonPressed]}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={HeaderStyle.navButtonText}>Add User</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [HeaderStyle.navButton, pressed && HeaderStyle.buttonPressed]}
          onPress={() => navigation.navigate('Data')}
        >
          <Text style={HeaderStyle.navButtonText}>User Profiles</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [HeaderStyle.navButton, pressed && HeaderStyle.buttonPressed]}
          onPress={() => navigation.navigate('FileUpload')}
        >
          <Text style={HeaderStyle.navButtonText}>Upload File</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [HeaderStyle.navButton, pressed && HeaderStyle.buttonPressed]}
          onPress={() => navigation.navigate('FileDownload')}
        >
          <Text style={HeaderStyle.navButtonText}>Download File</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [HeaderStyle.navButton, pressed && HeaderStyle.buttonPressed]}
          onPress={() => navigation.navigate('FetchApi')}
        >
          <Text style={HeaderStyle.navButtonText}>Fetch API Data</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
