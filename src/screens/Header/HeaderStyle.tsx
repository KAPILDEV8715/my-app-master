import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#e0f7fa', // Light blue background
    borderBottomWidth: 1,
    borderBottomColor: '#b2ebf2',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#00796b',
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  backButton: {
    fontSize: 16,
    color: '#00796b',
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  navButton: {
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonPressed: {
    backgroundColor: '#004d40',
  },
});

export default HeaderStyle;
