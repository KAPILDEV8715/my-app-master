import { View, Text, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import HeaderStyle from './HeaderStyle';

const Header = ({ navigation } :any) => {
  return (
    <View style={HeaderStyle.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={HeaderStyle.backButton}>Back</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }} />

      <View style={HeaderStyle.buttonGroup}>
        <View style={HeaderStyle.button}>
          <Button
            title="Go to Registration"
            onPress={() => navigation.navigate('Registration')}
            color="Blue"
          />
        </View>
        <View style={HeaderStyle.button}>
          <Button title="Profiles" onPress={() => navigation.navigate('Data')} color="Blue" />
        </View>
        <View style={HeaderStyle.button}>
          <Button title="Download File" onPress={() => navigation.navigate('FileDownload')} color="Blue" />
        </View>
        <View style={HeaderStyle.button}>
          <Button title="Upload File" onPress={() => navigation.navigate('FileUpload')} color="Blue" />
        </View>
        <View style={HeaderStyle.button}>
          <Button title="Fetch Api" onPress={() => navigation.navigate('FetchApi')} color="Blue" />
        </View>
      </View>
    </View>
  );
};

export default Header;

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const Header = ({ navigation }:any) => {
//   return (
//     <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#1E88E5', alignItems: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text style={{ color: 'white', fontWeight: 'bold' }}>Back</Text>
//       </TouchableOpacity>
//       <View style={{ flex: 1 }} />
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
//           <Text style={{ color: 'white', paddingHorizontal: 10 }}>Go to Registration</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Data')}>
//           <Text style={{ color: 'white', paddingHorizontal: 10 }}>Profiles</Text>
//         </TouchableOpacity>
//         {/* Add more buttons as needed */}
//       </View>
//     </View>
//   );
// };

// export default Header;
