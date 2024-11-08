// import { Text, TouchableOpacity, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import FileUploadStyle from '../FetchApiStyle/FileUploadStyle';
// import { useNavigation } from '@react-navigation/native';

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// const FetchApi = () => {
//   const [data, setData] = useState<User[]>([]); 
//   const navigation = useNavigation();

//   const getApiData = async () => {
//     try {
//       const url = 'https://jsonplaceholder.typicode.com/users';
//       const response = await fetch(url);
//       const jsonData: User[] = await response.json(); 
//       setData(jsonData); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//   return (
//     <View>
//       <Text>FetchApi</Text>
//       {data.length > 0 ? (
//         data.map((item) => (
//           <View key={item.id}>
//             <Text>ID: {item.id}</Text>
//             <Text>NAME: {item.name}</Text>
//             <Text>EMAIL: {item.email}</Text>
//           </View>
//         ))
//       ) : (
//         <Text>Loading...</Text>
//       )}
//       <TouchableOpacity
//         style={FileUploadStyle.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={FileUploadStyle.backButtonText}>Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FetchApi;




import { Text, TouchableOpacity, View, ImageBackground,  ScrollView } from 'react-native';
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
  const navigation = useNavigation();

  const getApiData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url);
      const jsonData: User[] = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ImageBackground source={require('../src/background3.jpg')} style={FetchApiStyle.background}>
      <ScrollView contentContainerStyle={FetchApiStyle.container}>
        <Text style={FetchApiStyle.headerText}>API DATA</Text>
        
        {data.length > 0 ? (
          data.map((item) => (
            <View key={item.id} style={FetchApiStyle.card}>
              <Text style={FetchApiStyle.cardText}>ID: {item.id}</Text>
              <Text style={FetchApiStyle.cardText}>Name: {item.name}</Text>
              <Text style={FetchApiStyle.cardText}>Email: {item.email}</Text>
            </View>
          ))
        ) : (
          <Text style={FetchApiStyle.loadingText}>Loading...</Text>
        )}

        <TouchableOpacity
          style={FetchApiStyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={FetchApiStyle.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};



export default FetchApi;
