import { Text, TouchableOpacity, View, ScrollView, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FetchApiStyle from './FetchApiStyle';

type User = {
  id: number;
  name: string;
  email: string;
};

const FetchApi = () => {
  const [data, setData] = useState<User[]>([]);
  const [apiUrl, setApiUrl] = useState<string>('https://jsonplaceholder.typicode.com/users');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const getApiData = async () => {
    if (!apiUrl) {
      Alert.alert('Error', 'Please enter a valid API URL');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData: User[] = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Fetch Error', 'Failed to fetch data. Please check the API URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={FetchApiStyle.background}>
      <ScrollView contentContainerStyle={FetchApiStyle.container}>
        <Text style={FetchApiStyle.headerText}>API Data Fetcher</Text>

        {/* Text Input for API URL */}
        <TextInput
          style={FetchApiStyle.textInput}
          placeholder="Enter API URL"
          value={apiUrl}
          onChangeText={(text) => setApiUrl(text)}
        />

        {/* Fetch Button */}
        <TouchableOpacity style={FetchApiStyle.fetchButton} onPress={getApiData}>
          <Text style={FetchApiStyle.fetchButtonText}>Fetch Data</Text>
        </TouchableOpacity>

        {/* Display API Data */}
        {isLoading ? (
          <Text style={FetchApiStyle.loadingText}>Loading...</Text>
        ) : data.length > 0 ? (
          data.map((item) => (
            <View key={item.id} style={FetchApiStyle.card}>
              <Text style={FetchApiStyle.cardText}>ID: {item.id}</Text>
              <Text style={FetchApiStyle.cardText}>Name: {item.name}</Text>
              <Text style={FetchApiStyle.cardText}>Email: {item.email}</Text>
            </View>
          ))
        ) : (
          <Text style={FetchApiStyle.loadingText}>No data available. Please check the API URL.</Text>
        )}

        {/* Back Button */}
        <TouchableOpacity style={FetchApiStyle.backButton} onPress={() => navigation.goBack()}>
          <Text style={FetchApiStyle.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FetchApi;
