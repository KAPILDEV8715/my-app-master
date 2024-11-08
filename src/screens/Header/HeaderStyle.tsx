// HeaderStyle.js
import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1E88E5',
    alignItems: 'center',
  },
  backButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,  
  },
  button: {
    marginHorizontal: 5, 
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default HeaderStyle;
