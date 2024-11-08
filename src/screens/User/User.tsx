import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserStyle from './UserStyle';


interface User {
  name: string;
  email: string;
  password: string;
  id: number;
}

const Profiles: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [userData, setUserData] = useState<User[]>([]);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('userData');
      if (savedData) {
        const parsedData: User[] = JSON.parse(savedData);
        setUserData(parsedData);
      }
    } catch (error) {
      console.error('Error loading data', error);
      Alert.alert('Failed to load data.');
    }
  };

  const handleEdit = (item: { name: string; email: string; password: string; id: number }) => {
        navigation.navigate('Registration', {
          name: item.name,
          email: item.email,
          password: item.password,
          id: item.id,
        });
      };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id: number) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            try {
              console.log(`Deleting user with ID: ${id}`);
              const updatedData = userData.filter(user => user.id !== id);

              setUserData(updatedData); 
              await AsyncStorage.setItem('userData', JSON.stringify(updatedData));

              console.log('User deleted successfully, AsyncStorage updated');
              Alert.alert('Data deleted successfully!');
            } catch (error) {
              console.error('Error deleting user', error);
              Alert.alert('Failed to delete user.');
            }
          },
        },
      ],
    );
  };

  const renderItem = ({ item }: { item: { name: string; email: string; password: string; id: number } }) => (
        <View style={UserStyle.item}>
          <Text style={UserStyle.itemText}>Name: {item.name}</Text>
          <Text style={UserStyle.itemText}>Email: {item.email}</Text>
          <Text style={UserStyle.itemText}>Password: {item.password}</Text>
          <View style={UserStyle.buttonContainer}>
            <Button title="Edit" onPress={() => handleEdit(item)} color="#1E88E5" />
            <Button title="Delete" onPress={() => handleDelete(item.id)} color="#E53935" />
          </View>
        </View>
      );

  const keyExtractor = (item: User) => {
    return item.id ? item.id.toString() : Math.random().toString();
  };

  return (
    <ImageBackground source={require('../src/background3.jpg')} style={UserStyle.background}>
      <View style={UserStyle.overlay}>
        <Text style={UserStyle.title}>All Users</Text>
        {userData.length > 0 ? (
          <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        ) : (
          <Text>No data available.</Text>
        )}
        <TouchableOpacity style={UserStyle.backButton} onPress={() => navigation.goBack()}>
          <Text style={UserStyle.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Profiles;
